import {
  cB as e,
  cC as t,
  as as n,
  r,
  dC as i,
  aR as o,
  dZ as a,
  h8 as s,
  a as l,
  n as c,
  bk as d,
  au as u,
  av as p,
  ec as m,
  at as f,
  a_ as h,
  dD as g,
  c as v,
  bm as b,
  aO as y,
} from "./index-DPRREYlk.js";
import { a as w } from "./index-ByCdxRYP.js";
import { o as _ } from "./PageWrapper-BPMfS97v.js";
var k,
  E = { exports: {} };
/*!
 * Vditor v3.10.5 - A markdown editor written in TypeScript.
 *
 * MIT License
 *
 * Copyright (c) 2018-present B3log 开源, b3log.org
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */ k = () =>
  (() => {
    var e = {
        85: (e) => {
          var t = function () {
              (this.Diff_Timeout = 1),
                (this.Diff_EditCost = 4),
                (this.Match_Threshold = 0.5),
                (this.Match_Distance = 1e3),
                (this.Patch_DeleteThreshold = 0.5),
                (this.Patch_Margin = 4),
                (this.Match_MaxBits = 32);
            },
            n = -1;
          (t.Diff = function (e, t) {
            return [e, t];
          }),
            (t.prototype.diff_main = function (e, n, r, i) {
              void 0 === i &&
                (i =
                  this.Diff_Timeout <= 0
                    ? Number.MAX_VALUE
                    : new Date().getTime() + 1e3 * this.Diff_Timeout);
              var o = i;
              if (null == e || null == n)
                throw new Error("Null input. (diff_main)");
              if (e == n) return e ? [new t.Diff(0, e)] : [];
              void 0 === r && (r = !0);
              var a = r,
                s = this.diff_commonPrefix(e, n),
                l = e.substring(0, s);
              (e = e.substring(s)),
                (n = n.substring(s)),
                (s = this.diff_commonSuffix(e, n));
              var c = e.substring(e.length - s);
              (e = e.substring(0, e.length - s)),
                (n = n.substring(0, n.length - s));
              var d = this.diff_compute_(e, n, a, o);
              return (
                l && d.unshift(new t.Diff(0, l)),
                c && d.push(new t.Diff(0, c)),
                this.diff_cleanupMerge(d),
                d
              );
            }),
            (t.prototype.diff_compute_ = function (e, r, i, o) {
              var a;
              if (!e) return [new t.Diff(1, r)];
              if (!r) return [new t.Diff(n, e)];
              var s = e.length > r.length ? e : r,
                l = e.length > r.length ? r : e,
                c = s.indexOf(l);
              if (-1 != c)
                return (
                  (a = [
                    new t.Diff(1, s.substring(0, c)),
                    new t.Diff(0, l),
                    new t.Diff(1, s.substring(c + l.length)),
                  ]),
                  e.length > r.length && (a[0][0] = a[2][0] = n),
                  a
                );
              if (1 == l.length) return [new t.Diff(n, e), new t.Diff(1, r)];
              var d = this.diff_halfMatch_(e, r);
              if (d) {
                var u = d[0],
                  p = d[1],
                  m = d[2],
                  f = d[3],
                  h = d[4],
                  g = this.diff_main(u, m, i, o),
                  v = this.diff_main(p, f, i, o);
                return g.concat([new t.Diff(0, h)], v);
              }
              return i && e.length > 100 && r.length > 100
                ? this.diff_lineMode_(e, r, o)
                : this.diff_bisect_(e, r, o);
            }),
            (t.prototype.diff_lineMode_ = function (e, r, i) {
              var o = this.diff_linesToChars_(e, r);
              (e = o.chars1), (r = o.chars2);
              var a = o.lineArray,
                s = this.diff_main(e, r, !1, i);
              this.diff_charsToLines_(s, a),
                this.diff_cleanupSemantic(s),
                s.push(new t.Diff(0, ""));
              for (var l = 0, c = 0, d = 0, u = "", p = ""; l < s.length; ) {
                switch (s[l][0]) {
                  case 1:
                    d++, (p += s[l][1]);
                    break;
                  case n:
                    c++, (u += s[l][1]);
                    break;
                  case 0:
                    if (c >= 1 && d >= 1) {
                      s.splice(l - c - d, c + d), (l = l - c - d);
                      for (
                        var m = this.diff_main(u, p, !1, i), f = m.length - 1;
                        f >= 0;
                        f--
                      )
                        s.splice(l, 0, m[f]);
                      l += m.length;
                    }
                    (d = 0), (c = 0), (u = ""), (p = "");
                }
                l++;
              }
              return s.pop(), s;
            }),
            (t.prototype.diff_bisect_ = function (e, r, i) {
              for (
                var o = e.length,
                  a = r.length,
                  s = Math.ceil((o + a) / 2),
                  l = s,
                  c = 2 * s,
                  d = new Array(c),
                  u = new Array(c),
                  p = 0;
                p < c;
                p++
              )
                (d[p] = -1), (u[p] = -1);
              (d[l + 1] = 0), (u[l + 1] = 0);
              for (
                var m = o - a,
                  f = m % 2 != 0,
                  h = 0,
                  g = 0,
                  v = 0,
                  b = 0,
                  y = 0;
                y < s && !(new Date().getTime() > i);
                y++
              ) {
                for (var w = -y + h; w <= y - g; w += 2) {
                  for (
                    var _ = l + w,
                      k =
                        (x =
                          w == -y || (w != y && d[_ - 1] < d[_ + 1])
                            ? d[_ + 1]
                            : d[_ - 1] + 1) - w;
                    x < o && k < a && e.charAt(x) == r.charAt(k);

                  )
                    x++, k++;
                  if (((d[_] = x), x > o)) g += 2;
                  else if (k > a) h += 2;
                  else if (
                    f &&
                    (L = l + m - w) >= 0 &&
                    L < c &&
                    -1 != u[L] &&
                    x >= (S = o - u[L])
                  )
                    return this.diff_bisectSplit_(e, r, x, k, i);
                }
                for (var E = -y + v; E <= y - b; E += 2) {
                  for (
                    var S,
                      L = l + E,
                      C =
                        (S =
                          E == -y || (E != y && u[L - 1] < u[L + 1])
                            ? u[L + 1]
                            : u[L - 1] + 1) - E;
                    S < o &&
                    C < a &&
                    e.charAt(o - S - 1) == r.charAt(a - C - 1);

                  )
                    S++, C++;
                  if (((u[L] = S), S > o)) b += 2;
                  else if (C > a) v += 2;
                  else if (!f) {
                    var x;
                    if (
                      (_ = l + m - E) >= 0 &&
                      _ < c &&
                      -1 != d[_] &&
                      ((k = l + (x = d[_]) - _), x >= (S = o - S))
                    )
                      return this.diff_bisectSplit_(e, r, x, k, i);
                  }
                }
              }
              return [new t.Diff(n, e), new t.Diff(1, r)];
            }),
            (t.prototype.diff_bisectSplit_ = function (e, t, n, r, i) {
              var o = e.substring(0, n),
                a = t.substring(0, r),
                s = e.substring(n),
                l = t.substring(r),
                c = this.diff_main(o, a, !1, i),
                d = this.diff_main(s, l, !1, i);
              return c.concat(d);
            }),
            (t.prototype.diff_linesToChars_ = function (e, t) {
              var n = [],
                r = {};
              function i(e) {
                for (
                  var t = "", i = 0, a = -1, s = n.length;
                  a < e.length - 1;

                ) {
                  -1 == (a = e.indexOf("\n", i)) && (a = e.length - 1);
                  var l = e.substring(i, a + 1);
                  (r.hasOwnProperty ? r.hasOwnProperty(l) : void 0 !== r[l])
                    ? (t += String.fromCharCode(r[l]))
                    : (s == o && ((l = e.substring(i)), (a = e.length)),
                      (t += String.fromCharCode(s)),
                      (r[l] = s),
                      (n[s++] = l)),
                    (i = a + 1);
                }
                return t;
              }
              n[0] = "";
              var o = 4e4,
                a = i(e);
              return (o = 65535), { chars1: a, chars2: i(t), lineArray: n };
            }),
            (t.prototype.diff_charsToLines_ = function (e, t) {
              for (var n = 0; n < e.length; n++) {
                for (var r = e[n][1], i = [], o = 0; o < r.length; o++)
                  i[o] = t[r.charCodeAt(o)];
                e[n][1] = i.join("");
              }
            }),
            (t.prototype.diff_commonPrefix = function (e, t) {
              if (!e || !t || e.charAt(0) != t.charAt(0)) return 0;
              for (
                var n = 0, r = Math.min(e.length, t.length), i = r, o = 0;
                n < i;

              )
                e.substring(o, i) == t.substring(o, i) ? (o = n = i) : (r = i),
                  (i = Math.floor((r - n) / 2 + n));
              return i;
            }),
            (t.prototype.diff_commonSuffix = function (e, t) {
              if (!e || !t || e.charAt(e.length - 1) != t.charAt(t.length - 1))
                return 0;
              for (
                var n = 0, r = Math.min(e.length, t.length), i = r, o = 0;
                n < i;

              )
                e.substring(e.length - i, e.length - o) ==
                t.substring(t.length - i, t.length - o)
                  ? (o = n = i)
                  : (r = i),
                  (i = Math.floor((r - n) / 2 + n));
              return i;
            }),
            (t.prototype.diff_commonOverlap_ = function (e, t) {
              var n = e.length,
                r = t.length;
              if (0 == n || 0 == r) return 0;
              n > r
                ? (e = e.substring(n - r))
                : n < r && (t = t.substring(0, n));
              var i = Math.min(n, r);
              if (e == t) return i;
              for (var o = 0, a = 1; ; ) {
                var s = e.substring(i - a),
                  l = t.indexOf(s);
                if (-1 == l) return o;
                (a += l),
                  (0 != l && e.substring(i - a) != t.substring(0, a)) ||
                    ((o = a), a++);
              }
            }),
            (t.prototype.diff_halfMatch_ = function (e, t) {
              if (this.Diff_Timeout <= 0) return null;
              var n = e.length > t.length ? e : t,
                r = e.length > t.length ? t : e;
              if (n.length < 4 || 2 * r.length < n.length) return null;
              var i = this;
              function o(e, t, n) {
                for (
                  var r,
                    o,
                    a,
                    s,
                    l = e.substring(n, n + Math.floor(e.length / 4)),
                    c = -1,
                    d = "";
                  -1 != (c = t.indexOf(l, c + 1));

                ) {
                  var u = i.diff_commonPrefix(e.substring(n), t.substring(c)),
                    p = i.diff_commonSuffix(
                      e.substring(0, n),
                      t.substring(0, c)
                    );
                  d.length < p + u &&
                    ((d = t.substring(c - p, c) + t.substring(c, c + u)),
                    (r = e.substring(0, n - p)),
                    (o = e.substring(n + u)),
                    (a = t.substring(0, c - p)),
                    (s = t.substring(c + u)));
                }
                return 2 * d.length >= e.length ? [r, o, a, s, d] : null;
              }
              var a,
                s,
                l,
                c,
                d,
                u = o(n, r, Math.ceil(n.length / 4)),
                p = o(n, r, Math.ceil(n.length / 2));
              return u || p
                ? ((a = p ? (u && u[4].length > p[4].length ? u : p) : u),
                  e.length > t.length
                    ? ((s = a[0]), (l = a[1]), (c = a[2]), (d = a[3]))
                    : ((c = a[0]), (d = a[1]), (s = a[2]), (l = a[3])),
                  [s, l, c, d, a[4]])
                : null;
            }),
            (t.prototype.diff_cleanupSemantic = function (e) {
              for (
                var r = !1,
                  i = [],
                  o = 0,
                  a = null,
                  s = 0,
                  l = 0,
                  c = 0,
                  d = 0,
                  u = 0;
                s < e.length;

              )
                0 == e[s][0]
                  ? ((i[o++] = s),
                    (l = d),
                    (c = u),
                    (d = 0),
                    (u = 0),
                    (a = e[s][1]))
                  : (1 == e[s][0]
                      ? (d += e[s][1].length)
                      : (u += e[s][1].length),
                    a &&
                      a.length <= Math.max(l, c) &&
                      a.length <= Math.max(d, u) &&
                      (e.splice(i[o - 1], 0, new t.Diff(n, a)),
                      (e[i[o - 1] + 1][0] = 1),
                      o--,
                      (s = --o > 0 ? i[o - 1] : -1),
                      (l = 0),
                      (c = 0),
                      (d = 0),
                      (u = 0),
                      (a = null),
                      (r = !0))),
                  s++;
              for (
                r && this.diff_cleanupMerge(e),
                  this.diff_cleanupSemanticLossless(e),
                  s = 1;
                s < e.length;

              ) {
                if (e[s - 1][0] == n && 1 == e[s][0]) {
                  var p = e[s - 1][1],
                    m = e[s][1],
                    f = this.diff_commonOverlap_(p, m),
                    h = this.diff_commonOverlap_(m, p);
                  f >= h
                    ? (f >= p.length / 2 || f >= m.length / 2) &&
                      (e.splice(s, 0, new t.Diff(0, m.substring(0, f))),
                      (e[s - 1][1] = p.substring(0, p.length - f)),
                      (e[s + 1][1] = m.substring(f)),
                      s++)
                    : (h >= p.length / 2 || h >= m.length / 2) &&
                      (e.splice(s, 0, new t.Diff(0, p.substring(0, h))),
                      (e[s - 1][0] = 1),
                      (e[s - 1][1] = m.substring(0, m.length - h)),
                      (e[s + 1][0] = n),
                      (e[s + 1][1] = p.substring(h)),
                      s++),
                    s++;
                }
                s++;
              }
            }),
            (t.prototype.diff_cleanupSemanticLossless = function (e) {
              function n(e, n) {
                if (!e || !n) return 6;
                var r = e.charAt(e.length - 1),
                  i = n.charAt(0),
                  o = r.match(t.nonAlphaNumericRegex_),
                  a = i.match(t.nonAlphaNumericRegex_),
                  s = o && r.match(t.whitespaceRegex_),
                  l = a && i.match(t.whitespaceRegex_),
                  c = s && r.match(t.linebreakRegex_),
                  d = l && i.match(t.linebreakRegex_),
                  u = c && e.match(t.blanklineEndRegex_),
                  p = d && n.match(t.blanklineStartRegex_);
                return u || p
                  ? 5
                  : c || d
                  ? 4
                  : o && !s && l
                  ? 3
                  : s || l
                  ? 2
                  : o || a
                  ? 1
                  : 0;
              }
              for (var r = 1; r < e.length - 1; ) {
                if (0 == e[r - 1][0] && 0 == e[r + 1][0]) {
                  var i = e[r - 1][1],
                    o = e[r][1],
                    a = e[r + 1][1],
                    s = this.diff_commonSuffix(i, o);
                  if (s) {
                    var l = o.substring(o.length - s);
                    (i = i.substring(0, i.length - s)),
                      (o = l + o.substring(0, o.length - s)),
                      (a = l + a);
                  }
                  for (
                    var c = i, d = o, u = a, p = n(i, o) + n(o, a);
                    o.charAt(0) === a.charAt(0);

                  ) {
                    (i += o.charAt(0)),
                      (o = o.substring(1) + a.charAt(0)),
                      (a = a.substring(1));
                    var m = n(i, o) + n(o, a);
                    m >= p && ((p = m), (c = i), (d = o), (u = a));
                  }
                  e[r - 1][1] != c &&
                    (c ? (e[r - 1][1] = c) : (e.splice(r - 1, 1), r--),
                    (e[r][1] = d),
                    u ? (e[r + 1][1] = u) : (e.splice(r + 1, 1), r--));
                }
                r++;
              }
            }),
            (t.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/),
            (t.whitespaceRegex_ = /\s/),
            (t.linebreakRegex_ = /[\r\n]/),
            (t.blanklineEndRegex_ = /\n\r?\n$/),
            (t.blanklineStartRegex_ = /^\r?\n\r?\n/),
            (t.prototype.diff_cleanupEfficiency = function (e) {
              for (
                var r = !1,
                  i = [],
                  o = 0,
                  a = null,
                  s = 0,
                  l = !1,
                  c = !1,
                  d = !1,
                  u = !1;
                s < e.length;

              )
                0 == e[s][0]
                  ? (e[s][1].length < this.Diff_EditCost && (d || u)
                      ? ((i[o++] = s), (l = d), (c = u), (a = e[s][1]))
                      : ((o = 0), (a = null)),
                    (d = u = !1))
                  : (e[s][0] == n ? (u = !0) : (d = !0),
                    a &&
                      ((l && c && d && u) ||
                        (a.length < this.Diff_EditCost / 2 &&
                          l + c + d + u == 3)) &&
                      (e.splice(i[o - 1], 0, new t.Diff(n, a)),
                      (e[i[o - 1] + 1][0] = 1),
                      o--,
                      (a = null),
                      l && c
                        ? ((d = u = !0), (o = 0))
                        : ((s = --o > 0 ? i[o - 1] : -1), (d = u = !1)),
                      (r = !0))),
                  s++;
              r && this.diff_cleanupMerge(e);
            }),
            (t.prototype.diff_cleanupMerge = function (e) {
              e.push(new t.Diff(0, ""));
              for (var r, i = 0, o = 0, a = 0, s = "", l = ""; i < e.length; )
                switch (e[i][0]) {
                  case 1:
                    a++, (l += e[i][1]), i++;
                    break;
                  case n:
                    o++, (s += e[i][1]), i++;
                    break;
                  case 0:
                    o + a > 1
                      ? (0 !== o &&
                          0 !== a &&
                          (0 !== (r = this.diff_commonPrefix(l, s)) &&
                            (i - o - a > 0 && 0 == e[i - o - a - 1][0]
                              ? (e[i - o - a - 1][1] += l.substring(0, r))
                              : (e.splice(
                                  0,
                                  0,
                                  new t.Diff(0, l.substring(0, r))
                                ),
                                i++),
                            (l = l.substring(r)),
                            (s = s.substring(r))),
                          0 !== (r = this.diff_commonSuffix(l, s)) &&
                            ((e[i][1] = l.substring(l.length - r) + e[i][1]),
                            (l = l.substring(0, l.length - r)),
                            (s = s.substring(0, s.length - r)))),
                        (i -= o + a),
                        e.splice(i, o + a),
                        s.length && (e.splice(i, 0, new t.Diff(n, s)), i++),
                        l.length && (e.splice(i, 0, new t.Diff(1, l)), i++),
                        i++)
                      : 0 !== i && 0 == e[i - 1][0]
                      ? ((e[i - 1][1] += e[i][1]), e.splice(i, 1))
                      : i++,
                      (a = 0),
                      (o = 0),
                      (s = ""),
                      (l = "");
                }
              "" === e[e.length - 1][1] && e.pop();
              var c = !1;
              for (i = 1; i < e.length - 1; )
                0 == e[i - 1][0] &&
                  0 == e[i + 1][0] &&
                  (e[i][1].substring(e[i][1].length - e[i - 1][1].length) ==
                  e[i - 1][1]
                    ? ((e[i][1] =
                        e[i - 1][1] +
                        e[i][1].substring(
                          0,
                          e[i][1].length - e[i - 1][1].length
                        )),
                      (e[i + 1][1] = e[i - 1][1] + e[i + 1][1]),
                      e.splice(i - 1, 1),
                      (c = !0))
                    : e[i][1].substring(0, e[i + 1][1].length) == e[i + 1][1] &&
                      ((e[i - 1][1] += e[i + 1][1]),
                      (e[i][1] =
                        e[i][1].substring(e[i + 1][1].length) + e[i + 1][1]),
                      e.splice(i + 1, 1),
                      (c = !0))),
                  i++;
              c && this.diff_cleanupMerge(e);
            }),
            (t.prototype.diff_xIndex = function (e, t) {
              var r,
                i = 0,
                o = 0,
                a = 0,
                s = 0;
              for (
                r = 0;
                r < e.length &&
                (1 !== e[r][0] && (i += e[r][1].length),
                e[r][0] !== n && (o += e[r][1].length),
                !(i > t));
                r++
              )
                (a = i), (s = o);
              return e.length != r && e[r][0] === n ? s : s + (t - a);
            }),
            (t.prototype.diff_prettyHtml = function (e) {
              for (
                var t = [], r = /&/g, i = /</g, o = />/g, a = /\n/g, s = 0;
                s < e.length;
                s++
              ) {
                var l = e[s][0],
                  c = e[s][1]
                    .replace(r, "&amp;")
                    .replace(i, "&lt;")
                    .replace(o, "&gt;")
                    .replace(a, "&para;<br>");
                switch (l) {
                  case 1:
                    t[s] = '<ins style="background:#e6ffe6;">' + c + "</ins>";
                    break;
                  case n:
                    t[s] = '<del style="background:#ffe6e6;">' + c + "</del>";
                    break;
                  case 0:
                    t[s] = "<span>" + c + "</span>";
                }
              }
              return t.join("");
            }),
            (t.prototype.diff_text1 = function (e) {
              for (var t = [], n = 0; n < e.length; n++)
                1 !== e[n][0] && (t[n] = e[n][1]);
              return t.join("");
            }),
            (t.prototype.diff_text2 = function (e) {
              for (var t = [], r = 0; r < e.length; r++)
                e[r][0] !== n && (t[r] = e[r][1]);
              return t.join("");
            }),
            (t.prototype.diff_levenshtein = function (e) {
              for (var t = 0, r = 0, i = 0, o = 0; o < e.length; o++) {
                var a = e[o][0],
                  s = e[o][1];
                switch (a) {
                  case 1:
                    r += s.length;
                    break;
                  case n:
                    i += s.length;
                    break;
                  case 0:
                    (t += Math.max(r, i)), (r = 0), (i = 0);
                }
              }
              return (t += Math.max(r, i));
            }),
            (t.prototype.diff_toDelta = function (e) {
              for (var t = [], r = 0; r < e.length; r++)
                switch (e[r][0]) {
                  case 1:
                    t[r] = "+" + encodeURI(e[r][1]);
                    break;
                  case n:
                    t[r] = "-" + e[r][1].length;
                    break;
                  case 0:
                    t[r] = "=" + e[r][1].length;
                }
              return t.join("\t").replace(/%20/g, " ");
            }),
            (t.prototype.diff_fromDelta = function (e, r) {
              for (
                var i = [], o = 0, a = 0, s = r.split(/\t/g), l = 0;
                l < s.length;
                l++
              ) {
                var c = s[l].substring(1);
                switch (s[l].charAt(0)) {
                  case "+":
                    try {
                      i[o++] = new t.Diff(1, decodeURI(c));
                    } catch (p) {
                      throw new Error("Illegal escape in diff_fromDelta: " + c);
                    }
                    break;
                  case "-":
                  case "=":
                    var d = parseInt(c, 10);
                    if (isNaN(d) || d < 0)
                      throw new Error("Invalid number in diff_fromDelta: " + c);
                    var u = e.substring(a, (a += d));
                    "=" == s[l].charAt(0)
                      ? (i[o++] = new t.Diff(0, u))
                      : (i[o++] = new t.Diff(n, u));
                    break;
                  default:
                    if (s[l])
                      throw new Error(
                        "Invalid diff operation in diff_fromDelta: " + s[l]
                      );
                }
              }
              if (a != e.length)
                throw new Error(
                  "Delta length (" +
                    a +
                    ") does not equal source text length (" +
                    e.length +
                    ")."
                );
              return i;
            }),
            (t.prototype.match_main = function (e, t, n) {
              if (null == e || null == t || null == n)
                throw new Error("Null input. (match_main)");
              return (
                (n = Math.max(0, Math.min(n, e.length))),
                e == t
                  ? 0
                  : e.length
                  ? e.substring(n, n + t.length) == t
                    ? n
                    : this.match_bitap_(e, t, n)
                  : -1
              );
            }),
            (t.prototype.match_bitap_ = function (e, t, n) {
              if (t.length > this.Match_MaxBits)
                throw new Error("Pattern too long for this browser.");
              var r = this.match_alphabet_(t),
                i = this;
              function o(e, r) {
                var o = e / t.length,
                  a = Math.abs(n - r);
                return i.Match_Distance ? o + a / i.Match_Distance : a ? 1 : o;
              }
              var a = this.Match_Threshold,
                s = e.indexOf(t, n);
              -1 != s &&
                ((a = Math.min(o(0, s), a)),
                -1 != (s = e.lastIndexOf(t, n + t.length)) &&
                  (a = Math.min(o(0, s), a)));
              var l,
                c,
                d = 1 << (t.length - 1);
              s = -1;
              for (var u, p = t.length + e.length, m = 0; m < t.length; m++) {
                for (l = 0, c = p; l < c; )
                  o(m, n + c) <= a ? (l = c) : (p = c),
                    (c = Math.floor((p - l) / 2 + l));
                p = c;
                var f = Math.max(1, n - c + 1),
                  h = Math.min(n + c, e.length) + t.length,
                  g = Array(h + 2);
                g[h + 1] = (1 << m) - 1;
                for (var v = h; v >= f; v--) {
                  var b = r[e.charAt(v - 1)];
                  if (
                    ((g[v] =
                      0 === m
                        ? ((g[v + 1] << 1) | 1) & b
                        : (((g[v + 1] << 1) | 1) & b) |
                          ((u[v + 1] | u[v]) << 1) |
                          1 |
                          u[v + 1]),
                    g[v] & d)
                  ) {
                    var y = o(m, v - 1);
                    if (y <= a) {
                      if (((a = y), !((s = v - 1) > n))) break;
                      f = Math.max(1, 2 * n - s);
                    }
                  }
                }
                if (o(m + 1, n) > a) break;
                u = g;
              }
              return s;
            }),
            (t.prototype.match_alphabet_ = function (e) {
              for (var t = {}, n = 0; n < e.length; n++) t[e.charAt(n)] = 0;
              for (n = 0; n < e.length; n++)
                t[e.charAt(n)] |= 1 << (e.length - n - 1);
              return t;
            }),
            (t.prototype.patch_addContext_ = function (e, n) {
              if (0 != n.length) {
                if (null === e.start2) throw Error("patch not initialized");
                for (
                  var r = n.substring(e.start2, e.start2 + e.length1), i = 0;
                  n.indexOf(r) != n.lastIndexOf(r) &&
                  r.length <
                    this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin;

                )
                  (i += this.Patch_Margin),
                    (r = n.substring(e.start2 - i, e.start2 + e.length1 + i));
                i += this.Patch_Margin;
                var o = n.substring(e.start2 - i, e.start2);
                o && e.diffs.unshift(new t.Diff(0, o));
                var a = n.substring(
                  e.start2 + e.length1,
                  e.start2 + e.length1 + i
                );
                a && e.diffs.push(new t.Diff(0, a)),
                  (e.start1 -= o.length),
                  (e.start2 -= o.length),
                  (e.length1 += o.length + a.length),
                  (e.length2 += o.length + a.length);
              }
            }),
            (t.prototype.patch_make = function (e, r, i) {
              var o, a;
              if ("string" == typeof e && "string" == typeof r && void 0 === i)
                (o = e),
                  (a = this.diff_main(o, r, !0)).length > 2 &&
                    (this.diff_cleanupSemantic(a),
                    this.diff_cleanupEfficiency(a));
              else if (
                e &&
                "object" == typeof e &&
                void 0 === r &&
                void 0 === i
              )
                (a = e), (o = this.diff_text1(a));
              else if (
                "string" == typeof e &&
                r &&
                "object" == typeof r &&
                void 0 === i
              )
                (o = e), (a = r);
              else {
                if (
                  "string" != typeof e ||
                  "string" != typeof r ||
                  !i ||
                  "object" != typeof i
                )
                  throw new Error("Unknown call format to patch_make.");
                (o = e), (a = i);
              }
              if (0 === a.length) return [];
              for (
                var s = [],
                  l = new t.patch_obj(),
                  c = 0,
                  d = 0,
                  u = 0,
                  p = o,
                  m = o,
                  f = 0;
                f < a.length;
                f++
              ) {
                var h = a[f][0],
                  g = a[f][1];
                switch ((c || 0 === h || ((l.start1 = d), (l.start2 = u)), h)) {
                  case 1:
                    (l.diffs[c++] = a[f]),
                      (l.length2 += g.length),
                      (m = m.substring(0, u) + g + m.substring(u));
                    break;
                  case n:
                    (l.length1 += g.length),
                      (l.diffs[c++] = a[f]),
                      (m = m.substring(0, u) + m.substring(u + g.length));
                    break;
                  case 0:
                    g.length <= 2 * this.Patch_Margin && c && a.length != f + 1
                      ? ((l.diffs[c++] = a[f]),
                        (l.length1 += g.length),
                        (l.length2 += g.length))
                      : g.length >= 2 * this.Patch_Margin &&
                        c &&
                        (this.patch_addContext_(l, p),
                        s.push(l),
                        (l = new t.patch_obj()),
                        (c = 0),
                        (p = m),
                        (d = u));
                }
                1 !== h && (d += g.length), h !== n && (u += g.length);
              }
              return c && (this.patch_addContext_(l, p), s.push(l)), s;
            }),
            (t.prototype.patch_deepCopy = function (e) {
              for (var n = [], r = 0; r < e.length; r++) {
                var i = e[r],
                  o = new t.patch_obj();
                o.diffs = [];
                for (var a = 0; a < i.diffs.length; a++)
                  o.diffs[a] = new t.Diff(i.diffs[a][0], i.diffs[a][1]);
                (o.start1 = i.start1),
                  (o.start2 = i.start2),
                  (o.length1 = i.length1),
                  (o.length2 = i.length2),
                  (n[r] = o);
              }
              return n;
            }),
            (t.prototype.patch_apply = function (e, t) {
              if (0 == e.length) return [t, []];
              e = this.patch_deepCopy(e);
              var r = this.patch_addPadding(e);
              (t = r + t + r), this.patch_splitMax(e);
              for (var i = 0, o = [], a = 0; a < e.length; a++) {
                var s,
                  l,
                  c = e[a].start2 + i,
                  d = this.diff_text1(e[a].diffs),
                  u = -1;
                if (
                  (d.length > this.Match_MaxBits
                    ? -1 !=
                        (s = this.match_main(
                          t,
                          d.substring(0, this.Match_MaxBits),
                          c
                        )) &&
                      (-1 ==
                        (u = this.match_main(
                          t,
                          d.substring(d.length - this.Match_MaxBits),
                          c + d.length - this.Match_MaxBits
                        )) ||
                        s >= u) &&
                      (s = -1)
                    : (s = this.match_main(t, d, c)),
                  -1 == s)
                )
                  (o[a] = !1), (i -= e[a].length2 - e[a].length1);
                else if (
                  ((o[a] = !0),
                  (i = s - c),
                  d ==
                    (l =
                      -1 == u
                        ? t.substring(s, s + d.length)
                        : t.substring(s, u + this.Match_MaxBits)))
                )
                  t =
                    t.substring(0, s) +
                    this.diff_text2(e[a].diffs) +
                    t.substring(s + d.length);
                else {
                  var p = this.diff_main(d, l, !1);
                  if (
                    d.length > this.Match_MaxBits &&
                    this.diff_levenshtein(p) / d.length >
                      this.Patch_DeleteThreshold
                  )
                    o[a] = !1;
                  else {
                    this.diff_cleanupSemanticLossless(p);
                    for (var m, f = 0, h = 0; h < e[a].diffs.length; h++) {
                      var g = e[a].diffs[h];
                      0 !== g[0] && (m = this.diff_xIndex(p, f)),
                        1 === g[0]
                          ? (t =
                              t.substring(0, s + m) + g[1] + t.substring(s + m))
                          : g[0] === n &&
                            (t =
                              t.substring(0, s + m) +
                              t.substring(
                                s + this.diff_xIndex(p, f + g[1].length)
                              )),
                        g[0] !== n && (f += g[1].length);
                    }
                  }
                }
              }
              return [(t = t.substring(r.length, t.length - r.length)), o];
            }),
            (t.prototype.patch_addPadding = function (e) {
              for (var n = this.Patch_Margin, r = "", i = 1; i <= n; i++)
                r += String.fromCharCode(i);
              for (i = 0; i < e.length; i++)
                (e[i].start1 += n), (e[i].start2 += n);
              var o = e[0],
                a = o.diffs;
              if (0 == a.length || 0 != a[0][0])
                a.unshift(new t.Diff(0, r)),
                  (o.start1 -= n),
                  (o.start2 -= n),
                  (o.length1 += n),
                  (o.length2 += n);
              else if (n > a[0][1].length) {
                var s = n - a[0][1].length;
                (a[0][1] = r.substring(a[0][1].length) + a[0][1]),
                  (o.start1 -= s),
                  (o.start2 -= s),
                  (o.length1 += s),
                  (o.length2 += s);
              }
              return (
                0 == (a = (o = e[e.length - 1]).diffs).length ||
                0 != a[a.length - 1][0]
                  ? (a.push(new t.Diff(0, r)),
                    (o.length1 += n),
                    (o.length2 += n))
                  : n > a[a.length - 1][1].length &&
                    ((s = n - a[a.length - 1][1].length),
                    (a[a.length - 1][1] += r.substring(0, s)),
                    (o.length1 += s),
                    (o.length2 += s)),
                r
              );
            }),
            (t.prototype.patch_splitMax = function (e) {
              for (var r = this.Match_MaxBits, i = 0; i < e.length; i++)
                if (!(e[i].length1 <= r)) {
                  var o = e[i];
                  e.splice(i--, 1);
                  for (
                    var a = o.start1, s = o.start2, l = "";
                    0 !== o.diffs.length;

                  ) {
                    var c = new t.patch_obj(),
                      d = !0;
                    for (
                      c.start1 = a - l.length,
                        c.start2 = s - l.length,
                        "" !== l &&
                          ((c.length1 = c.length2 = l.length),
                          c.diffs.push(new t.Diff(0, l)));
                      0 !== o.diffs.length && c.length1 < r - this.Patch_Margin;

                    ) {
                      var u = o.diffs[0][0],
                        p = o.diffs[0][1];
                      1 === u
                        ? ((c.length2 += p.length),
                          (s += p.length),
                          c.diffs.push(o.diffs.shift()),
                          (d = !1))
                        : u === n &&
                          1 == c.diffs.length &&
                          0 == c.diffs[0][0] &&
                          p.length > 2 * r
                        ? ((c.length1 += p.length),
                          (a += p.length),
                          (d = !1),
                          c.diffs.push(new t.Diff(u, p)),
                          o.diffs.shift())
                        : ((p = p.substring(
                            0,
                            r - c.length1 - this.Patch_Margin
                          )),
                          (c.length1 += p.length),
                          (a += p.length),
                          0 === u
                            ? ((c.length2 += p.length), (s += p.length))
                            : (d = !1),
                          c.diffs.push(new t.Diff(u, p)),
                          p == o.diffs[0][1]
                            ? o.diffs.shift()
                            : (o.diffs[0][1] = o.diffs[0][1].substring(
                                p.length
                              )));
                    }
                    l = (l = this.diff_text2(c.diffs)).substring(
                      l.length - this.Patch_Margin
                    );
                    var m = this.diff_text1(o.diffs).substring(
                      0,
                      this.Patch_Margin
                    );
                    "" !== m &&
                      ((c.length1 += m.length),
                      (c.length2 += m.length),
                      0 !== c.diffs.length &&
                      0 === c.diffs[c.diffs.length - 1][0]
                        ? (c.diffs[c.diffs.length - 1][1] += m)
                        : c.diffs.push(new t.Diff(0, m))),
                      d || e.splice(++i, 0, c);
                  }
                }
            }),
            (t.prototype.patch_toText = function (e) {
              for (var t = [], n = 0; n < e.length; n++) t[n] = e[n];
              return t.join("");
            }),
            (t.prototype.patch_fromText = function (e) {
              var r = [];
              if (!e) return r;
              for (
                var i = e.split("\n"),
                  o = 0,
                  a = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;
                o < i.length;

              ) {
                var s = i[o].match(a);
                if (!s) throw new Error("Invalid patch string: " + i[o]);
                var l = new t.patch_obj();
                for (
                  r.push(l),
                    l.start1 = parseInt(s[1], 10),
                    "" === s[2]
                      ? (l.start1--, (l.length1 = 1))
                      : "0" == s[2]
                      ? (l.length1 = 0)
                      : (l.start1--, (l.length1 = parseInt(s[2], 10))),
                    l.start2 = parseInt(s[3], 10),
                    "" === s[4]
                      ? (l.start2--, (l.length2 = 1))
                      : "0" == s[4]
                      ? (l.length2 = 0)
                      : (l.start2--, (l.length2 = parseInt(s[4], 10))),
                    o++;
                  o < i.length;

                ) {
                  var c = i[o].charAt(0);
                  try {
                    var d = decodeURI(i[o].substring(1));
                  } catch (u) {
                    throw new Error("Illegal escape in patch_fromText: " + d);
                  }
                  if ("-" == c) l.diffs.push(new t.Diff(n, d));
                  else if ("+" == c) l.diffs.push(new t.Diff(1, d));
                  else if (" " == c) l.diffs.push(new t.Diff(0, d));
                  else {
                    if ("@" == c) break;
                    if ("" !== c)
                      throw new Error(
                        'Invalid patch mode "' + c + '" in: ' + d
                      );
                  }
                  o++;
                }
              }
              return r;
            }),
            ((t.patch_obj = function () {
              (this.diffs = []),
                (this.start1 = null),
                (this.start2 = null),
                (this.length1 = 0),
                (this.length2 = 0);
            }).prototype.toString = function () {
              for (
                var e,
                  t = [
                    "@@ -" +
                      (0 === this.length1
                        ? this.start1 + ",0"
                        : 1 == this.length1
                        ? this.start1 + 1
                        : this.start1 + 1 + "," + this.length1) +
                      " +" +
                      (0 === this.length2
                        ? this.start2 + ",0"
                        : 1 == this.length2
                        ? this.start2 + 1
                        : this.start2 + 1 + "," + this.length2) +
                      " @@\n",
                  ],
                  r = 0;
                r < this.diffs.length;
                r++
              ) {
                switch (this.diffs[r][0]) {
                  case 1:
                    e = "+";
                    break;
                  case n:
                    e = "-";
                    break;
                  case 0:
                    e = " ";
                }
                t[r + 1] = e + encodeURI(this.diffs[r][1]) + "\n";
              }
              return t.join("").replace(/%20/g, " ");
            }),
            (e.exports = t),
            (e.exports.diff_match_patch = t),
            (e.exports.DIFF_DELETE = n),
            (e.exports.DIFF_INSERT = 1),
            (e.exports.DIFF_EQUAL = 0);
        },
        664: (e, t, n) => {
          n.d(t, { default: () => j });
          var r = n(386),
            i = n(781),
            o = n(379),
            a = n(895),
            s = n(169),
            l = n(572),
            c = n(702),
            d = function (e) {
              void 0 === e && (e = document);
              var t = function (e) {
                var t = document.createElement("img");
                (t.src = e.getAttribute("data-src")),
                  t.addEventListener("load", function () {
                    e.getAttribute("style") ||
                      e.getAttribute("class") ||
                      e.getAttribute("width") ||
                      e.getAttribute("height") ||
                      (t.naturalHeight > t.naturalWidth &&
                        t.naturalWidth / t.naturalHeight <
                          document.querySelector(".vditor-reset").clientWidth /
                            (window.innerHeight - 40) &&
                        t.naturalHeight > window.innerHeight - 40 &&
                        (e.style.height = window.innerHeight - 40 + "px")),
                      (e.src = t.src);
                  }),
                  e.removeAttribute("data-src");
              };
              if (!("IntersectionObserver" in window))
                return (
                  e.querySelectorAll("img").forEach(function (e) {
                    e.getAttribute("data-src") && t(e);
                  }),
                  !1
                );
              window.vditorImageIntersectionObserver
                ? (window.vditorImageIntersectionObserver.disconnect(),
                  e.querySelectorAll("img").forEach(function (e) {
                    window.vditorImageIntersectionObserver.observe(e);
                  }))
                : ((window.vditorImageIntersectionObserver =
                    new IntersectionObserver(function (e) {
                      e.forEach(function (e) {
                        (void 0 === e.isIntersecting
                          ? 0 !== e.intersectionRatio
                          : e.isIntersecting) &&
                          e.target.getAttribute("data-src") &&
                          t(e.target);
                      });
                    })),
                  e.querySelectorAll("img").forEach(function (e) {
                    window.vditorImageIntersectionObserver.observe(e);
                  }));
            },
            u = n(982),
            p = n(431),
            m = n(570),
            f = n(593),
            h = n(558),
            g = n(182),
            v = n(931),
            b = n(793),
            y = n(652),
            w = n(998),
            _ = n(118),
            k = n(2),
            E = n(65),
            S = n(307),
            L = function (e, t) {
              if (
                (void 0 === t && (t = "zh_CN"),
                "undefined" != typeof speechSynthesis &&
                  "undefined" != typeof SpeechSynthesisUtterance)
              ) {
                var n = function () {
                    var e, n;
                    return (
                      speechSynthesis.getVoices().forEach(function (r) {
                        r.lang === t.replace("_", "-") && (e = r),
                          r.default && (n = r);
                      }),
                      e || (e = n),
                      e
                    );
                  },
                  r = '<svg><use xlink:href="#vditor-icon-play"></use></svg>',
                  i = '<svg><use xlink:href="#vditor-icon-pause"></use></svg>';
                document.getElementById("vditorIconScript") ||
                  ((r =
                    '<svg viewBox="0 0 32 32"><path d="M3.436 0l25.128 16-25.128 16v-32z"></path></svg>'),
                  (i =
                    '<svg viewBox="0 0 32 32"><path d="M20.617 0h9.128v32h-9.128v-32zM2.255 32v-32h9.128v32h-9.128z"></path></svg>'));
                var o = document.querySelector(".vditor-speech");
                o ||
                  (((o = document.createElement("button")).className =
                    "vditor-speech"),
                  e.insertAdjacentElement("beforeend", o),
                  void 0 !== speechSynthesis.onvoiceschanged &&
                    (speechSynthesis.onvoiceschanged = n));
                var a = n(),
                  s = new SpeechSynthesisUtterance();
                (s.voice = a),
                  (s.onend = s.onerror =
                    function () {
                      (o.style.display = "none"),
                        speechSynthesis.cancel(),
                        o.classList.remove("vditor-speech--current"),
                        (o.innerHTML = r);
                    }),
                  e.addEventListener(
                    void 0 !== window.ontouchstart ? "touchend" : "click",
                    function (t) {
                      var n = t.target;
                      if (
                        n.classList.contains("vditor-speech") ||
                        n.parentElement.classList.contains("vditor-speech")
                      )
                        return (
                          o.classList.contains("vditor-speech--current")
                            ? speechSynthesis.speaking &&
                              (speechSynthesis.paused
                                ? (speechSynthesis.resume(), (o.innerHTML = i))
                                : (speechSynthesis.pause(), (o.innerHTML = r)))
                            : ((s.text = o.getAttribute("data-text")),
                              speechSynthesis.speak(s),
                              o.classList.add("vditor-speech--current"),
                              (o.innerHTML = i)),
                          (0, S.Hc)(window.vditorSpeechRange),
                          void e.focus()
                        );
                      if (
                        ((o.style.display = "none"),
                        speechSynthesis.cancel(),
                        o.classList.remove("vditor-speech--current"),
                        (o.innerHTML = r),
                        0 !== getSelection().rangeCount)
                      ) {
                        var a = getSelection().getRangeAt(0),
                          l = a.toString().trim();
                        if (l) {
                          window.vditorSpeechRange = a.cloneRange();
                          var c = a.getBoundingClientRect();
                          (o.innerHTML = r),
                            (o.style.display = "block"),
                            (o.style.top =
                              c.top +
                              c.height +
                              document.querySelector("html").scrollTop -
                              20 +
                              "px"),
                            void 0 !== window.ontouchstart
                              ? (o.style.left =
                                  t.changedTouches[t.changedTouches.length - 1]
                                    .pageX +
                                  2 +
                                  "px")
                              : (o.style.left = t.clientX + 2 + "px"),
                            o.setAttribute("data-text", l);
                        }
                      }
                    }
                  );
              }
            },
            C = function (e, t, n, r) {
              return new (n || (n = Promise))(function (i, o) {
                function a(e) {
                  try {
                    l(r.next(e));
                  } catch (t) {
                    o(t);
                  }
                }
                function s(e) {
                  try {
                    l(r.throw(e));
                  } catch (t) {
                    o(t);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? i(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, s);
                }
                l((r = r.apply(e, t || [])).next());
              });
            },
            x = function (e, t) {
              var n,
                r,
                i,
                o,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function s(s) {
                return function (l) {
                  return (function (s) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o && ((o = 0), s[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (i =
                              2 & s[0]
                                ? r.return
                                : s[0]
                                ? r.throw || ((i = r.return) && i.call(r), 0)
                                : r.next) &&
                            !(i = i.call(r, s[1])).done)
                        )
                          return i;
                        switch (
                          ((r = 0), i && (s = [2 & s[0], i.value]), s[0])
                        ) {
                          case 0:
                          case 1:
                            i = s;
                            break;
                          case 4:
                            return a.label++, { value: s[1], done: !1 };
                          case 5:
                            a.label++, (r = s[1]), (s = [0]);
                            continue;
                          case 7:
                            (s = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (i =
                                  (i = a.trys).length > 0 && i[i.length - 1]) ||
                                (6 !== s[0] && 2 !== s[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === s[0] &&
                              (!i || (s[1] > i[0] && s[1] < i[3]))
                            ) {
                              a.label = s[1];
                              break;
                            }
                            if (6 === s[0] && a.label < i[1]) {
                              (a.label = i[1]), (i = s);
                              break;
                            }
                            if (i && a.label < i[2]) {
                              (a.label = i[2]), a.ops.push(s);
                              break;
                            }
                            i[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        s = t.call(e, a);
                      } catch (l) {
                        (s = [6, l]), (r = 0);
                      } finally {
                        n = i = 0;
                      }
                    if (5 & s[0]) throw s[1];
                    return { value: s[0] ? s[1] : void 0, done: !0 };
                  })([s, l]);
                };
              }
            },
            M = function (e) {
              var t,
                n = {
                  anchor: 0,
                  cdn: b.g.CDN,
                  customEmoji: {},
                  emojiPath: "".concat(b.g.CDN, "/dist/images/emoji"),
                  hljs: b.g.HLJS_OPTIONS,
                  icon: "ant",
                  lang: "zh_CN",
                  markdown: b.g.MARKDOWN_OPTIONS,
                  math: b.g.MATH_OPTIONS,
                  mode: "light",
                  speech: { enable: !1 },
                  render: { media: { enable: !0 } },
                  theme: b.g.THEME_OPTIONS,
                };
              return (
                e.cdn &&
                  ((null === (t = e.theme) || void 0 === t ? void 0 : t.path) ||
                    (n.theme.path = "".concat(
                      e.cdn,
                      "/dist/css/content-theme"
                    )),
                  e.emojiPath ||
                    (n.emojiPath = "".concat(e.cdn, "/dist/images/emoji"))),
                (0, k.T)(n, e)
              );
            },
            T = function (e, t) {
              var n = M(t);
              return (0, w.G)(
                "".concat(n.cdn, "/dist/js/lute/lute.min.js"),
                "vditorLuteScript"
              ).then(function () {
                var r = (0, E.X)({
                  autoSpace: n.markdown.autoSpace,
                  gfmAutoLink: n.markdown.gfmAutoLink,
                  codeBlockPreview: n.markdown.codeBlockPreview,
                  emojiSite: n.emojiPath,
                  emojis: n.customEmoji,
                  fixTermTypo: n.markdown.fixTermTypo,
                  footnotes: n.markdown.footnotes,
                  headingAnchor: 0 !== n.anchor,
                  inlineMathDigit: n.math.inlineDigit,
                  lazyLoadImage: n.lazyLoadImage,
                  linkBase: n.markdown.linkBase,
                  linkPrefix: n.markdown.linkPrefix,
                  listStyle: n.markdown.listStyle,
                  mark: n.markdown.mark,
                  mathBlockPreview: n.markdown.mathBlockPreview,
                  paragraphBeginningSpace: n.markdown.paragraphBeginningSpace,
                  sanitize: n.markdown.sanitize,
                  toc: n.markdown.toc,
                });
                return (
                  (null == t ? void 0 : t.renderers) &&
                    r.SetJSRenderers({ renderers: { Md2HTML: t.renderers } }),
                  r.SetHeadingID(!0),
                  r.Md2HTML(e)
                );
              });
            },
            A = function (e, t, n) {
              return C(void 0, void 0, void 0, function () {
                var i, g, b, k;
                return x(this, function (E) {
                  switch (E.label) {
                    case 0:
                      return (i = M(n)), [4, T(t, i)];
                    case 1:
                      if (
                        ((g = E.sent()),
                        i.transform && (g = i.transform(g)),
                        (e.innerHTML = g),
                        e.classList.add("vditor-reset"),
                        i.i18n)
                      )
                        return [3, 5];
                      if (
                        [
                          "en_US",
                          "fr_FR",
                          "pt_BR",
                          "ja_JP",
                          "ko_KR",
                          "ru_RU",
                          "sv_SE",
                          "zh_CN",
                          "zh_TW",
                        ].includes(i.lang)
                      )
                        return [3, 2];
                      throw new Error(
                        "options.lang error, see https://ld246.com/article/1549638745630#options"
                      );
                    case 2:
                      return (
                        (k = (b = "vditorI18nScript") + i.lang),
                        document
                          .querySelectorAll('head script[id^="'.concat(b, '"]'))
                          .forEach(function (e) {
                            e.id !== k && document.head.removeChild(e);
                          }),
                        [
                          4,
                          (0, w.G)(
                            ""
                              .concat(i.cdn, "/dist/js/i18n/")
                              .concat(i.lang, ".js"),
                            k
                          ),
                        ]
                      );
                    case 3:
                      E.sent(), (E.label = 4);
                    case 4:
                      return [3, 6];
                    case 5:
                      (window.VditorI18n = i.i18n), (E.label = 6);
                    case 6:
                      return i.icon
                        ? [
                            4,
                            (0, w.G)(
                              ""
                                .concat(i.cdn, "/dist/js/icons/")
                                .concat(i.icon, ".js"),
                              "vditorIconScript"
                            ),
                          ]
                        : [3, 8];
                    case 7:
                      E.sent(), (E.label = 8);
                    case 8:
                      return (
                        (0, y.Z)(i.theme.current, i.theme.path),
                        1 === i.anchor &&
                          e.classList.add("vditor-reset--anchor"),
                        (0, a.O)(e, i.hljs),
                        (0, c.s)(i.hljs, e, i.cdn),
                        (0, u.H)(e, { cdn: i.cdn, math: i.math }),
                        (0, m.i)(e, i.cdn, i.mode),
                        (0, f.K)(e, i.cdn, i.mode),
                        (0, s.P)(e, i.cdn),
                        (0, l.v)(e, i.cdn),
                        (0, o.p)(e, i.cdn, i.mode),
                        (0, h.P)(e, i.cdn, i.mode),
                        (0, v.B)(e, i.cdn),
                        (0, r.Q)(e, i.cdn),
                        i.render.media.enable && (0, p.Y)(e),
                        i.speech.enable && L(e),
                        0 !== i.anchor &&
                          ((S = i.anchor),
                          document
                            .querySelectorAll(".vditor-anchor")
                            .forEach(function (e) {
                              1 === S && e.classList.add("vditor-anchor--left"),
                                (e.onclick = function () {
                                  var t = e.getAttribute("href").substr(1),
                                    n = document.getElementById(
                                      "vditorAnchor-" + t
                                    ).offsetTop;
                                  document.querySelector("html").scrollTop = n;
                                });
                            }),
                          (window.onhashchange = function () {
                            var e = document.getElementById(
                              "vditorAnchor-" +
                                decodeURIComponent(
                                  window.location.hash.substr(1)
                                )
                            );
                            e &&
                              (document.querySelector("html").scrollTop =
                                e.offsetTop);
                          })),
                        i.after && i.after(),
                        i.lazyLoadImage && d(e),
                        e.addEventListener("click", function (t) {
                          var n = (0, _.lG)(t.target, "SPAN");
                          if (n && (0, _.fb)(n, "vditor-toc")) {
                            var r = e.querySelector(
                              "#" + n.getAttribute("data-target-id")
                            );
                            r && window.scrollTo(window.scrollX, r.offsetTop);
                          }
                        }),
                        [2]
                      );
                  }
                  var S;
                });
              });
            },
            H = n(971),
            N = n(34);
          const j = (function () {
            function e() {}
            return (
              (e.adapterRender = i),
              (e.previewImage = H.E),
              (e.codeRender = a.O),
              (e.graphvizRender = l.v),
              (e.highlightRender = c.s),
              (e.mathRender = u.H),
              (e.mermaidRender = m.i),
              (e.markmapRender = f.K),
              (e.flowchartRender = s.P),
              (e.chartRender = o.p),
              (e.abcRender = r.Q),
              (e.mindmapRender = h.P),
              (e.plantumlRender = v.B),
              (e.outlineRender = g.k),
              (e.mediaRender = p.Y),
              (e.speechRender = L),
              (e.lazyLoadImageRender = d),
              (e.md2html = T),
              (e.preview = A),
              (e.setCodeTheme = N.Y),
              (e.setContentTheme = y.Z),
              e
            );
          })();
        },
        793: (e, t, n) => {
          n.d(t, { H: () => r, g: () => i });
          var r = "3.10.5",
            i = (function () {
              function e() {}
              return (
                (e.ZWSP = "​"),
                (e.DROP_EDITOR = "application/editor"),
                (e.MOBILE_WIDTH = 520),
                (e.CLASS_MENU_DISABLED = "vditor-menu--disabled"),
                (e.EDIT_TOOLBARS = [
                  "emoji",
                  "headings",
                  "bold",
                  "italic",
                  "strike",
                  "link",
                  "list",
                  "ordered-list",
                  "outdent",
                  "indent",
                  "check",
                  "line",
                  "quote",
                  "code",
                  "inline-code",
                  "insert-after",
                  "insert-before",
                  "upload",
                  "record",
                  "table",
                ]),
                (e.CODE_THEME = [
                  "abap",
                  "algol",
                  "algol_nu",
                  "arduino",
                  "autumn",
                  "borland",
                  "bw",
                  "colorful",
                  "dracula",
                  "emacs",
                  "friendly",
                  "fruity",
                  "github",
                  "igor",
                  "lovelace",
                  "manni",
                  "monokai",
                  "monokailight",
                  "murphy",
                  "native",
                  "paraiso-dark",
                  "paraiso-light",
                  "pastie",
                  "perldoc",
                  "pygments",
                  "rainbow_dash",
                  "rrt",
                  "solarized-dark",
                  "solarized-dark256",
                  "solarized-light",
                  "swapoff",
                  "tango",
                  "trac",
                  "vim",
                  "vs",
                  "xcode",
                  "ant-design",
                ]),
                (e.CODE_LANGUAGES = [
                  "mermaid",
                  "echarts",
                  "mindmap",
                  "plantuml",
                  "abc",
                  "graphviz",
                  "flowchart",
                  "apache",
                  "js",
                  "ts",
                  "html",
                  "markmap",
                  "properties",
                  "apache",
                  "bash",
                  "c",
                  "csharp",
                  "cpp",
                  "css",
                  "coffeescript",
                  "diff",
                  "go",
                  "xml",
                  "http",
                  "json",
                  "java",
                  "javascript",
                  "kotlin",
                  "less",
                  "lua",
                  "makefile",
                  "markdown",
                  "nginx",
                  "objectivec",
                  "php",
                  "php-template",
                  "perl",
                  "plaintext",
                  "python",
                  "python-repl",
                  "r",
                  "ruby",
                  "rust",
                  "scss",
                  "sql",
                  "shell",
                  "swift",
                  "ini",
                  "typescript",
                  "vbnet",
                  "yaml",
                  "ada",
                  "clojure",
                  "dart",
                  "erb",
                  "fortran",
                  "gradle",
                  "haskell",
                  "julia",
                  "julia-repl",
                  "lisp",
                  "matlab",
                  "pgsql",
                  "powershell",
                  "sql_more",
                  "stata",
                  "cmake",
                  "mathematica",
                  "solidity",
                  "yul",
                ]),
                (e.CDN = "https://unpkg.com/vditor@".concat("3.10.5")),
                (e.MARKDOWN_OPTIONS = {
                  autoSpace: !1,
                  gfmAutoLink: !0,
                  codeBlockPreview: !0,
                  fixTermTypo: !1,
                  footnotes: !0,
                  linkBase: "",
                  linkPrefix: "",
                  listStyle: !1,
                  mark: !1,
                  mathBlockPreview: !0,
                  paragraphBeginningSpace: !1,
                  sanitize: !0,
                  toc: !1,
                }),
                (e.HLJS_OPTIONS = {
                  enable: !0,
                  lineNumber: !1,
                  defaultLang: "",
                  style: "github",
                }),
                (e.MATH_OPTIONS = {
                  engine: "KaTeX",
                  inlineDigit: !1,
                  macros: {},
                }),
                (e.THEME_OPTIONS = {
                  current: "light",
                  list: {
                    "ant-design": "Ant Design",
                    dark: "Dark",
                    light: "Light",
                    wechat: "WeChat",
                  },
                  path: "".concat(e.CDN, "/dist/css/content-theme"),
                }),
                e
              );
            })();
        },
        386: (e, t, n) => {
          n.d(t, { Q: () => a });
          var r = n(793),
            i = n(998),
            o = n(781),
            a = function (e, t) {
              void 0 === e && (e = document), void 0 === t && (t = r.g.CDN);
              var n = o.abcRenderAdapter.getElements(e);
              n.length > 0 &&
                (0, i.G)(
                  "".concat(t, "/dist/js/abcjs/abcjs_basic.min.js"),
                  "vditorAbcjsScript"
                ).then(function () {
                  n.forEach(function (e) {
                    e.parentElement.classList.contains("vditor-wysiwyg__pre") ||
                      e.parentElement.classList.contains(
                        "vditor-ir__marker--pre"
                      ) ||
                      ("true" !== e.getAttribute("data-processed") &&
                        (ABCJS.renderAbc(
                          e,
                          o.abcRenderAdapter.getCode(e).trim()
                        ),
                        (e.style.overflowX = "auto"),
                        e.setAttribute("data-processed", "true")));
                  });
                });
            };
        },
        781: (e, t, n) => {
          n.r(t),
            n.d(t, {
              abcRenderAdapter: () => l,
              chartRenderAdapter: () => s,
              flowchartRenderAdapter: () => d,
              graphvizRenderAdapter: () => c,
              markmapRenderAdapter: () => o,
              mathRenderAdapter: () => r,
              mermaidRenderAdapter: () => i,
              mindmapRenderAdapter: () => a,
              plantumlRenderAdapter: () => u,
            });
          var r = {
              getCode: function (e) {
                return e.textContent;
              },
              getElements: function (e) {
                return e.querySelectorAll(".language-math");
              },
            },
            i = {
              getCode: function (e) {
                return e.textContent;
              },
              getElements: function (e) {
                return e.querySelectorAll(".language-mermaid");
              },
            },
            o = {
              getCode: function (e) {
                return e.textContent;
              },
              getElements: function (e) {
                return e.querySelectorAll(".language-markmap");
              },
            },
            a = {
              getCode: function (e) {
                return e.getAttribute("data-code");
              },
              getElements: function (e) {
                return e.querySelectorAll(".language-mindmap");
              },
            },
            s = {
              getCode: function (e) {
                return e.innerText;
              },
              getElements: function (e) {
                return e.querySelectorAll(".language-echarts");
              },
            },
            l = {
              getCode: function (e) {
                return e.textContent;
              },
              getElements: function (e) {
                return e.querySelectorAll(".language-abc");
              },
            },
            c = {
              getCode: function (e) {
                return e.textContent;
              },
              getElements: function (e) {
                return e.querySelectorAll(".language-graphviz");
              },
            },
            d = {
              getCode: function (e) {
                return e.textContent;
              },
              getElements: function (e) {
                return e.querySelectorAll(".language-flowchart");
              },
            },
            u = {
              getCode: function (e) {
                return e.textContent;
              },
              getElements: function (e) {
                return e.querySelectorAll(".language-plantuml");
              },
            };
        },
        379: (e, t, n) => {
          n.d(t, { p: () => a });
          var r = n(793),
            i = n(998),
            o = n(781),
            a = function (e, t, n) {
              void 0 === e && (e = document), void 0 === t && (t = r.g.CDN);
              var a = o.chartRenderAdapter.getElements(e);
              a.length > 0 &&
                (0, i.G)(
                  "".concat(t, "/dist/js/echarts/echarts.min.js"),
                  "vditorEchartsScript"
                ).then(function () {
                  a.forEach(function (e) {
                    if (
                      !e.parentElement.classList.contains(
                        "vditor-wysiwyg__pre"
                      ) &&
                      !e.parentElement.classList.contains(
                        "vditor-ir__marker--pre"
                      )
                    ) {
                      var t = o.chartRenderAdapter.getCode(e).trim();
                      if (t)
                        try {
                          if ("true" === e.getAttribute("data-processed"))
                            return;
                          var r = JSON.parse(t);
                          echarts
                            .init(e, "dark" === n ? "dark" : void 0)
                            .setOption(r),
                            e.setAttribute("data-processed", "true");
                        } catch (i) {
                          (e.className = "vditor-reset--error"),
                            (e.innerHTML = "echarts render error: <br>".concat(
                              i
                            ));
                        }
                    }
                  });
                });
            };
        },
        895: (e, t, n) => {
          n.d(t, { O: () => o });
          var r = n(528),
            i = n(793),
            o = function (e, t) {
              Array.from(e.querySelectorAll("pre > code"))
                .filter(function (t, n) {
                  return !(
                    t.parentElement.classList.contains("vditor-wysiwyg__pre") ||
                    t.parentElement.classList.contains(
                      "vditor-ir__marker--pre"
                    ) ||
                    t.classList.contains("language-mermaid") ||
                    t.classList.contains("language-flowchart") ||
                    t.classList.contains("language-echarts") ||
                    t.classList.contains("language-mindmap") ||
                    t.classList.contains("language-plantuml") ||
                    t.classList.contains("language-markmap") ||
                    t.classList.contains("language-abc") ||
                    t.classList.contains("language-graphviz") ||
                    t.classList.contains("language-math") ||
                    t.style.maxHeight.indexOf("px") > -1 ||
                    (e.classList.contains("vditor-preview") && n > 5)
                  );
                })
                .forEach(function (e) {
                  var n,
                    o,
                    a,
                    s = e.innerText;
                  if (e.classList.contains("highlight-chroma")) {
                    var l = e.cloneNode(!0);
                    l.querySelectorAll(".highlight-ln").forEach(function (e) {
                      e.remove();
                    }),
                      (s = l.innerText);
                  } else s.endsWith("\n") && (s = s.substr(0, s.length - 1));
                  var c =
                    '<svg><use xlink:href="#vditor-icon-copy"></use></svg>';
                  document.getElementById("vditorIconScript") ||
                    (c =
                      '<svg viewBox="0 0 32 32"><path d="M22.545-0h-17.455c-1.6 0-2.909 1.309-2.909 2.909v20.364h2.909v-20.364h17.455v-2.909zM26.909 5.818h-16c-1.6 0-2.909 1.309-2.909 2.909v20.364c0 1.6 1.309 2.909 2.909 2.909h16c1.6 0 2.909-1.309 2.909-2.909v-20.364c0-1.6-1.309-2.909-2.909-2.909zM26.909 29.091h-16v-20.364h16v20.364z"></path></svg>');
                  var d = document.createElement("div");
                  (d.className = "vditor-copy"),
                    (d.innerHTML = '<span aria-label="'
                      .concat(
                        (null === (n = window.VditorI18n) || void 0 === n
                          ? void 0
                          : n.copy) || "复制",
                        "\"\nonmouseover=\"this.setAttribute('aria-label', '"
                      )
                      .concat(
                        (null === (o = window.VditorI18n) || void 0 === o
                          ? void 0
                          : o.copy) || "复制",
                        "')\"\nclass=\"vditor-tooltipped vditor-tooltipped__w\"\nonclick=\"this.previousElementSibling.select();document.execCommand('copy');this.setAttribute('aria-label', '"
                      )
                      .concat(
                        (null === (a = window.VditorI18n) || void 0 === a
                          ? void 0
                          : a.copied) || "已复制",
                        "');this.previousElementSibling.blur()\">"
                      )
                      .concat(c, "</span>"));
                  var u = document.createElement("textarea");
                  (u.value = (0, r.X)(s)),
                    d.insertAdjacentElement("afterbegin", u),
                    t && t.renderMenu && t.renderMenu(e, d),
                    e.before(d),
                    (e.style.maxHeight = window.outerHeight - 40 + "px"),
                    e.insertAdjacentHTML(
                      "afterend",
                      '<span style="position: absolute">'.concat(
                        i.g.ZWSP,
                        "</span>"
                      )
                    );
                });
            };
        },
        169: (e, t, n) => {
          n.d(t, { P: () => a });
          var r = n(793),
            i = n(998),
            o = n(781),
            a = function (e, t) {
              void 0 === t && (t = r.g.CDN);
              var n = o.flowchartRenderAdapter.getElements(e);
              0 !== n.length &&
                (0, i.G)(
                  "".concat(t, "/dist/js/flowchart.js/flowchart.min.js"),
                  "vditorFlowchartScript"
                ).then(function () {
                  n.forEach(function (e) {
                    if ("true" !== e.getAttribute("data-processed")) {
                      var t = flowchart.parse(
                        o.flowchartRenderAdapter.getCode(e)
                      );
                      (e.innerHTML = ""),
                        t.drawSVG(e),
                        e.setAttribute("data-processed", "true");
                    }
                  });
                });
            };
        },
        572: (e, t, n) => {
          n.d(t, { v: () => a });
          var r = n(793),
            i = n(998),
            o = n(781),
            a = function (e, t) {
              void 0 === t && (t = r.g.CDN);
              var n = o.graphvizRenderAdapter.getElements(e);
              0 !== n.length &&
                (0, i.G)(
                  "".concat(t, "/dist/js/graphviz/viz.js"),
                  "vditorGraphVizScript"
                ).then(function () {
                  n.forEach(function (e) {
                    var t = o.graphvizRenderAdapter.getCode(e);
                    if (
                      !e.parentElement.classList.contains(
                        "vditor-wysiwyg__pre"
                      ) &&
                      !e.parentElement.classList.contains(
                        "vditor-ir__marker--pre"
                      ) &&
                      "true" !== e.getAttribute("data-processed") &&
                      "" !== t.trim()
                    ) {
                      try {
                        var n = new Blob(
                            [
                              "importScripts('".concat(
                                document
                                  .getElementById("vditorGraphVizScript")
                                  .src.replace("viz.js", "full.render.js"),
                                "');"
                              ),
                            ],
                            { type: "application/javascript" }
                          ),
                          r = (window.URL || window.webkitURL).createObjectURL(
                            n
                          ),
                          i = new Worker(r);
                        new Viz({ worker: i })
                          .renderSVGElement(t)
                          .then(function (t) {
                            e.innerHTML = t.outerHTML;
                          })
                          .catch(function (t) {
                            (e.innerHTML = "graphviz render error: <br>".concat(
                              t
                            )),
                              (e.className = "vditor-reset--error");
                          });
                      } catch (e) {}
                      e.setAttribute("data-processed", "true");
                    }
                  });
                });
            };
        },
        702: (e, t, n) => {
          n.d(t, { s: () => a });
          var r = n(793),
            i = n(998),
            o = n(296),
            a = function (e, t, n) {
              void 0 === t && (t = document), void 0 === n && (n = r.g.CDN);
              var a = e.style;
              r.g.CODE_THEME.includes(a) || (a = "github");
              var s = document.getElementById("vditorHljsStyle"),
                l = ""
                  .concat(n, "/dist/js/highlight.js/styles/")
                  .concat(a, ".css");
              s && s.getAttribute("href") !== l && s.remove(),
                (0, o.c)(
                  ""
                    .concat(n, "/dist/js/highlight.js/styles/")
                    .concat(a, ".css"),
                  "vditorHljsStyle"
                ),
                !1 !== e.enable &&
                  0 !== t.querySelectorAll("pre > code").length &&
                  (0, i.G)(
                    "".concat(n, "/dist/js/highlight.js/highlight.pack.js"),
                    "vditorHljsScript"
                  ).then(function () {
                    (0, i.G)(
                      "".concat(n, "/dist/js/highlight.js/solidity.min.js"),
                      "vditorHljsSolidityScript"
                    ).then(function () {
                      (0, i.G)(
                        "".concat(n, "/dist/js/highlight.js/yul.min.js"),
                        "vditorHljsYulScript"
                      ).then(function () {
                        t.querySelectorAll("pre > code").forEach(function (t) {
                          if (
                            !t.parentElement.classList.contains(
                              "vditor-ir__marker--pre"
                            ) &&
                            !t.parentElement.classList.contains(
                              "vditor-wysiwyg__pre"
                            ) &&
                            !(
                              t.classList.contains("language-mermaid") ||
                              t.classList.contains("language-flowchart") ||
                              t.classList.contains("language-echarts") ||
                              t.classList.contains("language-mindmap") ||
                              t.classList.contains("language-plantuml") ||
                              t.classList.contains("language-abc") ||
                              t.classList.contains("language-graphviz") ||
                              t.classList.contains("language-math")
                            ) &&
                            ("" !== e.defaultLang &&
                              -1 === t.className.indexOf("language-") &&
                              t.classList.add("language-" + e.defaultLang),
                            hljs.highlightElement(t),
                            e.lineNumber)
                          ) {
                            t.classList.add("vditor-linenumber");
                            var n = t.querySelector(".vditor-linenumber__temp");
                            n ||
                              (((n = document.createElement("div")).className =
                                "vditor-linenumber__temp"),
                              t.insertAdjacentElement("beforeend", n));
                            var r = getComputedStyle(t).whiteSpace,
                              i = !1;
                            ("pre-wrap" !== r && "pre-line" !== r) || (i = !0);
                            var o = "",
                              a = t.textContent.split(/\r\n|\r|\n/g);
                            a.pop(),
                              a.map(function (e) {
                                var t = "";
                                i &&
                                  ((n.textContent = e || "\n"),
                                  (t = ' style="height:'.concat(
                                    n.getBoundingClientRect().height,
                                    'px"'
                                  ))),
                                  (o += "<span".concat(t, "></span>"));
                              }),
                              (n.style.display = "none"),
                              (o =
                                '<span class="vditor-linenumber__rows">'.concat(
                                  o,
                                  "</span>"
                                )),
                              t.insertAdjacentHTML("beforeend", o);
                          }
                        });
                      });
                    });
                  });
            };
        },
        593: (e, t, n) => {
          n.d(t, { K: () => l });
          var r = n(793),
            i = n(998),
            o = n(781),
            a = {},
            s = function (e, t) {
              var n = window.markmap,
                r = n.Transformer,
                i = n.Markmap,
                o = n.deriveOptions;
              n.globalCSS;
              var s = new r();
              e.innerHTML = '<svg style="width:100%"></svg>';
              var l = e.firstChild,
                c = i.create(l, null),
                d = (function (e, t) {
                  var n = e.transform(t),
                    r = Object.keys(n.features).filter(function (e) {
                      return !a[e];
                    });
                  r.forEach(function (e) {
                    a[e] = !0;
                  });
                  var i = e.getAssets(r),
                    o = i.styles,
                    s = i.scripts,
                    l = window.markmap;
                  return o && l.loadCSS(o), s && l.loadJS(s), n;
                })(s, t),
                u = d.root,
                p = d.frontmatter,
                m = o(null == p ? void 0 : p.markmap);
              c.setData(u, m), c.fit();
            },
            l = function (e, t, n) {
              void 0 === t && (t = r.g.CDN);
              var a = o.markmapRenderAdapter.getElements(e);
              0 !== a.length &&
                (0, i.G)(
                  "".concat(t, "/dist/js/markmap/markmap.min.js"),
                  "vditorMermaidScript"
                ).then(function () {
                  a.forEach(function (e) {
                    var t = o.markmapRenderAdapter.getCode(e);
                    if (
                      "true" !== e.getAttribute("data-processed") &&
                      "" !== t.trim()
                    ) {
                      var n = document.createElement("div");
                      (n.className = "language-markmap"),
                        e.parentNode.appendChild(n),
                        s(n, t),
                        "CODE" == e.parentNode.childNodes[0].nodeName &&
                          e.parentNode.removeChild(e.parentNode.childNodes[0]);
                    }
                  });
                });
            };
        },
        982: (e, t, n) => {
          n.d(t, { H: () => l });
          var r = n(793),
            i = n(998),
            o = n(296),
            a = n(528),
            s = n(781),
            l = function (e, t) {
              var n = s.mathRenderAdapter.getElements(e);
              if (0 !== n.length) {
                var l = {
                  cdn: r.g.CDN,
                  math: { engine: "KaTeX", inlineDigit: !1, macros: {} },
                };
                if (
                  (t && t.math && (t.math = Object.assign({}, l.math, t.math)),
                  "KaTeX" === (t = Object.assign({}, l, t)).math.engine)
                )
                  (0, o.c)(
                    "".concat(t.cdn, "/dist/js/katex/katex.min.css?v=0.16.9"),
                    "vditorKatexStyle"
                  ),
                    (0, i.G)(
                      "".concat(t.cdn, "/dist/js/katex/katex.min.js?v=0.16.9"),
                      "vditorKatexScript"
                    ).then(function () {
                      (0, i.G)(
                        "".concat(
                          t.cdn,
                          "/dist/js/katex/mhchem.min.js?v=0.16.9"
                        ),
                        "vditorKatexChemScript"
                      ).then(function () {
                        n.forEach(function (e) {
                          if (
                            !e.parentElement.classList.contains(
                              "vditor-wysiwyg__pre"
                            ) &&
                            !e.parentElement.classList.contains(
                              "vditor-ir__marker--pre"
                            ) &&
                            !e.getAttribute("data-math")
                          ) {
                            var n = (0, a.X)(s.mathRenderAdapter.getCode(e));
                            e.setAttribute("data-math", n);
                            try {
                              e.innerHTML = katex.renderToString(n, {
                                displayMode: "DIV" === e.tagName,
                                output: "html",
                                macros: t.math.macros,
                              });
                            } catch (r) {
                              (e.innerHTML = r.message),
                                (e.className =
                                  "language-math vditor-reset--error");
                            }
                            e.addEventListener("copy", function (e) {
                              e.stopPropagation(), e.preventDefault();
                              var t = e.currentTarget.closest(".language-math");
                              e.clipboardData.setData("text/html", t.innerHTML),
                                e.clipboardData.setData(
                                  "text/plain",
                                  t.getAttribute("data-math")
                                );
                            });
                          }
                        });
                      });
                    });
                else if ("MathJax" === t.math.engine) {
                  window.MathJax ||
                    ((window.MathJax = {
                      loader: {
                        paths: {
                          mathjax: "".concat(t.cdn, "/dist/js/mathjax"),
                        },
                      },
                      startup: { typeset: !1 },
                      tex: { macros: t.math.macros },
                    }),
                    Object.assign(window.MathJax, t.math.mathJaxOptions)),
                    (0, i.J)(
                      "".concat(t.cdn, "/dist/js/mathjax/tex-svg-full.js"),
                      "protyleMathJaxScript"
                    );
                  var c = function (e, t) {
                    var n = (0, a.X)(e.textContent).trim(),
                      r = window.MathJax.getMetricsFor(e);
                    (r.display = "DIV" === e.tagName),
                      window.MathJax.tex2svgPromise(n, r).then(function (r) {
                        (e.innerHTML = ""),
                          e.setAttribute("data-math", n),
                          e.append(r),
                          window.MathJax.startup.document.clear(),
                          window.MathJax.startup.document.updateDocument();
                        var i = r.querySelector('[data-mml-node="merror"]');
                        i &&
                          "" !== i.textContent.trim() &&
                          ((e.innerHTML = i.textContent.trim()),
                          (e.className = "vditor-reset--error")),
                          t && t();
                      });
                  };
                  window.MathJax.startup.promise.then(function () {
                    for (
                      var e = [],
                        t = function (t) {
                          var r = n[t];
                          r.parentElement.classList.contains(
                            "vditor-wysiwyg__pre"
                          ) ||
                            r.parentElement.classList.contains(
                              "vditor-ir__marker--pre"
                            ) ||
                            r.getAttribute("data-math") ||
                            !(0, a.X)(r.textContent).trim() ||
                            e.push(function (e) {
                              t === n.length - 1 ? c(r) : c(r, e);
                            });
                        },
                        r = 0;
                      r < n.length;
                      r++
                    )
                      t(r);
                    !(function (e) {
                      if (0 !== e.length) {
                        var t = 0,
                          n = e[e.length - 1],
                          r = function () {
                            var i = e[t++];
                            i === n ? i() : i(r);
                          };
                        r();
                      }
                    })(e);
                  });
                }
              }
            };
        },
        431: (e, t, n) => {
          n.d(t, { Y: () => i });
          var r = n(446),
            i = function (e) {
              e &&
                e.querySelectorAll("a").forEach(function (e) {
                  var t = e.getAttribute("href");
                  t &&
                    (t.match(/^.+.(mp4|m4v|ogg|ogv|webm)$/)
                      ? (function (e, t) {
                          e.insertAdjacentHTML(
                            "afterend",
                            '<video controls="controls" src="'.concat(
                              t,
                              '"></video>'
                            )
                          ),
                            e.remove();
                        })(e, t)
                      : t.match(/^.+.(mp3|wav|flac)$/)
                      ? (function (e, t) {
                          e.insertAdjacentHTML(
                            "afterend",
                            '<audio controls="controls" src="'.concat(
                              t,
                              '"></audio>'
                            )
                          ),
                            e.remove();
                        })(e, t)
                      : (function (e, t) {
                          var n = t.match(
                              /\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?/
                            ),
                            i = t.match(
                              /\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/
                            ),
                            o = t.match(
                              /\/\/v\.qq\.com\/x\/cover\/.*\/([^\/]+)\.html\??.*/
                            ),
                            a = t.match(/(?:www\.|\/\/)coub\.com\/view\/(\w+)/),
                            s = t.match(
                              /(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/
                            ),
                            l = t.match(
                              /.+dailymotion.com\/(video|hub)\/(\w+)\?/
                            ),
                            c = t.match(
                              /(?:www\.|\/\/)bilibili\.com\/video\/(\w+)/
                            ),
                            d = t.match(/(?:www\.|\/\/)ted\.com\/talks\/(\w+)/);
                          if (n && 11 === n[1].length)
                            e.insertAdjacentHTML(
                              "afterend",
                              '<iframe class="iframe__video" src="//www.youtube.com/embed/'.concat(
                                n[1] + (n[2] ? "?start=" + n[2] : ""),
                                '"></iframe>'
                              )
                            ),
                              e.remove();
                          else if (i && i[1])
                            e.insertAdjacentHTML(
                              "afterend",
                              '<iframe class="iframe__video" src="//player.youku.com/embed/'.concat(
                                i[1],
                                '"></iframe>'
                              )
                            ),
                              e.remove();
                          else if (o && o[1])
                            e.insertAdjacentHTML(
                              "afterend",
                              '<iframe class="iframe__video" src="https://v.qq.com/txp/iframe/player.html?vid='.concat(
                                o[1],
                                '"></iframe>'
                              )
                            ),
                              e.remove();
                          else if (a && a[1])
                            e.insertAdjacentHTML(
                              "afterend",
                              '<iframe class="iframe__video"\n src="//coub.com/embed/'.concat(
                                a[1],
                                '?muted=false&autostart=false&originalSize=true&startWithHD=true"></iframe>'
                              )
                            ),
                              e.remove();
                          else if (s && s[0])
                            e.insertAdjacentHTML(
                              "afterend",
                              '<iframe class="iframe__video"\n src="https://www.facebook.com/plugins/video.php?href='.concat(
                                encodeURIComponent(s[0]),
                                '"></iframe>'
                              )
                            ),
                              e.remove();
                          else if (l && l[2])
                            e.insertAdjacentHTML(
                              "afterend",
                              '<iframe class="iframe__video"\n src="https://www.dailymotion.com/embed/video/'.concat(
                                l[2],
                                '"></iframe>'
                              )
                            ),
                              e.remove();
                          else if (
                            t.indexOf("bilibili.com") > -1 &&
                            (t.indexOf("bvid=") > -1 || (c && c[1]))
                          ) {
                            var u = {
                              bvid: (0, r.o)("bvid", t) || (c && c[1]),
                              page: "1",
                              high_quality: "1",
                              as_wide: "1",
                              allowfullscreen: "true",
                              autoplay: "0",
                            };
                            new URL(
                              t.startsWith("http") ? t : "https:" + t
                            ).search
                              .split("&")
                              .forEach(function (e, t) {
                                if (e) {
                                  0 === t && (e = e.substr(1));
                                  var n = e.split("=");
                                  u[n[0]] = n[1];
                                }
                              });
                            var p = "https://player.bilibili.com/player.html?",
                              m = Object.keys(u);
                            m.forEach(function (e, t) {
                              (p += "".concat(e, "=").concat(u[e])),
                                t < m.length - 1 && (p += "&");
                            }),
                              e.insertAdjacentHTML(
                                "afterend",
                                '<iframe class="iframe__video" src="'.concat(
                                  p,
                                  '"></iframe>'
                                )
                              ),
                              e.remove();
                          } else
                            d &&
                              d[1] &&
                              (e.insertAdjacentHTML(
                                "afterend",
                                '<iframe class="iframe__video" src="//embed.ted.com/talks/'.concat(
                                  d[1],
                                  '"></iframe>'
                                )
                              ),
                              e.remove());
                        })(e, t));
                });
            };
        },
        570: (e, t, n) => {
          n.d(t, { i: () => c });
          var r = n(793),
            i = n(998),
            o = n(781),
            a = n(446),
            s = function (e, t, n, r) {
              return new (n || (n = Promise))(function (i, o) {
                function a(e) {
                  try {
                    l(r.next(e));
                  } catch (t) {
                    o(t);
                  }
                }
                function s(e) {
                  try {
                    l(r.throw(e));
                  } catch (t) {
                    o(t);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? i(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, s);
                }
                l((r = r.apply(e, t || [])).next());
              });
            },
            l = function (e, t) {
              var n,
                r,
                i,
                o,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function s(s) {
                return function (l) {
                  return (function (s) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o && ((o = 0), s[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (i =
                              2 & s[0]
                                ? r.return
                                : s[0]
                                ? r.throw || ((i = r.return) && i.call(r), 0)
                                : r.next) &&
                            !(i = i.call(r, s[1])).done)
                        )
                          return i;
                        switch (
                          ((r = 0), i && (s = [2 & s[0], i.value]), s[0])
                        ) {
                          case 0:
                          case 1:
                            i = s;
                            break;
                          case 4:
                            return a.label++, { value: s[1], done: !1 };
                          case 5:
                            a.label++, (r = s[1]), (s = [0]);
                            continue;
                          case 7:
                            (s = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (i =
                                  (i = a.trys).length > 0 && i[i.length - 1]) ||
                                (6 !== s[0] && 2 !== s[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === s[0] &&
                              (!i || (s[1] > i[0] && s[1] < i[3]))
                            ) {
                              a.label = s[1];
                              break;
                            }
                            if (6 === s[0] && a.label < i[1]) {
                              (a.label = i[1]), (i = s);
                              break;
                            }
                            if (i && a.label < i[2]) {
                              (a.label = i[2]), a.ops.push(s);
                              break;
                            }
                            i[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        s = t.call(e, a);
                      } catch (l) {
                        (s = [6, l]), (r = 0);
                      } finally {
                        n = i = 0;
                      }
                    if (5 & s[0]) throw s[1];
                    return { value: s[0] ? s[1] : void 0, done: !0 };
                  })([s, l]);
                };
              }
            },
            c = function (e, t, n) {
              void 0 === t && (t = r.g.CDN);
              var c = o.mermaidRenderAdapter.getElements(e);
              0 !== c.length &&
                (0, i.G)(
                  "".concat(t, "/dist/js/mermaid/mermaid.min.js"),
                  "vditorMermaidScript"
                ).then(function () {
                  var e = {
                    securityLevel: "loose",
                    altFontFamily: "sans-serif",
                    fontFamily: "sans-serif",
                    startOnLoad: !1,
                    flowchart: { htmlLabels: !0, useMaxWidth: !0 },
                    sequence: {
                      useMaxWidth: !0,
                      diagramMarginX: 8,
                      diagramMarginY: 8,
                      boxMargin: 8,
                      showSequenceNumbers: !0,
                    },
                    gantt: { leftPadding: 75, rightPadding: 20 },
                  };
                  "dark" === n && (e.theme = "dark"),
                    mermaid.initialize(e),
                    c.forEach(function (e) {
                      return s(void 0, void 0, void 0, function () {
                        var t, n, r, i, s;
                        return l(this, function (l) {
                          switch (l.label) {
                            case 0:
                              if (
                                ((t = o.mermaidRenderAdapter.getCode(e)),
                                "true" === e.getAttribute("data-processed") ||
                                  "" === t.trim())
                              )
                                return [2];
                              (n = "mermaid" + (0, a.W)()), (l.label = 1);
                            case 1:
                              return (
                                l.trys.push([1, 3, , 4]),
                                [4, mermaid.render(n, e.textContent)]
                              );
                            case 2:
                              return (
                                (r = l.sent()), (e.innerHTML = r.svg), [3, 4]
                              );
                            case 3:
                              return (
                                (i = l.sent()),
                                (s = document.querySelector("#" + n)),
                                (e.innerHTML = ""
                                  .concat(
                                    s.outerHTML,
                                    '<br>\n<div style="text-align: left"><small>'
                                  )
                                  .concat(
                                    i.message.replace(/\n/, "<br>"),
                                    "</small></div>"
                                  )),
                                s.parentElement.remove(),
                                [3, 4]
                              );
                            case 4:
                              return (
                                e.setAttribute("data-processed", "true"), [2]
                              );
                          }
                        });
                      });
                    });
                });
            };
        },
        558: (e, t, n) => {
          n.d(t, { P: () => a });
          var r = n(793),
            i = n(998),
            o = n(781),
            a = function (e, t, n) {
              void 0 === e && (e = document), void 0 === t && (t = r.g.CDN);
              var a = o.mindmapRenderAdapter.getElements(e);
              a.length > 0 &&
                (0, i.G)(
                  "".concat(t, "/dist/js/echarts/echarts.min.js"),
                  "vditorEchartsScript"
                ).then(function () {
                  a.forEach(function (e) {
                    if (
                      !e.parentElement.classList.contains(
                        "vditor-wysiwyg__pre"
                      ) &&
                      !e.parentElement.classList.contains(
                        "vditor-ir__marker--pre"
                      )
                    ) {
                      var t = o.mindmapRenderAdapter.getCode(e);
                      if (t)
                        try {
                          if ("true" === e.getAttribute("data-processed"))
                            return;
                          echarts
                            .init(e, "dark" === n ? "dark" : void 0)
                            .setOption({
                              series: [
                                {
                                  data: [JSON.parse(decodeURIComponent(t))],
                                  initialTreeDepth: -1,
                                  itemStyle: {
                                    borderWidth: 0,
                                    color: "#4285f4",
                                  },
                                  label: {
                                    backgroundColor: "#f6f8fa",
                                    borderColor: "#d1d5da",
                                    borderRadius: 5,
                                    borderWidth: 0.5,
                                    color: "#586069",
                                    lineHeight: 20,
                                    offset: [-5, 0],
                                    padding: [0, 5],
                                    position: "insideRight",
                                  },
                                  lineStyle: { color: "#d1d5da", width: 1 },
                                  roam: !0,
                                  symbol: function (e, t) {
                                    var n;
                                    return (
                                      null ===
                                        (n = null == t ? void 0 : t.data) ||
                                      void 0 === n
                                        ? void 0
                                        : n.children
                                    )
                                      ? "circle"
                                      : "path://";
                                  },
                                  type: "tree",
                                },
                              ],
                              tooltip: {
                                trigger: "item",
                                triggerOn: "mousemove",
                              },
                            }),
                            e.setAttribute("data-processed", "true");
                        } catch (r) {
                          (e.className = "vditor-reset--error"),
                            (e.innerHTML = "mindmap render error: <br>".concat(
                              r
                            ));
                        }
                    }
                  });
                });
            };
        },
        182: (e, t, n) => {
          n.d(t, { k: () => o });
          var r = n(946),
            i = n(982),
            o = function (e, t, n) {
              var o = "",
                a = [];
              if (
                (Array.from(e.children).forEach(function (e, t) {
                  if ((0, r.W)(e)) {
                    if (n) {
                      var i = e.id.lastIndexOf("_");
                      e.id = e.id.substring(0, -1 === i ? void 0 : i) + "_" + t;
                    }
                    a.push(e.id), (o += e.outerHTML.replace("<wbr>", ""));
                  }
                }),
                "" === o)
              )
                return (t.innerHTML = ""), "";
              var s = document.createElement("div");
              if (n)
                n.lute.SetToC(!0),
                  "wysiwyg" !== n.currentMode || n.preview.element.contains(e)
                    ? "ir" !== n.currentMode || n.preview.element.contains(e)
                      ? (s.innerHTML = n.lute.HTML2VditorDOM(
                          "<p>[ToC]</p>" + o
                        ))
                      : (s.innerHTML = n.lute.SpinVditorIRDOM(
                          "<p>[ToC]</p>" + o
                        ))
                    : (s.innerHTML = n.lute.SpinVditorDOM("<p>[ToC]</p>" + o)),
                  n.lute.SetToC(n.options.preview.markdown.toc);
              else {
                t.classList.add("vditor-outline");
                var l = Lute.New();
                l.SetToC(!0),
                  (s.innerHTML = l.HTML2VditorDOM("<p>[ToC]</p>" + o));
              }
              var c = s.firstElementChild.querySelectorAll(
                "li > span[data-target-id]"
              );
              return (
                c.forEach(function (e, t) {
                  if (
                    e.nextElementSibling &&
                    "UL" === e.nextElementSibling.tagName
                  ) {
                    var n =
                      "<svg class='vditor-outline__action'><use xlink:href='#vditor-icon-down'></use></svg>";
                    document.getElementById("vditorIconScript") ||
                      (n =
                        '<svg class="vditor-outline__action" viewBox="0 0 32 32"><path d="M3.76 6.12l12.24 12.213 12.24-12.213 3.76 3.76-16 16-16-16 3.76-3.76z"></path></svg>'),
                      (e.innerHTML = ""
                        .concat(n, "<span>")
                        .concat(e.innerHTML, "</span>"));
                  } else e.innerHTML = "<svg></svg><span>".concat(e.innerHTML, "</span>");
                  e.setAttribute("data-target-id", a[t]);
                }),
                (o = s.firstElementChild.innerHTML),
                0 === c.length
                  ? ((t.innerHTML = ""), o)
                  : ((t.innerHTML = o),
                    n &&
                      (0, i.H)(t, {
                        cdn: n.options.cdn,
                        math: n.options.preview.math,
                      }),
                    t.firstElementChild.addEventListener("click", function (r) {
                      for (var i = r.target; i && !i.isEqualNode(t); ) {
                        if (i.classList.contains("vditor-outline__action")) {
                          i.classList.contains("vditor-outline__action--close")
                            ? (i.classList.remove(
                                "vditor-outline__action--close"
                              ),
                              i.parentElement.nextElementSibling.setAttribute(
                                "style",
                                "display:block"
                              ))
                            : (i.classList.add("vditor-outline__action--close"),
                              i.parentElement.nextElementSibling.setAttribute(
                                "style",
                                "display:none"
                              )),
                            r.preventDefault(),
                            r.stopPropagation();
                          break;
                        }
                        if (i.getAttribute("data-target-id")) {
                          r.preventDefault(), r.stopPropagation();
                          var o = document.getElementById(
                            i.getAttribute("data-target-id")
                          );
                          if (!o) return;
                          if (n)
                            if ("auto" === n.options.height) {
                              var a = o.offsetTop + n.element.offsetTop;
                              n.options.toolbarConfig.pin ||
                                (a += n.toolbar.element.offsetHeight),
                                window.scrollTo(window.scrollX, a);
                            } else
                              n.element.offsetTop < window.scrollY &&
                                window.scrollTo(
                                  window.scrollX,
                                  n.element.offsetTop
                                ),
                                n.preview.element.contains(e)
                                  ? (e.parentElement.scrollTop = o.offsetTop)
                                  : (e.scrollTop = o.offsetTop);
                          else window.scrollTo(window.scrollX, o.offsetTop);
                          break;
                        }
                        i = i.parentElement;
                      }
                    }),
                    o)
              );
            };
        },
        931: (e, t, n) => {
          n.d(t, { B: () => a });
          var r = n(793),
            i = n(998),
            o = n(781),
            a = function (e, t) {
              void 0 === e && (e = document), void 0 === t && (t = r.g.CDN);
              var n = o.plantumlRenderAdapter.getElements(e);
              0 !== n.length &&
                (0, i.G)(
                  "".concat(t, "/dist/js/plantuml/plantuml-encoder.min.js"),
                  "vditorPlantumlScript"
                ).then(function () {
                  n.forEach(function (e) {
                    if (
                      !e.parentElement.classList.contains(
                        "vditor-wysiwyg__pre"
                      ) &&
                      !e.parentElement.classList.contains(
                        "vditor-ir__marker--pre"
                      )
                    ) {
                      var t = o.plantumlRenderAdapter.getCode(e).trim();
                      if (t)
                        try {
                          e.innerHTML =
                            '<object type="image/svg+xml" data="https://www.plantuml.com/plantuml/svg/~1'.concat(
                              plantumlEncoder.encode(t),
                              '"/>'
                            );
                        } catch (n) {
                          (e.className = "vditor-reset--error"),
                            (e.innerHTML = "plantuml render error: <br>".concat(
                              n
                            ));
                        }
                    }
                  });
                });
            };
        },
        65: (e, t, n) => {
          n.d(t, { X: () => r });
          var r = function (e) {
            var t = Lute.New();
            return (
              t.PutEmojis(e.emojis),
              t.SetEmojiSite(e.emojiSite),
              t.SetHeadingAnchor(e.headingAnchor),
              t.SetInlineMathAllowDigitAfterOpenMarker(e.inlineMathDigit),
              t.SetAutoSpace(e.autoSpace),
              t.SetToC(e.toc),
              t.SetFootnotes(e.footnotes),
              t.SetFixTermTypo(e.fixTermTypo),
              t.SetVditorCodeBlockPreview(e.codeBlockPreview),
              t.SetVditorMathBlockPreview(e.mathBlockPreview),
              t.SetSanitize(e.sanitize),
              t.SetChineseParagraphBeginningSpace(e.paragraphBeginningSpace),
              t.SetRenderListStyle(e.listStyle),
              t.SetLinkBase(e.linkBase),
              t.SetLinkPrefix(e.linkPrefix),
              t.SetMark(e.mark),
              t.SetGFMAutoLink(e.gfmAutoLink),
              e.lazyLoadImage && t.SetImageLazyLoading(e.lazyLoadImage),
              t
            );
          };
        },
        971: (e, t, n) => {
          n.d(t, { E: () => r });
          var r = function (e, t, n) {
            void 0 === n && (n = "classic");
            var r = e.getBoundingClientRect();
            document.body.insertAdjacentHTML(
              "beforeend",
              '<div class="vditor vditor-img'
                .concat(
                  "dark" === n ? " vditor--dark" : "",
                  '">\n    <div class="vditor-img__bar">\n      <span class="vditor-img__btn" data-deg="0">\n        <svg><use xlink:href="#vditor-icon-redo"></use></svg>\n        '
                )
                .concat(
                  window.VditorI18n.spin,
                  "\n      </span>\n      <span class=\"vditor-img__btn\"  onclick=\"this.parentElement.parentElement.outerHTML = '';document.body.style.overflow = ''\">\n        X &nbsp;"
                )
                .concat(
                  window.VditorI18n.close,
                  '\n      </span>\n    </div>\n    <div class="vditor-img__img" onclick="this.parentElement.outerHTML = \'\';document.body.style.overflow = \'\'">\n      <img style="width: '
                )
                .concat(e.width, "px;height:")
                .concat(e.height, "px;transform: translate3d(")
                .concat(r.left, "px, ")
                .concat(r.top - 36, 'px, 0)" src="')
                .concat(e.getAttribute("src"), '">\n    </div>\n</div>')
            ),
              (document.body.style.overflow = "hidden");
            var i = document.querySelector(".vditor-img img"),
              o = "translate3d("
                .concat(
                  Math.max(0, window.innerWidth - e.naturalWidth) / 2,
                  "px, "
                )
                .concat(
                  Math.max(0, window.innerHeight - 36 - e.naturalHeight) / 2,
                  "px, 0)"
                );
            setTimeout(function () {
              i.setAttribute(
                "style",
                "transition: transform .3s ease-in-out;transform: ".concat(o)
              ),
                setTimeout(function () {
                  i.parentElement.scrollTo(
                    (i.parentElement.scrollWidth -
                      i.parentElement.clientWidth) /
                      2,
                    (i.parentElement.scrollHeight -
                      i.parentElement.clientHeight) /
                      2
                  );
                }, 400);
            });
            var a = document.querySelector(".vditor-img__btn");
            a.addEventListener("click", function () {
              var t = parseInt(a.getAttribute("data-deg"), 10) + 90;
              (t / 90) % 2 == 1 && e.naturalWidth > i.parentElement.clientHeight
                ? (i.style.transform = "translate3d("
                    .concat(
                      Math.max(0, window.innerWidth - e.naturalWidth) / 2,
                      "px, "
                    )
                    .concat(
                      e.naturalWidth / 2 - e.naturalHeight / 2,
                      "px, 0) rotateZ("
                    )
                    .concat(t, "deg)"))
                : (i.style.transform = ""
                    .concat(o, " rotateZ(")
                    .concat(t, "deg)")),
                a.setAttribute("data-deg", t.toString()),
                setTimeout(function () {
                  i.parentElement.scrollTo(
                    (i.parentElement.scrollWidth -
                      i.parentElement.clientWidth) /
                      2,
                    (i.parentElement.scrollHeight -
                      i.parentElement.clientHeight) /
                      2
                  );
                }, 400);
            });
          };
        },
        34: (e, t, n) => {
          n.d(t, { Y: () => o });
          var r = n(793),
            i = n(296),
            o = function (e, t) {
              void 0 === t && (t = r.g.CDN),
                r.g.CODE_THEME.includes(e) || (e = "github");
              var n = document.getElementById("vditorHljsStyle"),
                o = ""
                  .concat(t, "/dist/js/highlight.js/styles/")
                  .concat(e, ".css");
              n
                ? n.getAttribute("href") !== o &&
                  (n.remove(), (0, i.c)(o, "vditorHljsStyle"))
                : (0, i.c)(o, "vditorHljsStyle");
            };
        },
        652: (e, t, n) => {
          n.d(t, { Z: () => i });
          var r = n(296),
            i = function (e, t) {
              if (e && t) {
                var n = document.getElementById("vditorContentTheme"),
                  i = "".concat(t, "/").concat(e, ".css");
                n
                  ? n.getAttribute("href") !== i &&
                    (n.remove(), (0, r.c)(i, "vditorContentTheme"))
                  : (0, r.c)(i, "vditorContentTheme");
              }
            };
        },
        998: (e, t, n) => {
          n.d(t, { G: () => i, J: () => r });
          var r = function (e, t) {
              if (document.getElementById(t)) return !1;
              var n = new XMLHttpRequest();
              n.open("GET", e, !1),
                n.setRequestHeader(
                  "Accept",
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01"
                ),
                n.send("");
              var r = document.createElement("script");
              (r.type = "text/javascript"),
                (r.text = n.responseText),
                (r.id = t),
                document.head.appendChild(r);
            },
            i = function (e, t) {
              return new Promise(function (n, r) {
                if (document.getElementById(t)) return n(!0), !1;
                var i = document.createElement("script");
                (i.src = e),
                  (i.async = !0),
                  document.head.appendChild(i),
                  (i.onerror = function (e) {
                    r(e);
                  }),
                  (i.onload = function () {
                    if (document.getElementById(t))
                      return i.remove(), n(!0), !1;
                    (i.id = t), n(!0);
                  });
              });
            };
        },
        296: (e, t, n) => {
          n.d(t, { c: () => r });
          var r = function (e, t) {
            if (!document.getElementById(t)) {
              var n = document.createElement("link");
              (n.id = t),
                (n.rel = "stylesheet"),
                (n.type = "text/css"),
                (n.href = e),
                document.getElementsByTagName("head")[0].appendChild(n);
            }
          };
        },
        528: (e, t, n) => {
          n.d(t, { X: () => r });
          var r = function (e) {
            return e.replace(/\u00a0/g, " ");
          };
        },
        796: (e, t, n) => {
          n.d(t, {
            G6: () => r,
            Le: () => a,
            i7: () => c,
            ns: () => l,
            pK: () => o,
            vU: () => i,
            yl: () => s,
          });
          var r = function () {
              return (
                navigator.userAgent.indexOf("Safari") > -1 &&
                -1 === navigator.userAgent.indexOf("Chrome")
              );
            },
            i = function () {
              return navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
            },
            o = function () {
              try {
                return "undefined" != typeof localStorage;
              } catch (e) {
                return !1;
              }
            },
            a = function () {
              return navigator.userAgent.indexOf("iPhone") > -1
                ? "touchstart"
                : "click";
            },
            s = function (e) {
              return navigator.platform.toUpperCase().indexOf("MAC") >= 0
                ? !(!e.metaKey || e.ctrlKey)
                : !(e.metaKey || !e.ctrlKey);
            },
            l = function (e) {
              return (
                /Mac/.test(navigator.platform) ||
                "iPhone" === navigator.platform
                  ? e.indexOf("⇧") > -1 &&
                    i() &&
                    (e = e
                      .replace(";", ":")
                      .replace("=", "+")
                      .replace("-", "_"))
                  : (e = (e = e.startsWith("⌘")
                      ? e.replace("⌘", "⌘+")
                      : e.startsWith("⌥") && "⌘" !== e.substr(1, 1)
                      ? e.replace("⌥", "⌥+")
                      : e.replace("⇧⌘", "⌘+⇧+").replace("⌥⌘", "⌥+⌘+"))
                      .replace("⌘", "Ctrl")
                      .replace("⇧", "Shift")
                      .replace("⌥", "Alt")).indexOf("Shift") > -1 &&
                    (e = e
                      .replace(";", ":")
                      .replace("=", "+")
                      .replace("-", "_")),
                e
              );
            },
            c = function () {
              return (
                /Chrome/.test(navigator.userAgent) &&
                /Google Inc/.test(navigator.vendor)
              );
            };
        },
        446: (e, t, n) => {
          n.d(t, { W: () => r, o: () => i });
          var r = function () {
              return ([1e7].toString() + -1e3 + -4e3 + -8e3 + -1e11).replace(
                /[018]/g,
                function (e) {
                  return (
                    parseInt(e, 10) ^
                    (window.crypto.getRandomValues(new Uint32Array(1))[0] &
                      (15 >> (parseInt(e, 10) / 4)))
                  ).toString(16);
                }
              );
            },
            i = function (e, t) {
              void 0 === t && (t = window.location.search);
              var n = t.substring(t.indexOf("?")),
                r = n.indexOf("#");
              return new URLSearchParams(
                n.substring(0, r >= 0 ? r : void 0)
              ).get(e);
            };
        },
        118: (e, t, n) => {
          n.d(t, {
            DX: () => u,
            E2: () => o,
            F9: () => l,
            JQ: () => i,
            O9: () => a,
            a1: () => s,
            fb: () => d,
            lG: () => c,
          });
          var r = n(946),
            i = function (e, t) {
              for (
                var n = d(e, t), r = !1, i = !1;
                n && !n.classList.contains("vditor-reset") && !i;

              )
                (r = d(n.parentElement, t)) ? (n = r) : (i = !0);
              return n || !1;
            },
            o = function (e, t) {
              for (
                var n = (0, r.S)(e, t), i = !1, o = !1;
                n && !n.classList.contains("vditor-reset") && !o;

              )
                (i = (0, r.S)(n.parentElement, t)) ? (n = i) : (o = !0);
              return n || !1;
            },
            a = function (e) {
              var t = o(e, "UL"),
                n = o(e, "OL"),
                r = t;
              return n && (!t || (t && n.contains(t))) && (r = n), r;
            },
            s = function (e, t, n) {
              if (!e) return !1;
              3 === e.nodeType && (e = e.parentElement);
              for (
                var r = e, i = !1;
                r && !i && !r.classList.contains("vditor-reset");

              )
                r.getAttribute(t) === n ? (i = !0) : (r = r.parentElement);
              return i && r;
            },
            l = function (e) {
              if (!e) return !1;
              3 === e.nodeType && (e = e.parentElement);
              var t = e,
                n = !1,
                r = s(e, "data-block", "0");
              if (r) return r;
              for (; t && !n && !t.classList.contains("vditor-reset"); )
                "H1" === t.tagName ||
                "H2" === t.tagName ||
                "H3" === t.tagName ||
                "H4" === t.tagName ||
                "H5" === t.tagName ||
                "H6" === t.tagName ||
                "P" === t.tagName ||
                "BLOCKQUOTE" === t.tagName ||
                "OL" === t.tagName ||
                "UL" === t.tagName
                  ? (n = !0)
                  : (t = t.parentElement);
              return n && t;
            },
            c = function (e, t) {
              if (!e) return !1;
              3 === e.nodeType && (e = e.parentElement);
              for (
                var n = e, r = !1;
                n && !r && !n.classList.contains("vditor-reset");

              )
                n.nodeName === t ? (r = !0) : (n = n.parentElement);
              return r && n;
            },
            d = function (e, t) {
              if (!e) return !1;
              3 === e.nodeType && (e = e.parentElement);
              for (
                var n = e, r = !1;
                n && !r && !n.classList.contains("vditor-reset");

              )
                n.classList.contains(t) ? (r = !0) : (n = n.parentElement);
              return r && n;
            },
            u = function (e) {
              for (; e && e.lastChild; ) e = e.lastChild;
              return e;
            };
        },
        946: (e, t, n) => {
          n.d(t, { S: () => r, W: () => i });
          var r = function (e, t) {
              if (!e) return !1;
              3 === e.nodeType && (e = e.parentElement);
              for (
                var n = e, r = !1;
                n && !r && !n.classList.contains("vditor-reset");

              )
                0 === n.nodeName.indexOf(t) ? (r = !0) : (n = n.parentElement);
              return r && n;
            },
            i = function (e) {
              var t = r(e, "H");
              return !(!t || 2 !== t.tagName.length || "HR" === t.tagName) && t;
            };
        },
        2: (e, t, n) => {
          n.d(t, { T: () => r });
          var r = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            for (
              var n = {},
                i = function (e) {
                  for (var t in e)
                    e.hasOwnProperty(t) &&
                      ("[object Object]" ===
                      Object.prototype.toString.call(e[t])
                        ? (n[t] = r(n[t], e[t]))
                        : (n[t] = e[t]));
                },
                o = 0;
              o < e.length;
              o++
            )
              i(e[o]);
            return n;
          };
        },
        307: (e, t, n) => {
          n.d(t, {
            $j: () => u,
            Gb: () => l,
            Hc: () => c,
            Ny: () => s,
            ib: () => p,
            im: () => d,
            oC: () => m,
            zh: () => a,
          });
          var r = n(793),
            i = n(796),
            o = n(118),
            a = function (e) {
              var t,
                n = e[e.currentMode].element;
              return getSelection().rangeCount > 0 &&
                ((t = getSelection().getRangeAt(0)),
                n.isEqualNode(t.startContainer) || n.contains(t.startContainer))
                ? t
                : e[e.currentMode].range
                ? e[e.currentMode].range
                : (n.focus(),
                  (t = n.ownerDocument.createRange()).setStart(n, 0),
                  t.collapse(!0),
                  t);
            },
            s = function (e) {
              var t = window.getSelection().getRangeAt(0);
              if (
                !e.contains(t.startContainer) &&
                !(0, o.fb)(t.startContainer, "vditor-panel--none")
              )
                return { left: 0, top: 0 };
              var n,
                r = e.parentElement.getBoundingClientRect();
              if (0 === t.getClientRects().length)
                if (3 === t.startContainer.nodeType) {
                  var i = t.startContainer.parentElement;
                  if (!(i && i.getClientRects().length > 0))
                    return { left: 0, top: 0 };
                  n = i.getClientRects()[0];
                } else {
                  var a = t.startContainer.children;
                  if (
                    a[t.startOffset] &&
                    a[t.startOffset].getClientRects().length > 0
                  )
                    n = a[t.startOffset].getClientRects()[0];
                  else if (t.startContainer.childNodes.length > 0) {
                    var s = t.cloneRange();
                    t.selectNode(
                      t.startContainer.childNodes[
                        Math.max(0, t.startOffset - 1)
                      ]
                    ),
                      (n = t.getClientRects()[0]),
                      t.setEnd(s.endContainer, s.endOffset),
                      t.setStart(s.startContainer, s.startOffset);
                  } else n = t.startContainer.getClientRects()[0];
                  if (!n) {
                    for (
                      var l = t.startContainer.childNodes[t.startOffset];
                      !l.getClientRects ||
                      (l.getClientRects && 0 === l.getClientRects().length);

                    )
                      l = l.parentElement;
                    n = l.getClientRects()[0];
                  }
                }
              else n = t.getClientRects()[0];
              return { left: n.left - r.left, top: n.top - r.top };
            },
            l = function (e, t) {
              if (!t) {
                if (0 === getSelection().rangeCount) return !1;
                t = getSelection().getRangeAt(0);
              }
              var n = t.commonAncestorContainer;
              return e.isEqualNode(n) || e.contains(n);
            },
            c = function (e) {
              var t = window.getSelection();
              t.removeAllRanges(), t.addRange(e);
            },
            d = function (e, t, n) {
              var r = { end: 0, start: 0 };
              if (!n) {
                if (0 === getSelection().rangeCount) return r;
                n = window.getSelection().getRangeAt(0);
              }
              if (l(t, n)) {
                var i = n.cloneRange();
                e.childNodes[0] && e.childNodes[0].childNodes[0]
                  ? i.setStart(e.childNodes[0].childNodes[0], 0)
                  : i.selectNodeContents(e),
                  i.setEnd(n.startContainer, n.startOffset),
                  (r.start = i.toString().length),
                  (r.end = r.start + n.toString().length);
              }
              return r;
            },
            u = function (e, t, n) {
              var r = 0,
                i = 0,
                o = n.childNodes[i],
                a = !1,
                s = !1;
              (e = Math.max(0, e)), (t = Math.max(0, t));
              var l = n.ownerDocument.createRange();
              for (l.setStart(o || n, 0), l.collapse(!0); !s && o; ) {
                var d = r + o.textContent.length;
                if (
                  !a &&
                  e >= r &&
                  e <= d &&
                  (0 === e
                    ? l.setStart(o, 0)
                    : 3 === o.childNodes[0].nodeType
                    ? l.setStart(o.childNodes[0], e - r)
                    : o.nextSibling
                    ? l.setStartBefore(o.nextSibling)
                    : l.setStartAfter(o),
                  (a = !0),
                  e === t)
                ) {
                  s = !0;
                  break;
                }
                a &&
                  t >= r &&
                  t <= d &&
                  (0 === t
                    ? l.setEnd(o, 0)
                    : 3 === o.childNodes[0].nodeType
                    ? l.setEnd(o.childNodes[0], t - r)
                    : o.nextSibling
                    ? l.setEndBefore(o.nextSibling)
                    : l.setEndAfter(o),
                  (s = !0)),
                  (r = d),
                  (o = n.childNodes[++i]);
              }
              return (
                !s &&
                  n.childNodes[i - 1] &&
                  l.setStartBefore(n.childNodes[i - 1]),
                c(l),
                l
              );
            },
            p = function (e, t) {
              var n = e.querySelector("wbr");
              if (n) {
                if (n.previousElementSibling)
                  if (n.previousElementSibling.isSameNode(n.previousSibling)) {
                    if (n.previousElementSibling.lastChild)
                      return (
                        t.setStartBefore(n),
                        t.collapse(!0),
                        c(t),
                        !(0, i.i7)() ||
                          ("EM" !== n.previousElementSibling.tagName &&
                            "STRONG" !== n.previousElementSibling.tagName &&
                            "S" !== n.previousElementSibling.tagName) ||
                          (t.insertNode(document.createTextNode(r.g.ZWSP)),
                          t.collapse(!1)),
                        void n.remove()
                      );
                    t.setStartAfter(n.previousElementSibling);
                  } else
                    t.setStart(
                      n.previousSibling,
                      n.previousSibling.textContent.length
                    );
                else
                  n.previousSibling
                    ? t.setStart(
                        n.previousSibling,
                        n.previousSibling.textContent.length
                      )
                    : n.nextSibling
                    ? 3 === n.nextSibling.nodeType
                      ? t.setStart(n.nextSibling, 0)
                      : t.setStartBefore(n.nextSibling)
                    : t.setStart(n.parentElement, 0);
                t.collapse(!0), n.remove(), c(t);
              }
            },
            m = function (e, t) {
              var n = document.createElement("div");
              n.innerHTML = e;
              var r = n.querySelectorAll("p");
              1 === r.length &&
                !r[0].previousSibling &&
                !r[0].nextSibling &&
                t[t.currentMode].element.children.length > 0 &&
                "P" === n.firstElementChild.tagName &&
                (e = r[0].innerHTML.trim());
              var i = document.createElement("div");
              i.innerHTML = e;
              var s = a(t);
              if (
                ("" !== s.toString() &&
                  ((t[t.currentMode].preventInput = !0),
                  document.execCommand("delete", !1, "")),
                i.firstElementChild &&
                  "0" === i.firstElementChild.getAttribute("data-block"))
              ) {
                i.lastElementChild.insertAdjacentHTML("beforeend", "<wbr>");
                var l = (0, o.F9)(s.startContainer);
                l
                  ? l.insertAdjacentHTML("afterend", i.innerHTML)
                  : t[t.currentMode].element.insertAdjacentHTML(
                      "beforeend",
                      i.innerHTML
                    ),
                  p(t[t.currentMode].element, s);
              } else {
                var d = document.createElement("template");
                (d.innerHTML = e),
                  s.insertNode(d.content.cloneNode(!0)),
                  s.collapse(!1),
                  c(s);
              }
            };
        },
      },
      t = {};
    function n(r) {
      var i = t[r];
      if (void 0 !== i) return i.exports;
      var o = (t[r] = { exports: {} });
      return e[r](o, o.exports, n), o.exports;
    }
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
      (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (n.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var r = {};
    return (
      (() => {
        n.d(r, { default: () => Kn });
        var e,
          t = n(664),
          i = n(793),
          o = n(528),
          a = function (e) {
            return "sv" === e.currentMode
              ? (0, o.X)(
                  ""
                    .concat(e.sv.element.textContent, "\n")
                    .replace(/\n\n$/, "\n")
                )
              : "wysiwyg" === e.currentMode
              ? e.lute.VditorDOM2Md(e.wysiwyg.element.innerHTML)
              : "ir" === e.currentMode
              ? e.lute.VditorIRDOM2Md(e.ir.element.innerHTML)
              : "";
          },
          s = n(998),
          l = (function () {
            function e() {
              (this.element = document.createElement("div")),
                (this.element.className = "vditor-devtools"),
                (this.element.innerHTML =
                  '<div class="vditor-reset--error"></div><div style="height: 100%;"></div>');
            }
            return (
              (e.prototype.renderEchart = function (e) {
                var t = this;
                "block" === e.devtools.element.style.display &&
                  (0, s.G)(
                    "".concat(e.options.cdn, "/dist/js/echarts/echarts.min.js"),
                    "vditorEchartsScript"
                  ).then(function () {
                    t.ASTChart ||
                      (t.ASTChart = echarts.init(
                        e.devtools.element.lastElementChild
                      ));
                    try {
                      (t.element.lastElementChild.style.display = "block"),
                        (t.element.firstElementChild.innerHTML = ""),
                        t.ASTChart.setOption({
                          series: [
                            {
                              data: JSON.parse(e.lute.RenderEChartsJSON(a(e))),
                              initialTreeDepth: -1,
                              label: {
                                align: "left",
                                backgroundColor: "rgba(68, 77, 86, .68)",
                                borderRadius: 3,
                                color: "#d1d5da",
                                fontSize: 12,
                                lineHeight: 12,
                                offset: [9, 12],
                                padding: [2, 4, 2, 4],
                                position: "top",
                                verticalAlign: "middle",
                              },
                              lineStyle: {
                                color: "#4285f4",
                                type: "curve",
                                width: 1,
                              },
                              orient: "vertical",
                              roam: !0,
                              type: "tree",
                            },
                          ],
                          toolbox: {
                            bottom: 25,
                            emphasis: { iconStyle: { color: "#4285f4" } },
                            feature: {
                              restore: { show: !0 },
                              saveAsImage: { show: !0 },
                            },
                            right: 15,
                            show: !0,
                          },
                        }),
                        t.ASTChart.resize();
                    } catch (n) {
                      (t.element.lastElementChild.style.display = "none"),
                        (t.element.firstElementChild.innerHTML = n);
                    }
                  });
              }),
              e
            );
          })(),
          c = n(796),
          d = function (e, t) {
            t.forEach(function (t) {
              if (e[t]) {
                var n = e[t].children[0];
                n &&
                  n.classList.contains("vditor-menu--current") &&
                  n.classList.remove("vditor-menu--current");
              }
            });
          },
          u = function (e, t) {
            t.forEach(function (t) {
              if (e[t]) {
                var n = e[t].children[0];
                n &&
                  !n.classList.contains("vditor-menu--current") &&
                  n.classList.add("vditor-menu--current");
              }
            });
          },
          p = function (e, t) {
            t.forEach(function (t) {
              if (e[t]) {
                var n = e[t].children[0];
                n &&
                  n.classList.contains(i.g.CLASS_MENU_DISABLED) &&
                  n.classList.remove(i.g.CLASS_MENU_DISABLED);
              }
            });
          },
          m = function (e, t) {
            t.forEach(function (t) {
              if (e[t]) {
                var n = e[t].children[0];
                n &&
                  !n.classList.contains(i.g.CLASS_MENU_DISABLED) &&
                  n.classList.add(i.g.CLASS_MENU_DISABLED);
              }
            });
          },
          f = function (e, t) {
            t.forEach(function (t) {
              e[t] && e[t] && (e[t].style.display = "none");
            });
          },
          h = function (e, t) {
            t.forEach(function (t) {
              e[t] && e[t] && (e[t].style.display = "block");
            });
          },
          g = function (e, t, n) {
            t.includes("subToolbar") &&
              (e.toolbar.element
                .querySelectorAll(".vditor-hint")
                .forEach(function (e) {
                  (n && e.isEqualNode(n)) || (e.style.display = "none");
                }),
              e.toolbar.elements.emoji &&
                (e.toolbar.elements.emoji.lastElementChild.style.display =
                  "none")),
              t.includes("hint") && (e.hint.element.style.display = "none"),
              e.wysiwyg.popover &&
                t.includes("popover") &&
                (e.wysiwyg.popover.style.display = "none");
          },
          v = function (e, t, n, r) {
            n.addEventListener((0, c.Le)(), function (r) {
              r.preventDefault(),
                r.stopPropagation(),
                n.classList.contains(i.g.CLASS_MENU_DISABLED) ||
                  (e.toolbar.element
                    .querySelectorAll(".vditor-hint--current")
                    .forEach(function (e) {
                      e.classList.remove("vditor-hint--current");
                    }),
                  "block" === t.style.display
                    ? (t.style.display = "none")
                    : (g(
                        e,
                        ["subToolbar", "hint", "popover"],
                        n.parentElement.parentElement
                      ),
                      n.classList.contains("vditor-tooltipped") ||
                        n.classList.add("vditor-hint--current"),
                      (t.style.display = "block"),
                      e.toolbar.element.getBoundingClientRect().right -
                        n.getBoundingClientRect().right <
                      250
                        ? t.classList.add("vditor-panel--left")
                        : t.classList.remove("vditor-panel--left")));
            });
          },
          b = n(118),
          y = n(946),
          w = n(386),
          _ = n(379),
          k = n(895),
          E = n(169),
          S = n(572),
          L = n(702),
          C = n(982),
          x = n(570),
          M = n(593),
          T = n(558),
          A = n(931),
          H = function (e, t) {
            if (e)
              if ("html-block" !== e.parentElement.getAttribute("data-type")) {
                var n = e.firstElementChild.className.replace("language-", "");
                "abc" === n
                  ? (0, w.Q)(e, t.options.cdn)
                  : "mermaid" === n
                  ? (0, x.i)(e, t.options.cdn, t.options.theme)
                  : "markmap" === n
                  ? (0, M.K)(e, t.options.cdn, t.options.theme)
                  : "flowchart" === n
                  ? (0, E.P)(e, t.options.cdn)
                  : "echarts" === n
                  ? (0, _.p)(e, t.options.cdn, t.options.theme)
                  : "mindmap" === n
                  ? (0, T.P)(e, t.options.cdn, t.options.theme)
                  : "plantuml" === n
                  ? (0, A.B)(e, t.options.cdn)
                  : "graphviz" === n
                  ? (0, S.v)(e, t.options.cdn)
                  : "math" === n
                  ? (0, C.H)(e, {
                      cdn: t.options.cdn,
                      math: t.options.preview.math,
                    })
                  : t.options.customRenders.find(function (r) {
                      if (r.language === n) return r.render(e, t), !0;
                    }) ||
                    ((0, L.s)(
                      Object.assign({}, t.options.preview.hljs),
                      e,
                      t.options.cdn
                    ),
                    (0, k.O)(e, t.options.preview.hljs)),
                  e.setAttribute("data-render", "1");
              } else e.setAttribute("data-render", "1");
          },
          N = n(307),
          j = function (e) {
            if ("sv" !== e.currentMode) {
              var t = e[e.currentMode].element,
                n = e.outline.render(e);
              "" === n && (n = "[ToC]"),
                t
                  .querySelectorAll('[data-type="toc-block"]')
                  .forEach(function (t) {
                    (t.innerHTML = n),
                      (0, C.H)(t, {
                        cdn: e.options.cdn,
                        math: e.options.preview.math,
                      });
                  });
            }
          },
          O = function (e, t) {
            var n = (0, b.lG)(e.target, "SPAN");
            if (n && (0, b.fb)(n, "vditor-toc")) {
              var r = t[t.currentMode].element.querySelector(
                "#" + n.getAttribute("data-target-id")
              );
              if (r)
                if ("auto" === t.options.height) {
                  var i = r.offsetTop + t.element.offsetTop;
                  t.options.toolbarConfig.pin ||
                    (i += t.toolbar.element.offsetHeight),
                    window.scrollTo(window.scrollX, i);
                } else
                  t.element.offsetTop < window.scrollY &&
                    window.scrollTo(window.scrollX, t.element.offsetTop),
                    (t[t.currentMode].element.scrollTop = r.offsetTop);
            }
          },
          D = function (e, t, n, r) {
            if (
              e.previousElementSibling &&
              e.previousElementSibling.classList.contains("vditor-toc")
            ) {
              if (
                "Backspace" === n.key &&
                0 === (0, N.im)(e, t[t.currentMode].element, r).start
              )
                return e.previousElementSibling.remove(), lt(t), !0;
              if (tt(t, n, r, e, e.previousElementSibling)) return !0;
            }
            if (
              e.nextElementSibling &&
              e.nextElementSibling.classList.contains("vditor-toc")
            ) {
              if (
                "Delete" === n.key &&
                (0, N.im)(e, t[t.currentMode].element, r).start >=
                  e.textContent.trimRight().length
              )
                return e.nextElementSibling.remove(), lt(t), !0;
              if (et(t, n, r, e, e.nextElementSibling)) return !0;
            }
            if ("Backspace" === n.key || "Delete" === n.key) {
              var i = (0, b.fb)(r.startContainer, "vditor-toc");
              if (i) return i.remove(), lt(t), !0;
            }
          },
          P = function (e, t, n, r) {
            void 0 === n && (n = !1);
            var o = (0, b.F9)(t.startContainer);
            if (o && !n && "code-block" !== o.getAttribute("data-type")) {
              if (
                (at(o.innerHTML) && o.previousElementSibling) ||
                st(o.innerHTML)
              )
                return;
              for (
                var s = (0, N.im)(o, e.ir.element, t).start, l = !0, c = s - 1;
                c > o.textContent.substr(0, s).lastIndexOf("\n");
                c--
              )
                if (
                  " " !== o.textContent.charAt(c) &&
                  "\t" !== o.textContent.charAt(c)
                ) {
                  l = !1;
                  break;
                }
              0 === s && (l = !1);
              var d = !0;
              for (c = s - 1; c < o.textContent.length; c++)
                if (
                  " " !== o.textContent.charAt(c) &&
                  "\n" !== o.textContent.charAt(c)
                ) {
                  d = !1;
                  break;
                }
              if (l)
                return void (
                  "function" == typeof e.options.input && e.options.input(a(e))
                );
              if (d && !(0, b.fb)(t.startContainer, "vditor-ir__marker")) {
                var u = t.startContainer.previousSibling;
                return (
                  u &&
                    3 !== u.nodeType &&
                    u.classList.contains("vditor-ir__node--expand") &&
                    u.classList.remove("vditor-ir__node--expand"),
                  void (
                    "function" == typeof e.options.input &&
                    e.options.input(a(e))
                  )
                );
              }
            }
            if (
              (e.ir.element
                .querySelectorAll(".vditor-ir__node--expand")
                .forEach(function (e) {
                  e.classList.remove("vditor-ir__node--expand");
                }),
              o || (o = e.ir.element),
              !o.querySelector("wbr"))
            ) {
              var p = (0, b.fb)(t.startContainer, "vditor-ir__preview");
              p
                ? p.previousElementSibling.insertAdjacentHTML(
                    "beforeend",
                    "<wbr>"
                  )
                : t.insertNode(document.createElement("wbr"));
            }
            o.querySelectorAll("[style]").forEach(function (e) {
              e.removeAttribute("style");
            }),
              "link-ref-defs-block" === o.getAttribute("data-type") &&
                (o = e.ir.element);
            var m,
              f = o.isEqualNode(e.ir.element),
              h = (0, b.a1)(o, "data-type", "footnotes-block"),
              g = "";
            if (f) g = o.innerHTML;
            else {
              var v = (0, y.S)(t.startContainer, "BLOCKQUOTE"),
                w = (0, b.O9)(t.startContainer);
              if (
                (w && (o = w),
                v && (!w || (w && !v.contains(w))) && (o = v),
                h && (o = h),
                (g = o.outerHTML),
                "UL" === o.tagName || "OL" === o.tagName)
              ) {
                var _ = o.previousElementSibling,
                  k = o.nextElementSibling;
                !_ ||
                  ("UL" !== _.tagName && "OL" !== _.tagName) ||
                  ((g = _.outerHTML + g), _.remove()),
                  !k ||
                    ("UL" !== k.tagName && "OL" !== k.tagName) ||
                    ((g += k.outerHTML), k.remove()),
                  (g = g.replace(
                    "<div><wbr><br></div>",
                    "<li><p><wbr><br></p></li>"
                  ));
              } else
                o.previousElementSibling &&
                  "" !==
                    o.previousElementSibling.textContent.replace(
                      i.g.ZWSP,
                      ""
                    ) &&
                  r &&
                  "insertParagraph" === r.inputType &&
                  ((g = o.previousElementSibling.outerHTML + g),
                  o.previousElementSibling.remove());
              o.innerText.startsWith("```") ||
                (e.ir.element
                  .querySelectorAll("[data-type='link-ref-defs-block']")
                  .forEach(function (e) {
                    e && !o.isEqualNode(e) && ((g += e.outerHTML), e.remove());
                  }),
                e.ir.element
                  .querySelectorAll("[data-type='footnotes-block']")
                  .forEach(function (e) {
                    e && !o.isEqualNode(e) && ((g += e.outerHTML), e.remove());
                  }));
            }
            if (
              (e.options.debugger,
              (g = e.lute.SpinVditorIRDOM(g)),
              e.options.debugger,
              f)
            )
              o.innerHTML = g;
            else if (((o.outerHTML = g), h)) {
              var E = (0, b.a1)(
                e.ir.element.querySelector("wbr"),
                "data-type",
                "footnotes-def"
              );
              if (E) {
                var S = E.textContent,
                  L = S.substring(1, S.indexOf("]:")),
                  C = e.ir.element.querySelector(
                    'sup[data-type="footnotes-ref"][data-footnotes-label="'.concat(
                      L,
                      '"]'
                    )
                  );
                C &&
                  C.setAttribute(
                    "aria-label",
                    S.substr(L.length + 3)
                      .trim()
                      .substr(0, 24)
                  );
              }
            }
            var x,
              M = e.ir.element.querySelectorAll(
                "[data-type='link-ref-defs-block']"
              );
            M.forEach(function (e, t) {
              0 === t
                ? (m = e)
                : (m.insertAdjacentHTML("beforeend", e.innerHTML), e.remove());
            }),
              M.length > 0 &&
                e.ir.element.insertAdjacentElement("beforeend", M[0]);
            var T = e.ir.element.querySelectorAll(
              "[data-type='footnotes-block']"
            );
            T.forEach(function (e, t) {
              0 === t
                ? (x = e)
                : (x.insertAdjacentHTML("beforeend", e.innerHTML), e.remove());
            }),
              T.length > 0 &&
                e.ir.element.insertAdjacentElement("beforeend", T[0]),
              (0, N.ib)(e.ir.element, t),
              e.ir.element
                .querySelectorAll(".vditor-ir__preview[data-render='2']")
                .forEach(function (t) {
                  H(t, e);
                }),
              j(e),
              Ct(e, {
                enableAddUndoStack: !0,
                enableHint: !0,
                enableInput: !0,
              });
          },
          I = function (e, t) {
            if ("" === e) return !1;
            if (
              -1 === e.indexOf("⇧") &&
              -1 === e.indexOf("⌘") &&
              -1 === e.indexOf("⌥")
            )
              return !((0, c.yl)(t) || t.altKey || t.shiftKey || t.code !== e);
            if ("⇧Tab" === e)
              return !(
                (0, c.yl)(t) ||
                t.altKey ||
                !t.shiftKey ||
                "Tab" !== t.code
              );
            var n = e.split("");
            if (e.startsWith("⌥")) {
              var r = 3 === n.length ? n[2] : n[1];
              return !(
                (3 === n.length ? !(0, c.yl)(t) : (0, c.yl)(t)) ||
                !t.altKey ||
                t.shiftKey ||
                t.code !== (/^[0-9]$/.test(r) ? "Digit" : "Key") + r
              );
            }
            "⌘Enter" === e && (n = ["⌘", "Enter"]);
            var i = n.length > 2 && "⇧" === n[0],
              o = i ? n[2] : n[1];
            return (
              !i ||
                (!(0, c.vU)() && /Mac/.test(navigator.platform)) ||
                ("-" === o ? (o = "_") : "=" === o && (o = "+")),
              !(
                !(0, c.yl)(t) ||
                t.key.toLowerCase() !== o.toLowerCase() ||
                t.altKey ||
                !((!i && !t.shiftKey) || (i && t.shiftKey))
              )
            );
          },
          R = function (e, t) {
            t.ir.element
              .querySelectorAll(".vditor-ir__node--expand")
              .forEach(function (e) {
                e.classList.remove("vditor-ir__node--expand");
              });
            var n = (0, b.JQ)(e.startContainer, "vditor-ir__node"),
              r = !e.collapsed && (0, b.JQ)(e.endContainer, "vditor-ir__node");
            if (e.collapsed || (n && n === r)) {
              n &&
                (n.classList.add("vditor-ir__node--expand"),
                n.classList.remove("vditor-ir__node--hidden"),
                (0, N.Hc)(e));
              var i = (function (e) {
                var t = e.startContainer;
                if (3 === t.nodeType && t.nodeValue.length !== e.startOffset)
                  return !1;
                for (var n = t.nextSibling; n && "" === n.textContent; )
                  n = n.nextSibling;
                if (!n) {
                  var r = (0, b.fb)(t, "vditor-ir__marker");
                  if (r && !r.nextSibling) {
                    var i = t.parentElement.parentElement.nextSibling;
                    if (
                      i &&
                      3 !== i.nodeType &&
                      i.classList.contains("vditor-ir__node")
                    )
                      return i;
                  }
                  return !1;
                }
                return (
                  !(
                    !n ||
                    3 === n.nodeType ||
                    !n.classList.contains("vditor-ir__node") ||
                    n.getAttribute("data-block")
                  ) && n
                );
              })(e);
              if (i)
                return (
                  i.classList.add("vditor-ir__node--expand"),
                  void i.classList.remove("vditor-ir__node--hidden")
                );
              var o = (function (e) {
                var t = e.startContainer,
                  n = t.previousSibling;
                return (
                  !(
                    3 !== t.nodeType ||
                    0 !== e.startOffset ||
                    !n ||
                    3 === n.nodeType ||
                    !n.classList.contains("vditor-ir__node") ||
                    n.getAttribute("data-block")
                  ) && n
                );
              })(e);
              return o
                ? (o.classList.add("vditor-ir__node--expand"),
                  void o.classList.remove("vditor-ir__node--hidden"))
                : void 0;
            }
          },
          B = n(971),
          z = function (e, t) {
            e.querySelectorAll("[data-type=footnotes-link]").forEach(function (
              e
            ) {
              for (
                var n = e.parentElement, r = n.nextSibling;
                r && r.textContent.startsWith("    ");

              ) {
                var i = r;
                i.childNodes.forEach(function (e) {
                  n.append(e.cloneNode(!0));
                }),
                  (r = r.nextSibling),
                  i.remove();
              }
              t && t(n);
            });
          },
          q = function (e, t) {
            var n,
              r = getSelection().getRangeAt(0).cloneRange(),
              i = r.startContainer;
            3 !== r.startContainer.nodeType &&
              "DIV" === r.startContainer.tagName &&
              (i = r.startContainer.childNodes[r.startOffset - 1]);
            var o = (0, b.a1)(i, "data-block", "0");
            if (
              o &&
              t &&
              ("deleteContentBackward" === t.inputType || " " === t.data)
            ) {
              for (
                var a = (0, N.im)(o, e.sv.element, r).start, s = !0, l = a - 1;
                l > o.textContent.substr(0, a).lastIndexOf("\n");
                l--
              )
                if (
                  " " !== o.textContent.charAt(l) &&
                  "\t" !== o.textContent.charAt(l)
                ) {
                  s = !1;
                  break;
                }
              if ((0 === a && (s = !1), s)) return void De(e);
              if ("deleteContentBackward" === t.inputType) {
                var c =
                  (0, b.a1)(i, "data-type", "code-block-open-marker") ||
                  (0, b.a1)(i, "data-type", "code-block-close-marker");
                if (c) {
                  var d;
                  if (
                    "code-block-close-marker" === c.getAttribute("data-type") &&
                    (d = Ne(i, "code-block-open-marker"))
                  )
                    return (d.textContent = c.textContent), void De(e);
                  if (
                    "code-block-open-marker" === c.getAttribute("data-type") &&
                    (d = Ne(i, "code-block-close-marker", !1))
                  )
                    return (d.textContent = c.textContent), void De(e);
                }
                var u = (0, b.a1)(i, "data-type", "math-block-open-marker");
                if (u) {
                  var p = u.nextElementSibling.nextElementSibling;
                  return void (
                    p &&
                    "math-block-close-marker" === p.getAttribute("data-type") &&
                    (p.remove(), De(e))
                  );
                }
                o
                  .querySelectorAll('[data-type="code-block-open-marker"]')
                  .forEach(function (e) {
                    1 === e.textContent.length && e.remove();
                  }),
                  o
                    .querySelectorAll('[data-type="code-block-close-marker"]')
                    .forEach(function (e) {
                      1 === e.textContent.length && e.remove();
                    });
                var m = (0, b.a1)(i, "data-type", "heading-marker");
                if (m && -1 === m.textContent.indexOf("#")) return void De(e);
              }
              if (
                (" " === t.data || "deleteContentBackward" === t.inputType) &&
                ((0, b.a1)(i, "data-type", "padding") ||
                  (0, b.a1)(i, "data-type", "li-marker") ||
                  (0, b.a1)(i, "data-type", "task-marker") ||
                  (0, b.a1)(i, "data-type", "blockquote-marker"))
              )
                return void De(e);
            }
            if (o && "$$" === o.textContent.trimRight()) De(e);
            else {
              o || (o = e.sv.element),
                "link-ref-defs-block" ===
                  (null === (n = o.firstElementChild) || void 0 === n
                    ? void 0
                    : n.getAttribute("data-type")) && (o = e.sv.element),
                (0, b.a1)(i, "data-type", "footnotes-link") &&
                  (o = e.sv.element),
                -1 === o.textContent.indexOf(Lute.Caret) &&
                  r.insertNode(document.createTextNode(Lute.Caret)),
                o.querySelectorAll("[style]").forEach(function (e) {
                  e.removeAttribute("style");
                }),
                o.querySelectorAll("font").forEach(function (e) {
                  e.outerHTML = e.innerHTML;
                });
              var f = o.textContent,
                h = o.isEqualNode(e.sv.element);
              if (h) f = o.textContent;
              else {
                o.previousElementSibling &&
                  ((f = o.previousElementSibling.textContent + f),
                  o.previousElementSibling.remove()),
                  o.previousElementSibling &&
                    0 === f.indexOf("---\n") &&
                    ((f = o.previousElementSibling.textContent + f),
                    o.previousElementSibling.remove());
                var g = "";
                e.sv.element
                  .querySelectorAll("[data-type='link-ref-defs-block']")
                  .forEach(function (e, t) {
                    e &&
                      !o.isEqualNode(e.parentElement) &&
                      ((g += e.parentElement.textContent + "\n"),
                      e.parentElement.remove());
                  }),
                  e.sv.element
                    .querySelectorAll("[data-type='footnotes-link']")
                    .forEach(function (e, t) {
                      e &&
                        !o.isEqualNode(e.parentElement) &&
                        ((g += e.parentElement.textContent + "\n"),
                        e.parentElement.remove());
                    }),
                  (f = g + f);
              }
              (f = je(f, e)),
                h ? (o.innerHTML = f) : (o.outerHTML = f),
                e.sv.element
                  .querySelectorAll("[data-type='link-ref-defs-block']")
                  .forEach(function (t) {
                    e.sv.element.insertAdjacentElement(
                      "beforeend",
                      t.parentElement
                    );
                  }),
                z(e.sv.element, function (t) {
                  e.sv.element.insertAdjacentElement("beforeend", t);
                }),
                (0, N.ib)(e.sv.element, r),
                Me(e),
                De(e, {
                  enableAddUndoStack: !0,
                  enableHint: !0,
                  enableInput: !0,
                });
            }
          },
          V = n(652),
          U = function (e) {
            "dark" === e.options.theme
              ? e.element.classList.add("vditor--dark")
              : e.element.classList.remove("vditor--dark");
          },
          W = function (e) {
            var t = window.innerWidth <= i.g.MOBILE_WIDTH ? 10 : 35;
            if ("none" !== e.wysiwyg.element.parentElement.style.display) {
              var n =
                (e.wysiwyg.element.parentElement.clientWidth -
                  e.options.preview.maxWidth) /
                2;
              e.wysiwyg.element.style.padding = "10px ".concat(
                Math.max(t, n),
                "px"
              );
            }
            "none" !== e.ir.element.parentElement.style.display &&
              ((n =
                (e.ir.element.parentElement.clientWidth -
                  e.options.preview.maxWidth) /
                2),
              (e.ir.element.style.padding = "10px ".concat(
                Math.max(t, n),
                "px"
              ))),
              "block" !== e.preview.element.style.display
                ? (e.toolbar.element.style.paddingLeft =
                    Math.max(
                      5,
                      parseInt(
                        e[e.currentMode].element.style.paddingLeft || "0",
                        10
                      ) +
                        ("left" === e.options.outline.position
                          ? e.outline.element.offsetWidth
                          : 0)
                    ) + "px")
                : (e.toolbar.element.style.paddingLeft =
                    5 +
                    ("left" === e.options.outline.position
                      ? e.outline.element.offsetWidth
                      : 0) +
                    "px");
          },
          G = function (e) {
            if (e.options.typewriterMode) {
              var t = window.innerHeight;
              "number" == typeof e.options.height
                ? ((t = e.options.height),
                  "number" == typeof e.options.minHeight &&
                    (t = Math.max(t, e.options.minHeight)),
                  (t = Math.min(window.innerHeight, t)))
                : (t = e.element.clientHeight),
                e.element.classList.contains("vditor--fullscreen") &&
                  (t = window.innerHeight),
                e[e.currentMode].element.style.setProperty(
                  "--editor-bottom",
                  (t - e.toolbar.element.offsetHeight) / 2 + "px"
                );
            }
          };
        function K() {
          window.removeEventListener("resize", e);
        }
        var F,
          $,
          Z = function (t) {
            G(t),
              K(),
              window.addEventListener(
                "resize",
                (e = function () {
                  W(t), G(t);
                })
              );
            var n = (0, c.pK)() && localStorage.getItem(t.options.cache.id);
            return (
              (t.options.cache.enable && n) ||
                (t.options.value
                  ? (n = t.options.value)
                  : t.originalInnerHTML
                  ? (n = t.lute.HTML2Md(t.originalInnerHTML))
                  : t.options.cache.enable || (n = "")),
              n || ""
            );
          },
          J = function (e) {
            clearTimeout(e[e.currentMode].hlToolbarTimeoutId),
              (e[e.currentMode].hlToolbarTimeoutId = window.setTimeout(
                function () {
                  if (
                    "false" !==
                      e[e.currentMode].element.getAttribute(
                        "contenteditable"
                      ) &&
                    (0, N.Gb)(e[e.currentMode].element)
                  ) {
                    d(e.toolbar.elements, i.g.EDIT_TOOLBARS),
                      p(e.toolbar.elements, i.g.EDIT_TOOLBARS);
                    var t = (0, N.zh)(e),
                      n = t.startContainer;
                    3 === t.startContainer.nodeType &&
                      (n = t.startContainer.parentElement),
                      n.classList.contains("vditor-reset") &&
                        (n = n.childNodes[t.startOffset]),
                      ("sv" === e.currentMode
                        ? (0, b.a1)(n, "data-type", "heading")
                        : (0, y.W)(n)) && u(e.toolbar.elements, ["headings"]),
                      ("sv" === e.currentMode
                        ? (0, b.a1)(n, "data-type", "blockquote")
                        : (0, b.lG)(n, "BLOCKQUOTE")) &&
                        u(e.toolbar.elements, ["quote"]),
                      (0, b.a1)(n, "data-type", "strong") &&
                        u(e.toolbar.elements, ["bold"]),
                      (0, b.a1)(n, "data-type", "em") &&
                        u(e.toolbar.elements, ["italic"]),
                      (0, b.a1)(n, "data-type", "s") &&
                        u(e.toolbar.elements, ["strike"]),
                      (0, b.a1)(n, "data-type", "a") &&
                        u(e.toolbar.elements, ["link"]);
                    var r = (0, b.lG)(n, "LI");
                    r
                      ? (r.classList.contains("vditor-task")
                          ? u(e.toolbar.elements, ["check"])
                          : "OL" === r.parentElement.tagName
                          ? u(e.toolbar.elements, ["ordered-list"])
                          : "UL" === r.parentElement.tagName &&
                            u(e.toolbar.elements, ["list"]),
                        p(e.toolbar.elements, ["outdent", "indent"]))
                      : m(e.toolbar.elements, ["outdent", "indent"]),
                      (0, b.a1)(n, "data-type", "code-block") &&
                        (m(e.toolbar.elements, [
                          "headings",
                          "bold",
                          "italic",
                          "strike",
                          "line",
                          "quote",
                          "list",
                          "ordered-list",
                          "check",
                          "code",
                          "inline-code",
                          "upload",
                          "link",
                          "table",
                          "record",
                        ]),
                        u(e.toolbar.elements, ["code"])),
                      (0, b.a1)(n, "data-type", "code") &&
                        (m(e.toolbar.elements, [
                          "headings",
                          "bold",
                          "italic",
                          "strike",
                          "line",
                          "quote",
                          "list",
                          "ordered-list",
                          "check",
                          "code",
                          "upload",
                          "link",
                          "table",
                          "record",
                        ]),
                        u(e.toolbar.elements, ["inline-code"])),
                      (0, b.a1)(n, "data-type", "table") &&
                        m(e.toolbar.elements, [
                          "headings",
                          "list",
                          "ordered-list",
                          "check",
                          "line",
                          "quote",
                          "code",
                          "table",
                        ]);
                  }
                },
                200
              ));
          },
          X = function (e, t) {
            void 0 === t &&
              (t = { enableAddUndoStack: !0, enableHint: !1, enableInput: !0 }),
              t.enableHint && e.hint.render(e),
              clearTimeout(e.wysiwyg.afterRenderTimeoutId),
              (e.wysiwyg.afterRenderTimeoutId = window.setTimeout(function () {
                if (!e.wysiwyg.composingLock) {
                  var n = a(e);
                  "function" == typeof e.options.input &&
                    t.enableInput &&
                    e.options.input(n),
                    e.options.counter.enable && e.counter.render(e, n),
                    e.options.cache.enable &&
                      (0, c.pK)() &&
                      (localStorage.setItem(e.options.cache.id, n),
                      e.options.cache.after && e.options.cache.after(n)),
                    e.devtools && e.devtools.renderEchart(e),
                    t.enableAddUndoStack && e.undo.addToUndoStack(e);
                }
              }, e.options.undoDelay));
          },
          Y = function (e) {
            for (var t = "", n = e.nextSibling; n; )
              3 === n.nodeType ? (t += n.textContent) : (t += n.outerHTML),
                (n = n.nextSibling);
            return t;
          },
          Q = function (e) {
            for (var t = "", n = e.previousSibling; n; )
              (t = 3 === n.nodeType ? n.textContent + t : n.outerHTML + t),
                (n = n.previousSibling);
            return t;
          },
          ee = function (e, t) {
            Array.from(e.wysiwyg.element.childNodes).find(function (n) {
              if (3 === n.nodeType) {
                var r = document.createElement("p");
                r.setAttribute("data-block", "0"),
                  (r.textContent = n.textContent);
                var i =
                  3 === t.startContainer.nodeType
                    ? t.startOffset
                    : n.textContent.length;
                return (
                  n.parentNode.insertBefore(r, n),
                  n.remove(),
                  t.setStart(
                    r.firstChild,
                    Math.min(r.firstChild.textContent.length, i)
                  ),
                  t.collapse(!0),
                  (0, N.Hc)(t),
                  !0
                );
              }
              if (!n.getAttribute("data-block"))
                return (
                  "P" === n.tagName
                    ? n.remove()
                    : ("DIV" === n.tagName
                        ? (t.insertNode(document.createElement("wbr")),
                          (n.outerHTML = '<p data-block="0">'.concat(
                            n.innerHTML,
                            "</p>"
                          )))
                        : "BR" === n.tagName
                        ? (n.outerHTML = '<p data-block="0">'.concat(
                            n.outerHTML,
                            "<wbr></p>"
                          ))
                        : (t.insertNode(document.createElement("wbr")),
                          (n.outerHTML = '<p data-block="0">'.concat(
                            n.outerHTML,
                            "</p>"
                          ))),
                      (0, N.ib)(e.wysiwyg.element, t),
                      (t = getSelection().getRangeAt(0))),
                  !0
                );
            });
          },
          te = function (e, t) {
            var n = (0, N.zh)(e),
              r = (0, b.F9)(n.startContainer);
            r || (r = n.startContainer.childNodes[n.startOffset]),
              r ||
                0 !== e.wysiwyg.element.children.length ||
                (r = e.wysiwyg.element),
              r &&
                !r.classList.contains("vditor-wysiwyg__block") &&
                (n.insertNode(document.createElement("wbr")),
                "<wbr>" === r.innerHTML.trim() && (r.innerHTML = "<wbr><br>"),
                "BLOCKQUOTE" === r.tagName ||
                r.classList.contains("vditor-reset")
                  ? (r.innerHTML = "<"
                      .concat(t, ' data-block="0">')
                      .concat(r.innerHTML.trim(), "</")
                      .concat(t, ">"))
                  : (r.outerHTML = "<"
                      .concat(t, ' data-block="0">')
                      .concat(r.innerHTML.trim(), "</")
                      .concat(t, ">")),
                (0, N.ib)(e.wysiwyg.element, n),
                j(e));
          },
          ne = function (e) {
            var t = getSelection().getRangeAt(0),
              n = (0, b.F9)(t.startContainer);
            n || (n = t.startContainer.childNodes[t.startOffset]),
              n &&
                (t.insertNode(document.createElement("wbr")),
                (n.outerHTML = '<p data-block="0">'.concat(
                  n.innerHTML,
                  "</p>"
                )),
                (0, N.ib)(e.wysiwyg.element, t)),
              (e.wysiwyg.popover.style.display = "none");
          },
          re = function (e, t, n) {
            void 0 === n && (n = !0);
            var r = e.previousElementSibling,
              i = r.ownerDocument.createRange();
            "CODE" === r.tagName
              ? ((r.style.display = "inline-block"),
                n ? i.setStart(r.firstChild, 1) : i.selectNodeContents(r))
              : ((r.style.display = "block"),
                r.firstChild.firstChild ||
                  r.firstChild.appendChild(document.createTextNode("")),
                i.selectNodeContents(r.firstChild)),
              n ? i.collapse(!0) : i.collapse(!1),
              (0, N.Hc)(i),
              e.firstElementChild.classList.contains("language-mindmap") ||
                Me(t);
          },
          ie = function (e, t) {
            if (I("⇧⌘X", t)) {
              var n = e.wysiwyg.popover.querySelector('[data-type="remove"]');
              return n && n.click(), t.preventDefault(), !0;
            }
          },
          oe = function (e) {
            clearTimeout(e.wysiwyg.hlToolbarTimeoutId),
              (e.wysiwyg.hlToolbarTimeoutId = window.setTimeout(function () {
                if (
                  "false" !==
                    e.wysiwyg.element.getAttribute("contenteditable") &&
                  (0, N.Gb)(e.wysiwyg.element)
                ) {
                  d(e.toolbar.elements, i.g.EDIT_TOOLBARS),
                    p(e.toolbar.elements, i.g.EDIT_TOOLBARS);
                  var t = getSelection().getRangeAt(0),
                    n = t.startContainer;
                  n =
                    3 === t.startContainer.nodeType
                      ? t.startContainer.parentElement
                      : n.childNodes[
                          t.startOffset >= n.childNodes.length
                            ? n.childNodes.length - 1
                            : t.startOffset
                        ];
                  var r = (0, b.a1)(n, "data-type", "footnotes-block");
                  if (r)
                    return (
                      (e.wysiwyg.popover.innerHTML = ""),
                      de(r, e),
                      void ae(e, r)
                    );
                  var o = (0, b.lG)(n, "LI");
                  o
                    ? (o.classList.contains("vditor-task")
                        ? u(e.toolbar.elements, ["check"])
                        : "OL" === o.parentElement.tagName
                        ? u(e.toolbar.elements, ["ordered-list"])
                        : "UL" === o.parentElement.tagName &&
                          u(e.toolbar.elements, ["list"]),
                      p(e.toolbar.elements, ["outdent", "indent"]))
                    : m(e.toolbar.elements, ["outdent", "indent"]),
                    (0, b.lG)(n, "BLOCKQUOTE") &&
                      u(e.toolbar.elements, ["quote"]),
                    ((0, b.lG)(n, "B") || (0, b.lG)(n, "STRONG")) &&
                      u(e.toolbar.elements, ["bold"]),
                    ((0, b.lG)(n, "I") || (0, b.lG)(n, "EM")) &&
                      u(e.toolbar.elements, ["italic"]),
                    ((0, b.lG)(n, "STRIKE") || (0, b.lG)(n, "S")) &&
                      u(e.toolbar.elements, ["strike"]),
                    e.wysiwyg.element
                      .querySelectorAll(".vditor-comment--focus")
                      .forEach(function (e) {
                        e.classList.remove("vditor-comment--focus");
                      });
                  var s = (0, b.fb)(n, "vditor-comment");
                  if (s) {
                    var l = s.getAttribute("data-cmtids").split(" ");
                    if (
                      l.length > 1 &&
                      s.nextSibling.isSameNode(s.nextElementSibling)
                    ) {
                      var f = s.nextElementSibling
                        .getAttribute("data-cmtids")
                        .split(" ");
                      l.find(function (e) {
                        if (f.includes(e)) return (l = [e]), !0;
                      });
                    }
                    e.wysiwyg.element
                      .querySelectorAll(".vditor-comment")
                      .forEach(function (e) {
                        e.getAttribute("data-cmtids").indexOf(l[0]) > -1 &&
                          e.classList.add("vditor-comment--focus");
                      });
                  }
                  var h = (0, b.lG)(n, "A");
                  h && u(e.toolbar.elements, ["link"]);
                  var g = (0, b.lG)(n, "TABLE"),
                    v = (0, y.W)(n);
                  (0, b.lG)(n, "CODE")
                    ? (0, b.lG)(n, "PRE")
                      ? (m(e.toolbar.elements, [
                          "headings",
                          "bold",
                          "italic",
                          "strike",
                          "line",
                          "quote",
                          "list",
                          "ordered-list",
                          "check",
                          "code",
                          "inline-code",
                          "upload",
                          "link",
                          "table",
                          "record",
                        ]),
                        u(e.toolbar.elements, ["code"]))
                      : (m(e.toolbar.elements, [
                          "headings",
                          "bold",
                          "italic",
                          "strike",
                          "line",
                          "quote",
                          "list",
                          "ordered-list",
                          "check",
                          "code",
                          "upload",
                          "link",
                          "table",
                          "record",
                        ]),
                        u(e.toolbar.elements, ["inline-code"]))
                    : v
                    ? (m(e.toolbar.elements, ["bold"]),
                      u(e.toolbar.elements, ["headings"]))
                    : g && m(e.toolbar.elements, ["table"]);
                  var w = (0, b.fb)(n, "vditor-toc");
                  if (w)
                    return (
                      (e.wysiwyg.popover.innerHTML = ""),
                      de(w, e),
                      void ae(e, w)
                    );
                  var _ = (0, y.S)(n, "BLOCKQUOTE");
                  if (
                    (_ &&
                      ((e.wysiwyg.popover.innerHTML = ""),
                      le(t, _, e),
                      ce(t, _, e),
                      de(_, e),
                      ae(e, _)),
                    o &&
                      ((e.wysiwyg.popover.innerHTML = ""),
                      le(t, o, e),
                      ce(t, o, e),
                      de(o, e),
                      ae(e, o)),
                    g)
                  ) {
                    e.options.lang,
                      e.options,
                      (e.wysiwyg.popover.innerHTML = "");
                    var k = function () {
                        var t = g.rows.length,
                          n = g.rows[0].cells.length,
                          r = parseInt(R.value, 10) || t,
                          i = parseInt(z.value, 10) || n;
                        if (r !== t || n !== i) {
                          if (n !== i)
                            for (var o = i - n, s = 0; s < g.rows.length; s++)
                              if (o > 0)
                                for (var l = 0; l < o; l++)
                                  0 === s
                                    ? g.rows[
                                        s
                                      ].lastElementChild.insertAdjacentHTML(
                                        "afterend",
                                        "<th> </th>"
                                      )
                                    : g.rows[
                                        s
                                      ].lastElementChild.insertAdjacentHTML(
                                        "afterend",
                                        "<td> </td>"
                                      );
                              else
                                for (var c = n - 1; c >= i; c--)
                                  g.rows[s].cells[c].remove();
                          if (t !== r) {
                            var d = r - t;
                            if (d > 0) {
                              for (var u = "<tr>", p = 0; p < i; p++)
                                u += "<td> </td>";
                              for (var m = 0; m < d; m++)
                                g.querySelector("tbody")
                                  ? g
                                      .querySelector("tbody")
                                      .insertAdjacentHTML("beforeend", u)
                                  : g
                                      .querySelector("thead")
                                      .insertAdjacentHTML(
                                        "afterend",
                                        u + "</tr>"
                                      );
                            } else
                              for (p = t - 1; p >= r; p--)
                                g.rows[p].remove(),
                                  1 === g.rows.length &&
                                    g.querySelector("tbody").remove();
                          }
                          "function" == typeof e.options.input &&
                            e.options.input(a(e));
                        }
                      },
                      E = function (n) {
                        ot(g, n),
                          "right" === n
                            ? (x.classList.remove("vditor-icon--current"),
                              M.classList.remove("vditor-icon--current"),
                              T.classList.add("vditor-icon--current"))
                            : "center" === n
                            ? (x.classList.remove("vditor-icon--current"),
                              T.classList.remove("vditor-icon--current"),
                              M.classList.add("vditor-icon--current"))
                            : (M.classList.remove("vditor-icon--current"),
                              T.classList.remove("vditor-icon--current"),
                              x.classList.add("vditor-icon--current")),
                          (0, N.Hc)(t),
                          X(e);
                      },
                      S = (0, b.lG)(n, "TD"),
                      L = (0, b.lG)(n, "TH"),
                      C = "left";
                    S
                      ? (C = S.getAttribute("align") || "left")
                      : L && (C = L.getAttribute("align") || "center");
                    var x = document.createElement("button");
                    x.setAttribute("type", "button"),
                      x.setAttribute(
                        "aria-label",
                        window.VditorI18n.alignLeft +
                          "<" +
                          (0, c.ns)("⇧⌘L") +
                          ">"
                      ),
                      x.setAttribute("data-type", "left"),
                      (x.innerHTML =
                        '<svg><use xlink:href="#vditor-icon-align-left"></use></svg>'),
                      (x.className =
                        "vditor-icon vditor-tooltipped vditor-tooltipped__n" +
                        ("left" === C ? " vditor-icon--current" : "")),
                      (x.onclick = function () {
                        E("left");
                      });
                    var M = document.createElement("button");
                    M.setAttribute("type", "button"),
                      M.setAttribute(
                        "aria-label",
                        window.VditorI18n.alignCenter +
                          "<" +
                          (0, c.ns)("⇧⌘C") +
                          ">"
                      ),
                      M.setAttribute("data-type", "center"),
                      (M.innerHTML =
                        '<svg><use xlink:href="#vditor-icon-align-center"></use></svg>'),
                      (M.className =
                        "vditor-icon vditor-tooltipped vditor-tooltipped__n" +
                        ("center" === C ? " vditor-icon--current" : "")),
                      (M.onclick = function () {
                        E("center");
                      });
                    var T = document.createElement("button");
                    T.setAttribute("type", "button"),
                      T.setAttribute(
                        "aria-label",
                        window.VditorI18n.alignRight +
                          "<" +
                          (0, c.ns)("⇧⌘R") +
                          ">"
                      ),
                      T.setAttribute("data-type", "right"),
                      (T.innerHTML =
                        '<svg><use xlink:href="#vditor-icon-align-right"></use></svg>'),
                      (T.className =
                        "vditor-icon vditor-tooltipped vditor-tooltipped__n" +
                        ("right" === C ? " vditor-icon--current" : "")),
                      (T.onclick = function () {
                        E("right");
                      });
                    var A = document.createElement("button");
                    A.setAttribute("type", "button"),
                      A.setAttribute(
                        "aria-label",
                        window.VditorI18n.insertRowBelow +
                          "<" +
                          (0, c.ns)("⌘=") +
                          ">"
                      ),
                      A.setAttribute("data-type", "insertRow"),
                      (A.innerHTML =
                        '<svg><use xlink:href="#vditor-icon-insert-row"></use></svg>'),
                      (A.className =
                        "vditor-icon vditor-tooltipped vditor-tooltipped__n"),
                      (A.onclick = function () {
                        var n = getSelection().getRangeAt(0).startContainer,
                          r = (0, b.lG)(n, "TD") || (0, b.lG)(n, "TH");
                        r && pt(e, t, r);
                      });
                    var j = document.createElement("button");
                    j.setAttribute("type", "button"),
                      j.setAttribute(
                        "aria-label",
                        window.VditorI18n.insertRowAbove +
                          "<" +
                          (0, c.ns)("⇧⌘F") +
                          ">"
                      ),
                      j.setAttribute("data-type", "insertRow"),
                      (j.innerHTML =
                        '<svg><use xlink:href="#vditor-icon-insert-rowb"></use></svg>'),
                      (j.className =
                        "vditor-icon vditor-tooltipped vditor-tooltipped__n"),
                      (j.onclick = function () {
                        var n = getSelection().getRangeAt(0).startContainer,
                          r = (0, b.lG)(n, "TD") || (0, b.lG)(n, "TH");
                        r && mt(e, t, r);
                      });
                    var O = document.createElement("button");
                    O.setAttribute("type", "button"),
                      O.setAttribute(
                        "aria-label",
                        window.VditorI18n.insertColumnRight +
                          "<" +
                          (0, c.ns)("⇧⌘=") +
                          ">"
                      ),
                      O.setAttribute("data-type", "insertColumn"),
                      (O.innerHTML =
                        '<svg><use xlink:href="#vditor-icon-insert-column"></use></svg>'),
                      (O.className =
                        "vditor-icon vditor-tooltipped vditor-tooltipped__n"),
                      (O.onclick = function () {
                        var t = getSelection().getRangeAt(0).startContainer,
                          n = (0, b.lG)(t, "TD") || (0, b.lG)(t, "TH");
                        n && ft(e, g, n);
                      });
                    var D = document.createElement("button");
                    D.setAttribute("type", "button"),
                      D.setAttribute(
                        "aria-label",
                        window.VditorI18n.insertColumnLeft +
                          "<" +
                          (0, c.ns)("⇧⌘G") +
                          ">"
                      ),
                      D.setAttribute("data-type", "insertColumn"),
                      (D.innerHTML =
                        '<svg><use xlink:href="#vditor-icon-insert-columnb"></use></svg>'),
                      (D.className =
                        "vditor-icon vditor-tooltipped vditor-tooltipped__n"),
                      (D.onclick = function () {
                        var t = getSelection().getRangeAt(0).startContainer,
                          n = (0, b.lG)(t, "TD") || (0, b.lG)(t, "TH");
                        n && ft(e, g, n, "beforebegin");
                      });
                    var P = document.createElement("button");
                    P.setAttribute("type", "button"),
                      P.setAttribute(
                        "aria-label",
                        window.VditorI18n["delete-row"] +
                          "<" +
                          (0, c.ns)("⌘-") +
                          ">"
                      ),
                      P.setAttribute("data-type", "deleteRow"),
                      (P.innerHTML =
                        '<svg><use xlink:href="#vditor-icon-delete-row"></use></svg>'),
                      (P.className =
                        "vditor-icon vditor-tooltipped vditor-tooltipped__n"),
                      (P.onclick = function () {
                        var n = getSelection().getRangeAt(0).startContainer,
                          r = (0, b.lG)(n, "TD") || (0, b.lG)(n, "TH");
                        r && ht(e, t, r);
                      });
                    var I = document.createElement("button");
                    I.setAttribute("type", "button"),
                      I.setAttribute(
                        "aria-label",
                        window.VditorI18n["delete-column"] +
                          "<" +
                          (0, c.ns)("⇧⌘-") +
                          ">"
                      ),
                      I.setAttribute("data-type", "deleteColumn"),
                      (I.innerHTML =
                        '<svg><use xlink:href="#vditor-icon-delete-column"></use></svg>'),
                      (I.className =
                        "vditor-icon vditor-tooltipped vditor-tooltipped__n"),
                      (I.onclick = function () {
                        var n = getSelection().getRangeAt(0).startContainer,
                          r = (0, b.lG)(n, "TD") || (0, b.lG)(n, "TH");
                        r && gt(e, t, g, r);
                      }),
                      (Z = document.createElement("span")).setAttribute(
                        "aria-label",
                        window.VditorI18n.row
                      ),
                      (Z.className = "vditor-tooltipped vditor-tooltipped__n");
                    var R = document.createElement("input");
                    Z.appendChild(R),
                      (R.type = "number"),
                      (R.min = "1"),
                      (R.className = "vditor-input"),
                      (R.style.width = "42px"),
                      (R.style.textAlign = "center"),
                      R.setAttribute("placeholder", window.VditorI18n.row),
                      (R.value = g.rows.length.toString()),
                      (R.oninput = function () {
                        k();
                      }),
                      (R.onkeydown = function (n) {
                        if (!n.isComposing)
                          return "Tab" === n.key
                            ? (z.focus(), z.select(), void n.preventDefault())
                            : void (ie(e, n) || me(n, t));
                      });
                    var B = document.createElement("span");
                    B.setAttribute("aria-label", window.VditorI18n.column),
                      (B.className = "vditor-tooltipped vditor-tooltipped__n");
                    var z = document.createElement("input");
                    B.appendChild(z),
                      (z.type = "number"),
                      (z.min = "1"),
                      (z.className = "vditor-input"),
                      (z.style.width = "42px"),
                      (z.style.textAlign = "center"),
                      z.setAttribute("placeholder", window.VditorI18n.column),
                      (z.value = g.rows[0].cells.length.toString()),
                      (z.oninput = function () {
                        k();
                      }),
                      (z.onkeydown = function (n) {
                        if (!n.isComposing)
                          return "Tab" === n.key
                            ? (R.focus(), R.select(), void n.preventDefault())
                            : void (ie(e, n) || me(n, t));
                      }),
                      le(t, g, e),
                      ce(t, g, e),
                      de(g, e),
                      e.wysiwyg.popover.insertAdjacentElement("beforeend", x),
                      e.wysiwyg.popover.insertAdjacentElement("beforeend", M),
                      e.wysiwyg.popover.insertAdjacentElement("beforeend", T),
                      e.wysiwyg.popover.insertAdjacentElement("beforeend", j),
                      e.wysiwyg.popover.insertAdjacentElement("beforeend", A),
                      e.wysiwyg.popover.insertAdjacentElement("beforeend", D),
                      e.wysiwyg.popover.insertAdjacentElement("beforeend", O),
                      e.wysiwyg.popover.insertAdjacentElement("beforeend", P),
                      e.wysiwyg.popover.insertAdjacentElement("beforeend", I),
                      e.wysiwyg.popover.insertAdjacentElement("beforeend", Z),
                      e.wysiwyg.popover.insertAdjacentHTML("beforeend", " x "),
                      e.wysiwyg.popover.insertAdjacentElement("beforeend", B),
                      ae(e, g);
                  }
                  var q = (0, b.a1)(n, "data-type", "link-ref");
                  q && se(e, q, t);
                  var V = (0, b.a1)(n, "data-type", "footnotes-ref");
                  if (V) {
                    e.options.lang,
                      e.options,
                      (e.wysiwyg.popover.innerHTML = ""),
                      (Z = document.createElement("span")).setAttribute(
                        "aria-label",
                        window.VditorI18n.footnoteRef +
                          "<" +
                          (0, c.ns)("⌥Enter") +
                          ">"
                      ),
                      (Z.className = "vditor-tooltipped vditor-tooltipped__n");
                    var U = document.createElement("input");
                    Z.appendChild(U),
                      (U.className = "vditor-input"),
                      U.setAttribute(
                        "placeholder",
                        window.VditorI18n.footnoteRef +
                          "<" +
                          (0, c.ns)("⌥Enter") +
                          ">"
                      ),
                      (U.style.width = "120px"),
                      (U.value = V.getAttribute("data-footnotes-label")),
                      (U.oninput = function () {
                        "" !== U.value.trim() &&
                          V.setAttribute("data-footnotes-label", U.value),
                          "function" == typeof e.options.input &&
                            e.options.input(a(e));
                      }),
                      (U.onkeydown = function (n) {
                        n.isComposing || ie(e, n) || me(n, t);
                      }),
                      de(V, e),
                      e.wysiwyg.popover.insertAdjacentElement("beforeend", Z),
                      ae(e, V);
                  }
                  var W = (0, b.fb)(n, "vditor-wysiwyg__block"),
                    G =
                      !!W && W.getAttribute("data-type").indexOf("block") > -1;
                  if (
                    (e.wysiwyg.element
                      .querySelectorAll(".vditor-wysiwyg__preview")
                      .forEach(function (e) {
                        (!W || (W && G && !W.contains(e))) &&
                          (e.previousElementSibling.style.display = "none");
                      }),
                    W && G)
                  ) {
                    if (
                      ((e.wysiwyg.popover.innerHTML = ""),
                      le(t, W, e),
                      ce(t, W, e),
                      de(W, e),
                      "code-block" === W.getAttribute("data-type"))
                    ) {
                      var K = document.createElement("span");
                      K.setAttribute(
                        "aria-label",
                        window.VditorI18n.language +
                          "<" +
                          (0, c.ns)("⌥Enter") +
                          ">"
                      ),
                        (K.className =
                          "vditor-tooltipped vditor-tooltipped__n");
                      var F = document.createElement("input");
                      K.appendChild(F);
                      var $ = W.firstElementChild.firstElementChild;
                      (F.className = "vditor-input"),
                        F.setAttribute(
                          "placeholder",
                          window.VditorI18n.language +
                            "<" +
                            (0, c.ns)("⌥Enter") +
                            ">"
                        ),
                        (F.value =
                          $.className.indexOf("language-") > -1
                            ? $.className.split("-")[1].split(" ")[0]
                            : ""),
                        (F.oninput = function (n) {
                          "" !== F.value.trim()
                            ? ($.className = "language-".concat(F.value))
                            : (($.className = ""),
                              (e.hint.recentLanguage = "")),
                            W.lastElementChild.classList.contains(
                              "vditor-wysiwyg__preview"
                            ) &&
                              ((W.lastElementChild.innerHTML =
                                W.firstElementChild.innerHTML),
                              H(W.lastElementChild, e)),
                            X(e),
                            1 === n.detail &&
                              (t.setStart($.firstChild, 0),
                              t.collapse(!0),
                              (0, N.Hc)(t));
                        }),
                        (F.onkeydown = function (n) {
                          if (!n.isComposing && !ie(e, n)) {
                            if (
                              "Escape" === n.key &&
                              "block" === e.hint.element.style.display
                            )
                              return (
                                (e.hint.element.style.display = "none"),
                                void n.preventDefault()
                              );
                            e.hint.select(n, e), me(n, t);
                          }
                        }),
                        (F.onkeyup = function (t) {
                          if (
                            !t.isComposing &&
                            "Enter" !== t.key &&
                            "ArrowUp" !== t.key &&
                            "Escape" !== t.key &&
                            "ArrowDown" !== t.key
                          ) {
                            var n = [],
                              r = F.value.substring(0, F.selectionStart);
                            (
                              e.options.preview.hljs.langs || i.g.CODE_LANGUAGES
                            ).forEach(function (e) {
                              e.indexOf(r.toLowerCase()) > -1 &&
                                n.push({ html: e, value: e });
                            }),
                              e.hint.genHTML(n, r, e),
                              t.preventDefault();
                          }
                        }),
                        e.wysiwyg.popover.insertAdjacentElement("beforeend", K);
                    }
                    ae(e, W);
                  } else W = void 0;
                  if (v) {
                    var Z;
                    (e.wysiwyg.popover.innerHTML = ""),
                      (Z = document.createElement("span")).setAttribute(
                        "aria-label",
                        "ID<" + (0, c.ns)("⌥Enter") + ">"
                      ),
                      (Z.className = "vditor-tooltipped vditor-tooltipped__n");
                    var J = document.createElement("input");
                    Z.appendChild(J),
                      (J.className = "vditor-input"),
                      J.setAttribute(
                        "placeholder",
                        "ID<" + (0, c.ns)("⌥Enter") + ">"
                      ),
                      (J.style.width = "120px"),
                      (J.value = v.getAttribute("data-id") || ""),
                      (J.oninput = function () {
                        v.setAttribute("data-id", J.value),
                          "function" == typeof e.options.input &&
                            e.options.input(a(e));
                      }),
                      (J.onkeydown = function (n) {
                        n.isComposing || ie(e, n) || me(n, t);
                      }),
                      le(t, v, e),
                      ce(t, v, e),
                      de(v, e),
                      e.wysiwyg.popover.insertAdjacentElement("beforeend", Z),
                      ae(e, v);
                  }
                  if (
                    (h && pe(e, h, t),
                    !(_ || o || g || W || h || q || V || v || w))
                  ) {
                    var Y = (0, b.a1)(n, "data-block", "0");
                    Y && Y.parentElement.isEqualNode(e.wysiwyg.element)
                      ? ((e.wysiwyg.popover.innerHTML = ""),
                        le(t, Y, e),
                        ce(t, Y, e),
                        de(Y, e),
                        ae(e, Y))
                      : (e.wysiwyg.popover.style.display = "none");
                  }
                  e.wysiwyg.element
                    .querySelectorAll('span[data-type="backslash"] > span')
                    .forEach(function (e) {
                      e.style.display = "none";
                    });
                  var Q = (0, b.a1)(t.startContainer, "data-type", "backslash");
                  Q && (Q.querySelector("span").style.display = "inline");
                }
              }, 200));
          },
          ae = function (e, t) {
            var n = t,
              r = (0, b.lG)(t, "TABLE");
            r && (n = r),
              (e.wysiwyg.popover.style.left = "0"),
              (e.wysiwyg.popover.style.display = "block"),
              (e.wysiwyg.popover.style.top =
                Math.max(-8, n.offsetTop - 21 - e.wysiwyg.element.scrollTop) +
                "px"),
              (e.wysiwyg.popover.style.left =
                Math.min(
                  n.offsetLeft,
                  e.wysiwyg.element.clientWidth - e.wysiwyg.popover.clientWidth
                ) + "px"),
              e.wysiwyg.popover.setAttribute(
                "data-top",
                (n.offsetTop - 21).toString()
              );
          },
          se = function (e, t, n) {
            void 0 === n && (n = getSelection().getRangeAt(0)),
              (e.wysiwyg.popover.innerHTML = "");
            var r = function () {
                "" !== o.value.trim() &&
                  ("IMG" === t.tagName
                    ? t.setAttribute("alt", o.value)
                    : (t.textContent = o.value)),
                  "" !== l.value.trim() &&
                    t.setAttribute("data-link-label", l.value),
                  "function" == typeof e.options.input && e.options.input(a(e));
              },
              i = document.createElement("span");
            i.setAttribute("aria-label", window.VditorI18n.textIsNotEmpty),
              (i.className = "vditor-tooltipped vditor-tooltipped__n");
            var o = document.createElement("input");
            i.appendChild(o),
              (o.className = "vditor-input"),
              o.setAttribute("placeholder", window.VditorI18n.textIsNotEmpty),
              (o.style.width = "120px"),
              (o.value = t.getAttribute("alt") || t.textContent),
              (o.oninput = function () {
                r();
              }),
              (o.onkeydown = function (r) {
                ie(e, r) || me(r, n) || ue(e, t, r, l);
              });
            var s = document.createElement("span");
            s.setAttribute("aria-label", window.VditorI18n.linkRef),
              (s.className = "vditor-tooltipped vditor-tooltipped__n");
            var l = document.createElement("input");
            s.appendChild(l),
              (l.className = "vditor-input"),
              l.setAttribute("placeholder", window.VditorI18n.linkRef),
              (l.value = t.getAttribute("data-link-label")),
              (l.oninput = function () {
                r();
              }),
              (l.onkeydown = function (r) {
                ie(e, r) || me(r, n) || ue(e, t, r, o);
              }),
              de(t, e),
              e.wysiwyg.popover.insertAdjacentElement("beforeend", i),
              e.wysiwyg.popover.insertAdjacentElement("beforeend", s),
              ae(e, t);
          },
          le = function (e, t, n) {
            var r = t.previousElementSibling;
            if (
              r &&
              (t.parentElement.isEqualNode(n.wysiwyg.element) ||
                "LI" === t.tagName)
            ) {
              var i = document.createElement("button");
              i.setAttribute("type", "button"),
                i.setAttribute("data-type", "up"),
                i.setAttribute(
                  "aria-label",
                  window.VditorI18n.up + "<" + (0, c.ns)("⇧⌘U") + ">"
                ),
                (i.innerHTML =
                  '<svg><use xlink:href="#vditor-icon-up"></use></svg>'),
                (i.className =
                  "vditor-icon vditor-tooltipped vditor-tooltipped__n"),
                (i.onclick = function () {
                  e.insertNode(document.createElement("wbr")),
                    r.insertAdjacentElement("beforebegin", t),
                    (0, N.ib)(n.wysiwyg.element, e),
                    X(n),
                    oe(n),
                    Me(n);
                }),
                n.wysiwyg.popover.insertAdjacentElement("beforeend", i);
            }
          },
          ce = function (e, t, n) {
            var r = t.nextElementSibling;
            if (
              r &&
              (t.parentElement.isEqualNode(n.wysiwyg.element) ||
                "LI" === t.tagName)
            ) {
              var i = document.createElement("button");
              i.setAttribute("type", "button"),
                i.setAttribute("data-type", "down"),
                i.setAttribute(
                  "aria-label",
                  window.VditorI18n.down + "<" + (0, c.ns)("⇧⌘D") + ">"
                ),
                (i.innerHTML =
                  '<svg><use xlink:href="#vditor-icon-down"></use></svg>'),
                (i.className =
                  "vditor-icon vditor-tooltipped vditor-tooltipped__n"),
                (i.onclick = function () {
                  e.insertNode(document.createElement("wbr")),
                    r.insertAdjacentElement("afterend", t),
                    (0, N.ib)(n.wysiwyg.element, e),
                    X(n),
                    oe(n),
                    Me(n);
                }),
                n.wysiwyg.popover.insertAdjacentElement("beforeend", i);
            }
          },
          de = function (e, t) {
            var n = document.createElement("button");
            n.setAttribute("type", "button"),
              n.setAttribute("data-type", "remove"),
              n.setAttribute(
                "aria-label",
                window.VditorI18n.remove + "<" + (0, c.ns)("⇧⌘X") + ">"
              ),
              (n.innerHTML =
                '<svg><use xlink:href="#vditor-icon-trashcan"></use></svg>'),
              (n.className =
                "vditor-icon vditor-tooltipped vditor-tooltipped__n"),
              (n.onclick = function () {
                var n = (0, N.zh)(t);
                n.setStartAfter(e),
                  (0, N.Hc)(n),
                  e.remove(),
                  X(t),
                  oe(t),
                  ["H1", "H2", "H3", "H4", "H5", "H6"].includes(e.tagName) &&
                    j(t);
              }),
              t.wysiwyg.popover.insertAdjacentElement("beforeend", n);
          },
          ue = function (e, t, n, r) {
            if (!n.isComposing) {
              if ("Tab" === n.key)
                return r.focus(), r.select(), void n.preventDefault();
              if (
                !(0, c.yl)(n) &&
                !n.shiftKey &&
                n.altKey &&
                "Enter" === n.key
              ) {
                var o = (0, N.zh)(e);
                t.insertAdjacentHTML("afterend", i.g.ZWSP),
                  o.setStartAfter(t.nextSibling),
                  o.collapse(!0),
                  (0, N.Hc)(o),
                  n.preventDefault();
              }
            }
          },
          pe = function (e, t, n) {
            e.wysiwyg.popover.innerHTML = "";
            var r = function () {
              "" !== o.value.trim() && (t.innerHTML = o.value),
                t.setAttribute("href", s.value),
                t.setAttribute("title", c.value),
                X(e);
            };
            t.querySelectorAll("[data-marker]").forEach(function (e) {
              e.removeAttribute("data-marker");
            });
            var i = document.createElement("span");
            i.setAttribute("aria-label", window.VditorI18n.textIsNotEmpty),
              (i.className = "vditor-tooltipped vditor-tooltipped__n");
            var o = document.createElement("input");
            i.appendChild(o),
              (o.className = "vditor-input"),
              o.setAttribute("placeholder", window.VditorI18n.textIsNotEmpty),
              (o.style.width = "120px"),
              (o.value = t.innerHTML || ""),
              (o.oninput = function () {
                r();
              }),
              (o.onkeydown = function (r) {
                ie(e, r) || me(r, n) || ue(e, t, r, s);
              });
            var a = document.createElement("span");
            a.setAttribute("aria-label", window.VditorI18n.link),
              (a.className = "vditor-tooltipped vditor-tooltipped__n");
            var s = document.createElement("input");
            a.appendChild(s),
              (s.className = "vditor-input"),
              s.setAttribute("placeholder", window.VditorI18n.link),
              (s.value = t.getAttribute("href") || ""),
              (s.oninput = function () {
                r();
              }),
              (s.onkeydown = function (r) {
                ie(e, r) || me(r, n) || ue(e, t, r, c);
              });
            var l = document.createElement("span");
            l.setAttribute("aria-label", window.VditorI18n.tooltipText),
              (l.className = "vditor-tooltipped vditor-tooltipped__n");
            var c = document.createElement("input");
            l.appendChild(c),
              (c.className = "vditor-input"),
              c.setAttribute("placeholder", window.VditorI18n.tooltipText),
              (c.style.width = "60px"),
              (c.value = t.getAttribute("title") || ""),
              (c.oninput = function () {
                r();
              }),
              (c.onkeydown = function (r) {
                ie(e, r) || me(r, n) || ue(e, t, r, o);
              }),
              de(t, e),
              e.wysiwyg.popover.insertAdjacentElement("beforeend", i),
              e.wysiwyg.popover.insertAdjacentElement("beforeend", a),
              e.wysiwyg.popover.insertAdjacentElement("beforeend", l),
              ae(e, t);
          },
          me = function (e, t) {
            if (
              (!(0, c.yl)(e) && !e.shiftKey && "Enter" === e.key) ||
              "Escape" === e.key
            )
              return (
                t && (0, N.Hc)(t), e.preventDefault(), e.stopPropagation(), !0
              );
          },
          fe = function (e) {
            "wysiwyg" === e.currentMode
              ? oe(e)
              : "ir" === e.currentMode && J(e);
          },
          he = function (e, t, n) {
            void 0 === n &&
              (n = { enableAddUndoStack: !0, enableHint: !1, enableInput: !0 });
            var r = e.wysiwyg.element;
            (r.innerHTML = e.lute.Md2VditorDOM(t)),
              r
                .querySelectorAll(".vditor-wysiwyg__preview[data-render='2']")
                .forEach(function (t) {
                  H(t, e),
                    t.previousElementSibling.setAttribute(
                      "style",
                      "display:none"
                    );
                }),
              X(e, n);
          },
          ge = function (e, t, n) {
            for (
              var r = e.startContainer.parentElement,
                o = !1,
                a = "",
                s = "",
                l = (function (e) {
                  var t = Q(e.startContainer),
                    n = Y(e.startContainer),
                    r = e.startContainer.textContent,
                    o = e.startOffset,
                    a = "",
                    s = "";
                  return (
                    (("" !== r.substr(0, o) && r.substr(0, o) !== i.g.ZWSP) ||
                      t) &&
                      (a = "".concat(t).concat(r.substr(0, o))),
                    (("" !== r.substr(o) && r.substr(o) !== i.g.ZWSP) || n) &&
                      (s = "".concat(r.substr(o)).concat(n)),
                    { afterHTML: s, beforeHTML: a }
                  );
                })(e),
                c = l.beforeHTML,
                d = l.afterHTML;
              r && !o;

            ) {
              var u = r.tagName;
              if (
                ("STRIKE" === u && (u = "S"),
                "I" === u && (u = "EM"),
                "B" === u && (u = "STRONG"),
                "S" === u || "STRONG" === u || "EM" === u)
              ) {
                var p = "",
                  m = "",
                  f = "";
                "0" !== r.parentElement.getAttribute("data-block") &&
                  ((m = Q(r)), (f = Y(r))),
                  (c || m) &&
                    (c = p =
                      ""
                        .concat(m, "<")
                        .concat(u, ">")
                        .concat(c, "</")
                        .concat(u, ">")),
                  (("bold" === n && "STRONG" === u) ||
                    ("italic" === n && "EM" === u) ||
                    ("strikeThrough" === n && "S" === u)) &&
                    ((p += "".concat(a).concat(i.g.ZWSP, "<wbr>").concat(s)),
                    (o = !0)),
                  (d || f) &&
                    (p += d =
                      "<"
                        .concat(u, ">")
                        .concat(d, "</")
                        .concat(u, ">")
                        .concat(f)),
                  "0" !== r.parentElement.getAttribute("data-block")
                    ? ((r = r.parentElement).innerHTML = p)
                    : ((r.outerHTML = p), (r = r.parentElement)),
                  (a = "<".concat(u, ">") + a),
                  (s = "</".concat(u, ">") + s);
              } else o = !0;
            }
            (0, N.ib)(t.wysiwyg.element, e);
          },
          ve = function (e, t) {
            var n,
              r = this;
            (this.element = document.createElement("div")),
              t.className &&
                (n = this.element.classList).add.apply(
                  n,
                  t.className.split(" ")
                );
            var o = t.hotkey ? " <".concat((0, c.ns)(t.hotkey), ">") : "";
            2 === t.level &&
              (o = t.hotkey ? " &lt;".concat((0, c.ns)(t.hotkey), "&gt;") : "");
            var a = t.tip
                ? t.tip + o
                : "".concat(window.VditorI18n[t.name]).concat(o),
              s = "upload" === t.name ? "div" : "button";
            if (2 === t.level)
              this.element.innerHTML = "<"
                .concat(s, ' data-type="')
                .concat(t.name, '">')
                .concat(a, "</")
                .concat(s, ">");
            else {
              this.element.classList.add("vditor-toolbar__item");
              var l = document.createElement(s);
              l.setAttribute("data-type", t.name),
                (l.className = "vditor-tooltipped vditor-tooltipped__".concat(
                  t.tipPosition
                )),
                l.setAttribute("aria-label", a),
                (l.innerHTML = t.icon),
                this.element.appendChild(l);
            }
            t.prefix &&
              this.element.children[0].addEventListener(
                (0, c.Le)(),
                function (n) {
                  n.preventDefault(),
                    r.element.firstElementChild.classList.contains(
                      i.g.CLASS_MENU_DISABLED
                    ) ||
                      ("wysiwyg" === e.currentMode
                        ? (function (e, t, n) {
                            if (
                              !(
                                e.wysiwyg.composingLock &&
                                n instanceof CustomEvent
                              )
                            ) {
                              var r = !0,
                                o = !0;
                              e.wysiwyg.element.querySelector("wbr") &&
                                e.wysiwyg.element.querySelector("wbr").remove();
                              var a = (0, N.zh)(e),
                                s = t.getAttribute("data-type");
                              if (t.classList.contains("vditor-menu--current"))
                                if (
                                  ("strike" === s && (s = "strikeThrough"),
                                  "quote" === s)
                                ) {
                                  var l = (0, b.lG)(
                                    a.startContainer,
                                    "BLOCKQUOTE"
                                  );
                                  l ||
                                    (l =
                                      a.startContainer.childNodes[
                                        a.startOffset
                                      ]),
                                    l &&
                                      ((r = !1),
                                      t.classList.remove(
                                        "vditor-menu--current"
                                      ),
                                      a.insertNode(
                                        document.createElement("wbr")
                                      ),
                                      (l.outerHTML =
                                        "" === l.innerHTML.trim()
                                          ? '<p data-block="0">'.concat(
                                              l.innerHTML,
                                              "</p>"
                                            )
                                          : l.innerHTML),
                                      (0, N.ib)(e.wysiwyg.element, a));
                                } else if ("inline-code" === s) {
                                  var c = (0, b.lG)(a.startContainer, "CODE");
                                  c ||
                                    (c =
                                      a.startContainer.childNodes[
                                        a.startOffset
                                      ]),
                                    c &&
                                      ((c.outerHTML =
                                        c.innerHTML.replace(i.g.ZWSP, "") +
                                        "<wbr>"),
                                      (0, N.ib)(e.wysiwyg.element, a));
                                } else
                                  "link" === s
                                    ? a.collapsed
                                      ? (a.selectNode(
                                          a.startContainer.parentElement
                                        ),
                                        document.execCommand("unlink", !1, ""))
                                      : document.execCommand("unlink", !1, "")
                                    : "check" === s ||
                                      "list" === s ||
                                      "ordered-list" === s
                                    ? (nt(e, a, s),
                                      (0, N.ib)(e.wysiwyg.element, a),
                                      (r = !1),
                                      t.classList.remove(
                                        "vditor-menu--current"
                                      ))
                                    : ((r = !1),
                                      t.classList.remove(
                                        "vditor-menu--current"
                                      ),
                                      "" === a.toString()
                                        ? ge(a, e, s)
                                        : document.execCommand(s, !1, ""));
                              else {
                                0 === e.wysiwyg.element.childNodes.length &&
                                  ((e.wysiwyg.element.innerHTML =
                                    '<p data-block="0"><wbr></p>'),
                                  (0, N.ib)(e.wysiwyg.element, a));
                                var u = (0, b.F9)(a.startContainer);
                                if ("quote" === s) {
                                  if (
                                    (u ||
                                      (u =
                                        a.startContainer.childNodes[
                                          a.startOffset
                                        ]),
                                    u)
                                  ) {
                                    (r = !1),
                                      t.classList.add("vditor-menu--current"),
                                      a.insertNode(
                                        document.createElement("wbr")
                                      );
                                    var p = (0, b.lG)(a.startContainer, "LI");
                                    p && u.contains(p)
                                      ? (p.innerHTML =
                                          '<blockquote data-block="0">'.concat(
                                            p.innerHTML,
                                            "</blockquote>"
                                          ))
                                      : (u.outerHTML =
                                          '<blockquote data-block="0">'.concat(
                                            u.outerHTML,
                                            "</blockquote>"
                                          )),
                                      (0, N.ib)(e.wysiwyg.element, a);
                                  }
                                } else if (
                                  "check" === s ||
                                  "list" === s ||
                                  "ordered-list" === s
                                )
                                  nt(e, a, s, !1),
                                    (0, N.ib)(e.wysiwyg.element, a),
                                    (r = !1),
                                    d(e.toolbar.elements, [
                                      "check",
                                      "list",
                                      "ordered-list",
                                    ]),
                                    t.classList.add("vditor-menu--current");
                                else if ("inline-code" === s) {
                                  if ("" === a.toString())
                                    ((m =
                                      document.createElement(
                                        "code"
                                      )).textContent = i.g.ZWSP),
                                      a.insertNode(m),
                                      a.setStart(m.firstChild, 1),
                                      a.collapse(!0),
                                      (0, N.Hc)(a);
                                  else if (3 === a.startContainer.nodeType) {
                                    var m = document.createElement("code");
                                    a.surroundContents(m),
                                      a.insertNode(m),
                                      (0, N.Hc)(a);
                                  }
                                  t.classList.add("vditor-menu--current");
                                } else if ("code" === s)
                                  ((m =
                                    document.createElement("div")).className =
                                    "vditor-wysiwyg__block"),
                                    m.setAttribute("data-type", "code-block"),
                                    m.setAttribute("data-block", "0"),
                                    m.setAttribute("data-marker", "```"),
                                    "" === a.toString()
                                      ? (m.innerHTML =
                                          "<pre><code><wbr>\n</code></pre>")
                                      : ((m.innerHTML = "<pre><code>".concat(
                                          a.toString(),
                                          "<wbr></code></pre>"
                                        )),
                                        a.deleteContents()),
                                    a.insertNode(m),
                                    u &&
                                      (u.outerHTML = e.lute.SpinVditorDOM(
                                        u.outerHTML
                                      )),
                                    (0, N.ib)(e.wysiwyg.element, a),
                                    e.wysiwyg.element
                                      .querySelectorAll(
                                        ".vditor-wysiwyg__preview[data-render='2']"
                                      )
                                      .forEach(function (t) {
                                        H(t, e);
                                      }),
                                    t.classList.add("vditor-menu--disabled");
                                else if ("link" === s) {
                                  if ("" === a.toString()) {
                                    var f = document.createElement("a");
                                    (f.innerText = i.g.ZWSP),
                                      a.insertNode(f),
                                      a.setStart(f.firstChild, 1),
                                      a.collapse(!0),
                                      pe(e, f, a);
                                    var h =
                                      e.wysiwyg.popover.querySelector("input");
                                    (h.value = ""), h.focus(), (o = !1);
                                  } else {
                                    (m =
                                      document.createElement("a")).setAttribute(
                                      "href",
                                      ""
                                    ),
                                      (m.innerHTML = a.toString()),
                                      a.surroundContents(m),
                                      a.insertNode(m),
                                      (0, N.Hc)(a),
                                      pe(e, m, a);
                                    var g =
                                      e.wysiwyg.popover.querySelectorAll(
                                        "input"
                                      );
                                    (g[0].value = m.innerText), g[1].focus();
                                  }
                                  (r = !1),
                                    t.classList.add("vditor-menu--current");
                                } else if ("table" === s) {
                                  var v =
                                    '<table data-block="0"><thead><tr><th>col1<wbr></th><th>col2</th><th>col3</th></tr></thead><tbody><tr><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td></tr></tbody></table>';
                                  if ("" === a.toString().trim())
                                    u &&
                                    "" ===
                                      u.innerHTML.trim().replace(i.g.ZWSP, "")
                                      ? (u.outerHTML = v)
                                      : document.execCommand(
                                          "insertHTML",
                                          !1,
                                          v
                                        ),
                                      a.selectNode(
                                        e.wysiwyg.element.querySelector("wbr")
                                          .previousSibling
                                      ),
                                      e.wysiwyg.element
                                        .querySelector("wbr")
                                        .remove(),
                                      (0, N.Hc)(a);
                                  else {
                                    v = '<table data-block="0"><thead><tr>';
                                    var y = a.toString().split("\n"),
                                      w =
                                        y[0].split(",").length >
                                        y[0].split("\t").length
                                          ? ","
                                          : "\t";
                                    y.forEach(function (e, t) {
                                      0 === t
                                        ? (e.split(w).forEach(function (e, t) {
                                            v += "<th>".concat(
                                              e,
                                              0 === t ? "<wbr></th>" : "</th>"
                                            );
                                          }),
                                          (v += "</tr></thead>"))
                                        : ((v +=
                                            1 === t ? "<tbody><tr>" : "<tr>"),
                                          e.split(w).forEach(function (e) {
                                            v += "<td>".concat(e, "</td>");
                                          }),
                                          (v += "</tr>"));
                                    }),
                                      (v += "</tbody></table>"),
                                      document.execCommand("insertHTML", !1, v),
                                      (0, N.ib)(e.wysiwyg.element, a);
                                  }
                                  (r = !1),
                                    t.classList.add("vditor-menu--disabled");
                                } else if ("line" === s) {
                                  if (u) {
                                    var _ =
                                      '<hr data-block="0"><p data-block="0"><wbr>\n</p>';
                                    "" === u.innerHTML.trim()
                                      ? (u.outerHTML = _)
                                      : u.insertAdjacentHTML("afterend", _),
                                      (0, N.ib)(e.wysiwyg.element, a);
                                  }
                                } else if (
                                  ((r = !1),
                                  t.classList.add("vditor-menu--current"),
                                  "strike" === s && (s = "strikeThrough"),
                                  "" !== a.toString() ||
                                    ("bold" !== s &&
                                      "italic" !== s &&
                                      "strikeThrough" !== s))
                                )
                                  document.execCommand(s, !1, "");
                                else {
                                  var k = "strong";
                                  "italic" === s
                                    ? (k = "em")
                                    : "strikeThrough" === s && (k = "s"),
                                    ((m =
                                      document.createElement(k)).textContent =
                                      i.g.ZWSP),
                                    a.insertNode(m),
                                    m.previousSibling &&
                                      m.previousSibling.textContent ===
                                        i.g.ZWSP &&
                                      (m.previousSibling.textContent = ""),
                                    a.setStart(m.firstChild, 1),
                                    a.collapse(!0),
                                    (0, N.Hc)(a);
                                }
                              }
                              r && oe(e), o && X(e);
                            }
                          })(e, r.element.children[0], n)
                        : "ir" === e.currentMode
                        ? Tt(
                            e,
                            r.element.children[0],
                            t.prefix || "",
                            t.suffix || ""
                          )
                        : Ie(
                            e,
                            r.element.children[0],
                            t.prefix || "",
                            t.suffix || ""
                          ));
                }
              );
          },
          be =
            ((F = function (e, t) {
              return (
                (F =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                F(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = e;
              }
              F(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            }),
          ye = function (e, t, n) {
            var r;
            if (
              ("string" != typeof n
                ? (g(e, ["subToolbar", "hint"]), n.preventDefault(), (r = a(e)))
                : (r = n),
              e.currentMode !== t || "string" == typeof n)
            ) {
              if (
                (e.devtools && e.devtools.renderEchart(e),
                "both" === e.options.preview.mode && "sv" === t
                  ? (e.preview.element.style.display = "block")
                  : (e.preview.element.style.display = "none"),
                p(e.toolbar.elements, i.g.EDIT_TOOLBARS),
                d(e.toolbar.elements, i.g.EDIT_TOOLBARS),
                m(e.toolbar.elements, ["outdent", "indent"]),
                "ir" === t)
              )
                f(e.toolbar.elements, ["both"]),
                  h(e.toolbar.elements, [
                    "outdent",
                    "indent",
                    "outline",
                    "insert-before",
                    "insert-after",
                  ]),
                  (e.sv.element.style.display = "none"),
                  (e.wysiwyg.element.parentElement.style.display = "none"),
                  (e.ir.element.parentElement.style.display = "block"),
                  e.lute.SetVditorIR(!0),
                  e.lute.SetVditorWYSIWYG(!1),
                  e.lute.SetVditorSV(!1),
                  (e.currentMode = "ir"),
                  (e.ir.element.innerHTML = e.lute.Md2VditorIRDOM(r)),
                  Ct(e, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1,
                  }),
                  W(e),
                  e.ir.element
                    .querySelectorAll(".vditor-ir__preview[data-render='2']")
                    .forEach(function (t) {
                      H(t, e);
                    }),
                  e.ir.element
                    .querySelectorAll(".vditor-toc")
                    .forEach(function (t) {
                      (0,
                      C.H)(t, { cdn: e.options.cdn, math: e.options.preview.math });
                    });
              else if ("wysiwyg" === t)
                f(e.toolbar.elements, ["both"]),
                  h(e.toolbar.elements, [
                    "outdent",
                    "indent",
                    "outline",
                    "insert-before",
                    "insert-after",
                  ]),
                  (e.sv.element.style.display = "none"),
                  (e.wysiwyg.element.parentElement.style.display = "block"),
                  (e.ir.element.parentElement.style.display = "none"),
                  e.lute.SetVditorIR(!1),
                  e.lute.SetVditorWYSIWYG(!0),
                  e.lute.SetVditorSV(!1),
                  (e.currentMode = "wysiwyg"),
                  W(e),
                  he(e, r, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1,
                  }),
                  e.wysiwyg.element
                    .querySelectorAll(".vditor-toc")
                    .forEach(function (t) {
                      (0,
                      C.H)(t, { cdn: e.options.cdn, math: e.options.preview.math });
                    }),
                  (e.wysiwyg.popover.style.display = "none");
              else if ("sv" === t) {
                h(e.toolbar.elements, ["both"]),
                  f(e.toolbar.elements, [
                    "outdent",
                    "indent",
                    "outline",
                    "insert-before",
                    "insert-after",
                  ]),
                  (e.wysiwyg.element.parentElement.style.display = "none"),
                  (e.ir.element.parentElement.style.display = "none"),
                  ("both" === e.options.preview.mode ||
                    "editor" === e.options.preview.mode) &&
                    (e.sv.element.style.display = "block"),
                  e.lute.SetVditorIR(!1),
                  e.lute.SetVditorWYSIWYG(!1),
                  e.lute.SetVditorSV(!0),
                  (e.currentMode = "sv");
                var o = je(r, e);
                "<div data-block='0'></div>" === o && (o = ""),
                  (e.sv.element.innerHTML = o),
                  z(e.sv.element),
                  De(e, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1,
                  }),
                  W(e);
              }
              e.undo.resetIcon(e),
                "string" != typeof n &&
                  (e[e.currentMode].element.focus(), fe(e)),
                j(e),
                G(e),
                e.toolbar.elements["edit-mode"] &&
                  (e.toolbar.elements["edit-mode"]
                    .querySelectorAll("button")
                    .forEach(function (e) {
                      e.classList.remove("vditor-menu--current");
                    }),
                  e.toolbar.elements["edit-mode"]
                    .querySelector(
                      'button[data-mode="'.concat(e.currentMode, '"]')
                    )
                    .classList.add("vditor-menu--current")),
                e.outline.toggle(
                  e,
                  "sv" !== e.currentMode && e.options.outline.enable,
                  "string" != typeof n
                );
            }
          },
          we = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this,
                i = document.createElement("div");
              return (
                (i.className = "vditor-hint".concat(
                  2 === n.level ? "" : " vditor-panel--arrow"
                )),
                (i.innerHTML = '<button data-mode="wysiwyg">'
                  .concat(window.VditorI18n.wysiwyg, " &lt;")
                  .concat(
                    (0, c.ns)("⌥⌘7"),
                    '></button>\n<button data-mode="ir">'
                  )
                  .concat(window.VditorI18n.instantRendering, " &lt;")
                  .concat(
                    (0, c.ns)("⌥⌘8"),
                    '></button>\n<button data-mode="sv">'
                  )
                  .concat(window.VditorI18n.splitView, " &lt;")
                  .concat((0, c.ns)("⌥⌘9"), "></button>")),
                r.element.appendChild(i),
                r._bindEvent(t, i, n),
                r
              );
            }
            return (
              be(t, e),
              (t.prototype._bindEvent = function (e, t, n) {
                var r = this.element.children[0];
                v(e, t, r, n.level),
                  t.children
                    .item(0)
                    .addEventListener((0, c.Le)(), function (t) {
                      ye(e, "wysiwyg", t),
                        t.preventDefault(),
                        t.stopPropagation();
                    }),
                  t.children
                    .item(1)
                    .addEventListener((0, c.Le)(), function (t) {
                      ye(e, "ir", t), t.preventDefault(), t.stopPropagation();
                    }),
                  t.children
                    .item(2)
                    .addEventListener((0, c.Le)(), function (t) {
                      ye(e, "sv", t), t.preventDefault(), t.stopPropagation();
                    });
              }),
              t
            );
          })(ve),
          _e = function (e, t) {
            return (0, N.Gb)(e, t) ? getSelection().toString() : "";
          },
          ke = function (e, t) {
            t.addEventListener("focus", function () {
              e.options.focus && e.options.focus(a(e)),
                g(e, ["subToolbar", "hint"]);
            });
          },
          Ee = function (e, t) {
            t.addEventListener("dblclick", function (t) {
              "IMG" === t.target.tagName &&
                (e.options.image.preview
                  ? e.options.image.preview(t.target)
                  : e.options.image.isPreview &&
                    (0, B.E)(t.target, e.options.lang, e.options.theme));
            });
          },
          Se = function (e, t) {
            t.addEventListener("blur", function (t) {
              if ("ir" === e.currentMode) {
                var n = e.ir.element.querySelector(".vditor-ir__node--expand");
                n && n.classList.remove("vditor-ir__node--expand");
              } else "wysiwyg" !== e.currentMode || e.wysiwyg.selectPopover.contains(t.relatedTarget) || e.wysiwyg.hideComment();
              (e[e.currentMode].range = (0, N.zh)(e)),
                e.options.blur && e.options.blur(a(e));
            });
          },
          Le = function (e, t) {
            t.addEventListener("dragstart", function (e) {
              e.dataTransfer.setData(i.g.DROP_EDITOR, i.g.DROP_EDITOR);
            }),
              t.addEventListener("drop", function (t) {
                t.dataTransfer.getData(i.g.DROP_EDITOR)
                  ? lt(e)
                  : (t.dataTransfer.types.includes("Files") ||
                      t.dataTransfer.types.includes("text/html")) &&
                    St(e, t, {
                      pasteCode: function (e) {
                        document.execCommand("insertHTML", !1, e);
                      },
                    });
              });
          },
          Ce = function (e, t, n) {
            t.addEventListener("copy", function (t) {
              return n(t, e);
            });
          },
          xe = function (e, t, n) {
            t.addEventListener("cut", function (t) {
              n(t, e),
                e.options.comment.enable &&
                  "wysiwyg" === e.currentMode &&
                  e.wysiwyg.getComments(e),
                document.execCommand("delete");
            });
          },
          Me = function (e) {
            if (
              ("wysiwyg" === e.currentMode &&
                e.options.comment.enable &&
                e.options.comment.adjustTop(e.wysiwyg.getComments(e, !0)),
              e.options.typewriterMode)
            ) {
              var t = e[e.currentMode].element,
                n = (0, N.Ny)(t).top;
              "auto" !== e.options.height ||
                e.element.classList.contains("vditor--fullscreen") ||
                window.scrollTo(
                  window.scrollX,
                  n +
                    e.element.offsetTop +
                    e.toolbar.element.offsetHeight -
                    window.innerHeight / 2 +
                    10
                ),
                ("auto" !== e.options.height ||
                  e.element.classList.contains("vditor--fullscreen")) &&
                  (t.scrollTop = n + t.scrollTop - t.clientHeight / 2 + 10);
            }
          },
          Te = function (e, t) {
            t.addEventListener("keydown", function (t) {
              if (
                (!t.isComposing && e.options.keydown && e.options.keydown(t),
                !(
                  e.options.hint.extend.length > 1 || e.toolbar.elements.emoji
                ) || !e.hint.select(t, e))
              ) {
                if (
                  (e.options.comment.enable &&
                    "wysiwyg" === e.currentMode &&
                    ("Backspace" === t.key || I("⌘X", t)) &&
                    e.wysiwyg.getComments(e),
                  "sv" === e.currentMode)
                ) {
                  if (
                    (function (e, t) {
                      var n, r, i, o, a;
                      if (((e.sv.composingLock = t.isComposing), t.isComposing))
                        return !1;
                      if (
                        (-1 !== t.key.indexOf("Arrow") ||
                          "Meta" === t.key ||
                          "Control" === t.key ||
                          "Alt" === t.key ||
                          "Shift" === t.key ||
                          "CapsLock" === t.key ||
                          "Escape" === t.key ||
                          /^F\d{1,2}$/.test(t.key) ||
                          e.undo.recordFirstPosition(e, t),
                        "Enter" !== t.key &&
                          "Tab" !== t.key &&
                          "Backspace" !== t.key &&
                          -1 === t.key.indexOf("Arrow") &&
                          !(0, c.yl)(t) &&
                          "Escape" !== t.key)
                      )
                        return !1;
                      var s = (0, N.zh)(e),
                        l = s.startContainer;
                      3 !== s.startContainer.nodeType &&
                        "DIV" === s.startContainer.tagName &&
                        (l = s.startContainer.childNodes[s.startOffset - 1]);
                      var d = (0, b.a1)(l, "data-type", "text"),
                        u = (0, b.a1)(l, "data-type", "blockquote-marker");
                      if (
                        (!u &&
                          0 === s.startOffset &&
                          d &&
                          d.previousElementSibling &&
                          "blockquote-marker" ===
                            d.previousElementSibling.getAttribute(
                              "data-type"
                            ) &&
                          (u = d.previousElementSibling),
                        u &&
                          "Enter" === t.key &&
                          !(0, c.yl)(t) &&
                          !t.altKey &&
                          "" === u.nextElementSibling.textContent.trim() &&
                          (0, N.im)(u, e.sv.element, s).start ===
                            u.textContent.length)
                      )
                        return (
                          "padding" ===
                            (null === (n = u.previousElementSibling) ||
                            void 0 === n
                              ? void 0
                              : n.getAttribute("data-type")) &&
                            u.previousElementSibling.setAttribute(
                              "data-action",
                              "enter-remove"
                            ),
                          u.remove(),
                          De(e),
                          t.preventDefault(),
                          !0
                        );
                      var p = (0, b.a1)(l, "data-type", "li-marker"),
                        m = (0, b.a1)(l, "data-type", "task-marker"),
                        f = p;
                      if (
                        (f ||
                          (m &&
                            "task-marker" !==
                              m.nextElementSibling.getAttribute("data-type") &&
                            (f = m)),
                        f ||
                          0 !== s.startOffset ||
                          !d ||
                          !d.previousElementSibling ||
                          ("li-marker" !==
                            d.previousElementSibling.getAttribute(
                              "data-type"
                            ) &&
                            "task-marker" !==
                              d.previousElementSibling.getAttribute(
                                "data-type"
                              )) ||
                          (f = d.previousElementSibling),
                        f)
                      ) {
                        var h = (0, N.im)(f, e.sv.element, s).start,
                          g = "task-marker" === f.getAttribute("data-type"),
                          v = f;
                        if (
                          (g &&
                            (v =
                              f.previousElementSibling.previousElementSibling
                                .previousElementSibling),
                          h === f.textContent.length)
                        ) {
                          if (
                            "Enter" === t.key &&
                            !(0, c.yl)(t) &&
                            !t.altKey &&
                            !t.shiftKey &&
                            "" === f.nextElementSibling.textContent.trim()
                          )
                            return (
                              "padding" ===
                              (null === (r = v.previousElementSibling) ||
                              void 0 === r
                                ? void 0
                                : r.getAttribute("data-type"))
                                ? (v.previousElementSibling.remove(), q(e))
                                : (g &&
                                    (v.remove(),
                                    f.previousElementSibling.previousElementSibling.remove(),
                                    f.previousElementSibling.remove()),
                                  f.nextElementSibling.remove(),
                                  f.remove(),
                                  De(e)),
                              t.preventDefault(),
                              !0
                            );
                          if ("Tab" === t.key)
                            return (
                              t.shiftKey
                                ? "padding" ===
                                    v.previousElementSibling.getAttribute(
                                      "data-type"
                                    ) && v.previousElementSibling.remove()
                                : v.insertAdjacentHTML(
                                    "beforebegin",
                                    '<span data-type="padding">'.concat(
                                      v.textContent.replace(/\S/g, " "),
                                      "</span>"
                                    )
                                  ),
                              /^\d/.test(v.textContent) &&
                                ((v.textContent = v.textContent.replace(
                                  /^\d{1,}/,
                                  "1"
                                )),
                                s.selectNodeContents(f.firstChild),
                                s.collapse(!1)),
                              q(e),
                              t.preventDefault(),
                              !0
                            );
                        }
                      }
                      if (dt(e, s, t)) return !0;
                      var w = (0, b.a1)(l, "data-block", "0"),
                        _ = (0, y.S)(l, "SPAN");
                      if (
                        "Enter" === t.key &&
                        !(0, c.yl)(t) &&
                        !t.altKey &&
                        !t.shiftKey &&
                        w
                      ) {
                        var k = !1,
                          E = w.textContent.match(/^\n+/);
                        (0, N.im)(w, e.sv.element).start <=
                          (E ? E[0].length : 0) && (k = !0);
                        var S = "\n";
                        if (_) {
                          if (
                            "enter-remove" ===
                            (null === (i = _.previousElementSibling) ||
                            void 0 === i
                              ? void 0
                              : i.getAttribute("data-action"))
                          )
                            return (
                              _.previousElementSibling.remove(),
                              De(e),
                              t.preventDefault(),
                              !0
                            );
                          S += Oe(_);
                        }
                        return (
                          s.insertNode(document.createTextNode(S)),
                          s.collapse(!1),
                          w && "" !== w.textContent.trim() && !k ? q(e) : De(e),
                          t.preventDefault(),
                          !0
                        );
                      }
                      if (
                        "Backspace" === t.key &&
                        !(0, c.yl)(t) &&
                        !t.altKey &&
                        !t.shiftKey
                      ) {
                        if (
                          _ &&
                          "newline" ===
                            (null === (o = _.previousElementSibling) ||
                            void 0 === o
                              ? void 0
                              : o.getAttribute("data-type")) &&
                          1 === (0, N.im)(_, e.sv.element, s).start &&
                          -1 ===
                            _.getAttribute("data-type").indexOf("code-block-")
                        )
                          return (
                            s.setStart(_, 0),
                            s.extractContents(),
                            "" !== _.textContent.trim() ? q(e) : De(e),
                            t.preventDefault(),
                            !0
                          );
                        if (
                          w &&
                          0 === (0, N.im)(w, e.sv.element, s).start &&
                          w.previousElementSibling
                        ) {
                          s.extractContents();
                          var L = w.previousElementSibling.lastElementChild;
                          return (
                            "newline" === L.getAttribute("data-type") &&
                              (L.remove(),
                              (L = w.previousElementSibling.lastElementChild)),
                            "newline" !== L.getAttribute("data-type") &&
                              (L.insertAdjacentHTML("afterend", w.innerHTML),
                              w.remove()),
                            "" === w.textContent.trim() ||
                            (null === (a = w.previousElementSibling) ||
                            void 0 === a
                              ? void 0
                              : a.querySelector(
                                  '[data-type="code-block-open-marker"]'
                                ))
                              ? ("newline" !== L.getAttribute("data-type") &&
                                  (s.selectNodeContents(L.lastChild),
                                  s.collapse(!1)),
                                De(e))
                              : q(e),
                            t.preventDefault(),
                            !0
                          );
                        }
                      }
                      return !1;
                    })(e, t)
                  )
                    return;
                } else if ("wysiwyg" === e.currentMode) {
                  if (
                    (function (e, t) {
                      if (
                        ((e.wysiwyg.composingLock = t.isComposing),
                        t.isComposing)
                      )
                        return !1;
                      -1 !== t.key.indexOf("Arrow") ||
                        "Meta" === t.key ||
                        "Control" === t.key ||
                        "Alt" === t.key ||
                        "Shift" === t.key ||
                        "CapsLock" === t.key ||
                        "Escape" === t.key ||
                        /^F\d{1,2}$/.test(t.key) ||
                        e.undo.recordFirstPosition(e, t);
                      var n = (0, N.zh)(e),
                        r = n.startContainer;
                      if (!Fe(t, e, r)) return !1;
                      if (
                        ($e(n, e, t),
                        kt(n),
                        "Enter" !== t.key &&
                          "Tab" !== t.key &&
                          "Backspace" !== t.key &&
                          -1 === t.key.indexOf("Arrow") &&
                          !(0, c.yl)(t) &&
                          "Escape" !== t.key &&
                          "Delete" !== t.key)
                      )
                        return !1;
                      var o = (0, b.F9)(r),
                        a = (0, b.lG)(r, "P");
                      if (ut(t, e, a, n)) return !0;
                      if (ct(n, e, a, t)) return !0;
                      if (vt(e, t, n)) return !0;
                      var s = (0, b.fb)(r, "vditor-wysiwyg__block");
                      if (s) {
                        if ("Escape" === t.key && 2 === s.children.length)
                          return (
                            (e.wysiwyg.popover.style.display = "none"),
                            (s.firstElementChild.style.display = "none"),
                            e.wysiwyg.element.blur(),
                            t.preventDefault(),
                            !0
                          );
                        if (
                          !(0, c.yl)(t) &&
                          !t.shiftKey &&
                          t.altKey &&
                          "Enter" === t.key &&
                          "code-block" === s.getAttribute("data-type")
                        ) {
                          var l =
                            e.wysiwyg.popover.querySelector(".vditor-input");
                          return l.focus(), l.select(), t.preventDefault(), !0;
                        }
                        if ("0" === s.getAttribute("data-block")) {
                          if (bt(e, t, s.firstElementChild, n)) return !0;
                          if (et(e, t, n, s.firstElementChild, s)) return !0;
                          if (
                            "yaml-front-matter" !==
                              s.getAttribute("data-type") &&
                            tt(e, t, n, s.firstElementChild, s)
                          )
                            return !0;
                        }
                      }
                      if (yt(e, n, t, a)) return !0;
                      var d = (0, b.E2)(r, "BLOCKQUOTE");
                      if (d && !t.shiftKey && t.altKey && "Enter" === t.key) {
                        (0, c.yl)(t) ? n.setStartBefore(d) : n.setStartAfter(d),
                          (0, N.Hc)(n);
                        var u = document.createElement("p");
                        return (
                          u.setAttribute("data-block", "0"),
                          (u.innerHTML = "\n"),
                          n.insertNode(u),
                          n.collapse(!0),
                          (0, N.Hc)(n),
                          X(e),
                          Me(e),
                          t.preventDefault(),
                          !0
                        );
                      }
                      var p,
                        m = (0, y.W)(r);
                      if (m) {
                        if (
                          "H6" === m.tagName &&
                          r.textContent.length === n.startOffset &&
                          !(0, c.yl)(t) &&
                          !t.shiftKey &&
                          !t.altKey &&
                          "Enter" === t.key
                        ) {
                          var f = document.createElement("p");
                          return (
                            (f.textContent = "\n"),
                            f.setAttribute("data-block", "0"),
                            r.parentElement.insertAdjacentElement(
                              "afterend",
                              f
                            ),
                            n.setStart(f, 0),
                            (0, N.Hc)(n),
                            X(e),
                            Me(e),
                            t.preventDefault(),
                            !0
                          );
                        }
                        var h;
                        if (I("⌘=", t))
                          return (
                            (h = parseInt(m.tagName.substr(1), 10) - 1) > 0 &&
                              (te(e, "h".concat(h)), X(e)),
                            t.preventDefault(),
                            !0
                          );
                        if (I("⌘-", t))
                          return (
                            (h = parseInt(m.tagName.substr(1), 10) + 1) < 7 &&
                              (te(e, "h".concat(h)), X(e)),
                            t.preventDefault(),
                            !0
                          );
                        "Backspace" !== t.key ||
                          (0, c.yl)(t) ||
                          t.shiftKey ||
                          t.altKey ||
                          1 !== m.textContent.length ||
                          ne(e);
                      }
                      if (wt(e, n, t)) return !0;
                      if (
                        t.altKey &&
                        "Enter" === t.key &&
                        !(0, c.yl)(t) &&
                        !t.shiftKey
                      ) {
                        var g = (0, b.lG)(r, "A"),
                          v = (0, b.a1)(r, "data-type", "link-ref"),
                          w = (0, b.a1)(r, "data-type", "footnotes-ref");
                        if (g || v || w || (m && 2 === m.tagName.length)) {
                          var _ = e.wysiwyg.popover.querySelector("input");
                          _.focus(), _.select();
                        }
                      }
                      if (ie(e, t)) return !0;
                      if (
                        I("⇧⌘U", t) &&
                        (p =
                          e.wysiwyg.popover.querySelector('[data-type="up"]'))
                      )
                        return p.click(), t.preventDefault(), !0;
                      if (
                        I("⇧⌘D", t) &&
                        (p =
                          e.wysiwyg.popover.querySelector('[data-type="down"]'))
                      )
                        return p.click(), t.preventDefault(), !0;
                      if (dt(e, n, t)) return !0;
                      if (
                        !(0, c.yl)(t) &&
                        t.shiftKey &&
                        !t.altKey &&
                        "Enter" === t.key &&
                        "LI" !== r.parentElement.tagName &&
                        "P" !== r.parentElement.tagName
                      )
                        return (
                          ["STRONG", "STRIKE", "S", "I", "EM", "B"].includes(
                            r.parentElement.tagName
                          )
                            ? n.insertNode(
                                document.createTextNode("\n" + i.g.ZWSP)
                              )
                            : n.insertNode(document.createTextNode("\n")),
                          n.collapse(!1),
                          (0, N.Hc)(n),
                          X(e),
                          Me(e),
                          t.preventDefault(),
                          !0
                        );
                      if (
                        "Backspace" === t.key &&
                        !(0, c.yl)(t) &&
                        !t.shiftKey &&
                        !t.altKey &&
                        "" === n.toString()
                      ) {
                        if (_t(e, n, t, a)) return !0;
                        if (o) {
                          if (
                            o.previousElementSibling &&
                            o.previousElementSibling.classList.contains(
                              "vditor-wysiwyg__block"
                            ) &&
                            "0" ===
                              o.previousElementSibling.getAttribute(
                                "data-block"
                              ) &&
                            "UL" !== o.tagName &&
                            "OL" !== o.tagName
                          ) {
                            var k = (0, N.im)(o, e.wysiwyg.element, n).start;
                            if (
                              (0 === k && 0 === n.startOffset) ||
                              (1 === k && o.innerText.startsWith(i.g.ZWSP))
                            )
                              return (
                                re(
                                  o.previousElementSibling.lastElementChild,
                                  e,
                                  !1
                                ),
                                "" ===
                                  o.innerHTML.trim().replace(i.g.ZWSP, "") &&
                                  (o.remove(), X(e)),
                                t.preventDefault(),
                                !0
                              );
                          }
                          var E = n.startOffset;
                          if (
                            "" === n.toString() &&
                            3 === r.nodeType &&
                            "\n" === r.textContent.charAt(E - 2) &&
                            r.textContent.charAt(E - 1) !== i.g.ZWSP &&
                            ["STRONG", "STRIKE", "S", "I", "EM", "B"].includes(
                              r.parentElement.tagName
                            )
                          )
                            return (
                              (r.textContent =
                                r.textContent.substring(0, E - 1) + i.g.ZWSP),
                              n.setStart(r, E),
                              n.collapse(!0),
                              X(e),
                              t.preventDefault(),
                              !0
                            );
                          r.textContent === i.g.ZWSP &&
                            1 === n.startOffset &&
                            !r.previousSibling &&
                            (function (e) {
                              for (
                                var t = e.startContainer.nextSibling;
                                t && "" === t.textContent;

                              )
                                t = t.nextSibling;
                              return !(
                                !t ||
                                3 === t.nodeType ||
                                ("CODE" !== t.tagName &&
                                  "math-inline" !==
                                    t.getAttribute("data-type") &&
                                  "html-entity" !==
                                    t.getAttribute("data-type") &&
                                  "html-inline" !== t.getAttribute("data-type"))
                              );
                            })(n) &&
                            (r.textContent = ""),
                            o
                              .querySelectorAll(
                                "span.vditor-wysiwyg__block[data-type='math-inline']"
                              )
                              .forEach(function (e) {
                                (e.firstElementChild.style.display = "inline"),
                                  (e.lastElementChild.style.display = "none");
                              }),
                            o
                              .querySelectorAll(
                                "span.vditor-wysiwyg__block[data-type='html-entity']"
                              )
                              .forEach(function (e) {
                                (e.firstElementChild.style.display = "inline"),
                                  (e.lastElementChild.style.display = "none");
                              });
                        }
                      }
                      if (
                        (0, c.vU)() &&
                        1 === n.startOffset &&
                        r.textContent.indexOf(i.g.ZWSP) > -1 &&
                        r.previousSibling &&
                        3 !== r.previousSibling.nodeType &&
                        "CODE" === r.previousSibling.tagName &&
                        ("Backspace" === t.key || "ArrowLeft" === t.key)
                      )
                        return (
                          n.selectNodeContents(r.previousSibling),
                          n.collapse(!1),
                          t.preventDefault(),
                          !0
                        );
                      if (Et(t, o, n)) return t.preventDefault(), !0;
                      if ((Ze(n, t.key), "ArrowDown" === t.key)) {
                        var S = r.nextSibling;
                        S &&
                          3 !== S.nodeType &&
                          "math-inline" === S.getAttribute("data-type") &&
                          n.setStartAfter(S);
                      }
                      return !(!o || !D(o, e, t, n) || (t.preventDefault(), 0));
                    })(e, t)
                  )
                    return;
                } else if (
                  "ir" === e.currentMode &&
                  (function (e, t) {
                    if (((e.ir.composingLock = t.isComposing), t.isComposing))
                      return !1;
                    -1 !== t.key.indexOf("Arrow") ||
                      "Meta" === t.key ||
                      "Control" === t.key ||
                      "Alt" === t.key ||
                      "Shift" === t.key ||
                      "CapsLock" === t.key ||
                      "Escape" === t.key ||
                      /^F\d{1,2}$/.test(t.key) ||
                      e.undo.recordFirstPosition(e, t);
                    var n = (0, N.zh)(e),
                      r = n.startContainer;
                    if (!Fe(t, e, r)) return !1;
                    if (
                      ($e(n, e, t),
                      kt(n),
                      "Enter" !== t.key &&
                        "Tab" !== t.key &&
                        "Backspace" !== t.key &&
                        -1 === t.key.indexOf("Arrow") &&
                        !(0, c.yl)(t) &&
                        "Escape" !== t.key &&
                        "Delete" !== t.key)
                    )
                      return !1;
                    var o = (0, b.a1)(r, "data-newline", "1");
                    if (
                      !(0, c.yl)(t) &&
                      !t.altKey &&
                      !t.shiftKey &&
                      "Enter" === t.key &&
                      o &&
                      n.startOffset < o.textContent.length
                    ) {
                      var a = o.previousElementSibling;
                      a &&
                        (n.insertNode(document.createTextNode(a.textContent)),
                        n.collapse(!1));
                      var s = o.nextSibling;
                      s &&
                        (n.insertNode(document.createTextNode(s.textContent)),
                        n.collapse(!0));
                    }
                    var l = (0, b.lG)(r, "P");
                    if (ut(t, e, l, n)) return !0;
                    if (ct(n, e, l, t)) return !0;
                    if (yt(e, n, t, l)) return !0;
                    var d = (0, b.fb)(r, "vditor-ir__marker--pre");
                    if (d && "PRE" === d.tagName) {
                      var u = d.firstChild;
                      if (bt(e, t, d, n)) return !0;
                      if (
                        ("math-block" === u.getAttribute("data-type") ||
                          "html-block" === u.getAttribute("data-type")) &&
                        tt(e, t, n, u, d.parentElement)
                      )
                        return !0;
                      if (et(e, t, n, u, d.parentElement)) return !0;
                    }
                    var p = (0, b.a1)(r, "data-type", "code-block-info");
                    if (p) {
                      if ("Enter" === t.key || "Tab" === t.key)
                        return (
                          n.selectNodeContents(p.nextElementSibling.firstChild),
                          n.collapse(!0),
                          t.preventDefault(),
                          g(e, ["hint"]),
                          !0
                        );
                      if ("Backspace" === t.key) {
                        var m = (0, N.im)(p, e.ir.element).start;
                        1 === m && n.setStart(r, 0),
                          2 === m && (e.hint.recentLanguage = "");
                      }
                      if (tt(e, t, n, p, p.parentElement))
                        return g(e, ["hint"]), !0;
                    }
                    var f = (0, b.lG)(r, "TD") || (0, b.lG)(r, "TH");
                    if (t.key.indexOf("Arrow") > -1 && f) {
                      var h = Xe(f);
                      if (h && tt(e, t, n, f, h)) return !0;
                      var v = Ye(f);
                      if (v && et(e, t, n, f, v)) return !0;
                    }
                    if (vt(e, t, n)) return !0;
                    if (wt(e, n, t)) return !0;
                    if (dt(e, n, t)) return !0;
                    var w = (0, y.W)(r);
                    if (w) {
                      var _;
                      if (I("⌘=", t))
                        return (
                          (_ = w.querySelector(
                            ".vditor-ir__marker--heading"
                          )) &&
                            _.textContent.trim().length > 1 &&
                            xt(e, _.textContent.substr(1)),
                          t.preventDefault(),
                          !0
                        );
                      if (I("⌘-", t))
                        return (
                          (_ = w.querySelector(
                            ".vditor-ir__marker--heading"
                          )) &&
                            _.textContent.trim().length < 6 &&
                            xt(e, _.textContent.trim() + "# "),
                          t.preventDefault(),
                          !0
                        );
                    }
                    var k = (0, b.F9)(r);
                    if (
                      "Backspace" === t.key &&
                      !(0, c.yl)(t) &&
                      !t.shiftKey &&
                      !t.altKey &&
                      "" === n.toString()
                    ) {
                      if (_t(e, n, t, l)) return !0;
                      if (
                        k &&
                        k.previousElementSibling &&
                        "UL" !== k.tagName &&
                        "OL" !== k.tagName &&
                        ("code-block" ===
                          k.previousElementSibling.getAttribute("data-type") ||
                          "math-block" ===
                            k.previousElementSibling.getAttribute("data-type"))
                      ) {
                        var E = (0, N.im)(k, e.ir.element, n).start;
                        if (
                          0 === E ||
                          (1 === E && k.innerText.startsWith(i.g.ZWSP))
                        )
                          return (
                            n.selectNodeContents(
                              k.previousElementSibling.querySelector(
                                ".vditor-ir__marker--pre code"
                              )
                            ),
                            n.collapse(!1),
                            R(n, e),
                            "" === k.textContent.trim().replace(i.g.ZWSP, "") &&
                              (k.remove(), Ct(e)),
                            t.preventDefault(),
                            !0
                          );
                      }
                      if (w) {
                        var S = w.firstElementChild.textContent.length;
                        (0, N.im)(w, e.ir.element).start === S &&
                          (n.setStart(w.firstElementChild.firstChild, S - 1),
                          n.collapse(!0),
                          (0, N.Hc)(n));
                      }
                    }
                    return !(
                      (("ArrowUp" !== t.key && "ArrowDown" !== t.key) ||
                        !k ||
                        (k
                          .querySelectorAll(".vditor-ir__node")
                          .forEach(function (e) {
                            e.contains(r) ||
                              e.classList.add("vditor-ir__node--hidden");
                          }),
                        !Et(t, k, n))) &&
                      (Ze(n, t.key),
                      !k || !D(k, e, t, n) || (t.preventDefault(), 0))
                    );
                  })(e, t)
                )
                  return;
                if (e.options.ctrlEnter && I("⌘Enter", t))
                  return e.options.ctrlEnter(a(e)), void t.preventDefault();
                if (I("⌘Z", t) && !e.toolbar.elements.undo)
                  return e.undo.undo(e), void t.preventDefault();
                if (I("⌘Y", t) && !e.toolbar.elements.redo)
                  return e.undo.redo(e), void t.preventDefault();
                if ("Escape" === t.key)
                  return (
                    "block" === e.hint.element.style.display
                      ? (e.hint.element.style.display = "none")
                      : e.options.esc && !t.isComposing && e.options.esc(a(e)),
                    void t.preventDefault()
                  );
                if (
                  (0, c.yl)(t) &&
                  t.altKey &&
                  !t.shiftKey &&
                  /^Digit[1-6]$/.test(t.code)
                ) {
                  if ("wysiwyg" === e.currentMode) {
                    var n = t.code.replace("Digit", "H");
                    (0, b.lG)(getSelection().getRangeAt(0).startContainer, n)
                      ? ne(e)
                      : te(e, n),
                      X(e);
                  } else
                    "sv" === e.currentMode
                      ? Pe(
                          e,
                          "#".repeat(
                            parseInt(t.code.replace("Digit", ""), 10)
                          ) + " "
                        )
                      : "ir" === e.currentMode &&
                        xt(
                          e,
                          "#".repeat(
                            parseInt(t.code.replace("Digit", ""), 10)
                          ) + " "
                        );
                  return t.preventDefault(), !0;
                }
                if (
                  (0, c.yl)(t) &&
                  t.altKey &&
                  !t.shiftKey &&
                  /^Digit[7-9]$/.test(t.code)
                )
                  return (
                    "Digit7" === t.code
                      ? ye(e, "wysiwyg", t)
                      : "Digit8" === t.code
                      ? ye(e, "ir", t)
                      : "Digit9" === t.code && ye(e, "sv", t),
                    !0
                  );
                e.options.toolbar.find(function (n) {
                  return !n.hotkey || n.toolbar
                    ? !!n.toolbar &&
                        !!n.toolbar.find(function (n) {
                          return (
                            !!n.hotkey &&
                            (I(n.hotkey, t)
                              ? (e.toolbar.elements[
                                  n.name
                                ].children[0].dispatchEvent(
                                  new CustomEvent((0, c.Le)())
                                ),
                                t.preventDefault(),
                                !0)
                              : void 0)
                          );
                        })
                    : I(n.hotkey, t)
                    ? (e.toolbar.elements[n.name].children[0].dispatchEvent(
                        new CustomEvent((0, c.Le)())
                      ),
                      t.preventDefault(),
                      !0)
                    : void 0;
                });
              }
            });
          },
          Ae = function (e, t) {
            t.addEventListener("selectstart", function (n) {
              t.onmouseup = function () {
                setTimeout(function () {
                  var t = _e(e[e.currentMode].element);
                  t.trim()
                    ? ("wysiwyg" === e.currentMode &&
                        e.options.comment.enable &&
                        ((0, b.a1)(n.target, "data-type", "footnotes-block") ||
                        (0, b.a1)(n.target, "data-type", "link-ref-defs-block")
                          ? e.wysiwyg.hideComment()
                          : e.wysiwyg.showComment()),
                      e.options.select && e.options.select(t))
                    : "wysiwyg" === e.currentMode &&
                      e.options.comment.enable &&
                      e.wysiwyg.hideComment();
                });
              };
            });
          },
          He = function (e, t) {
            var n = (0, N.zh)(e);
            n.extractContents(),
              n.insertNode(document.createTextNode(Lute.Caret)),
              n.insertNode(document.createTextNode(t));
            var r = (0, b.a1)(n.startContainer, "data-block", "0");
            r || (r = e.sv.element);
            var i = e.lute.SpinVditorSVDOM(r.textContent);
            (i =
              "<div data-block='0'>" +
              i.replace(
                /<span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span><span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span></g,
                '<span data-type="newline"><br /><span style="display: none">\n</span></span><span data-type="newline"><br /><span style="display: none">\n</span></span></div><div data-block="0"><'
              ) +
              "</div>"),
              r.isEqualNode(e.sv.element)
                ? (r.innerHTML = i)
                : (r.outerHTML = i),
              z(e.sv.element),
              (0, N.ib)(e.sv.element, n),
              Me(e);
          },
          Ne = function (e, t, n) {
            void 0 === n && (n = !0);
            var r = e;
            for (3 === r.nodeType && (r = r.parentElement); r; ) {
              if (r.getAttribute("data-type") === t) return r;
              r = n ? r.previousElementSibling : r.nextElementSibling;
            }
            return !1;
          },
          je = function (e, t) {
            return (
              t.options.debugger,
              (e =
                "<div data-block='0'>" +
                t.lute
                  .SpinVditorSVDOM(e)
                  .replace(
                    /<span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span><span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span></g,
                    '<span data-type="newline"><br /><span style="display: none">\n</span></span><span data-type="newline"><br /><span style="display: none">\n</span></span></div><div data-block="0"><'
                  ) +
                "</div>"),
              t.options.debugger,
              e
            );
          },
          Oe = function (e) {
            var t = e.getAttribute("data-type"),
              n = e.previousElementSibling,
              r =
                t &&
                "text" !== t &&
                "table" !== t &&
                "heading-marker" !== t &&
                "newline" !== t &&
                "yaml-front-matter-open-marker" !== t &&
                "yaml-front-matter-close-marker" !== t &&
                "code-block-info" !== t &&
                "code-block-close-marker" !== t &&
                "code-block-open-marker" !== t
                  ? e.textContent
                  : "",
              i = !1;
            for ("newline" === t && (i = !0); n && !i; ) {
              var o = n.getAttribute("data-type");
              if (
                "li-marker" === o ||
                "blockquote-marker" === o ||
                "task-marker" === o ||
                "padding" === o
              ) {
                var a = n.textContent;
                if (
                  "li-marker" !== o ||
                  ("code-block-open-marker" !== t && "code-block-info" !== t)
                )
                  if (
                    "code-block-close-marker" === t &&
                    n.nextElementSibling.isSameNode(e)
                  ) {
                    var s = Ne(e, "code-block-open-marker");
                    s &&
                      s.previousElementSibling &&
                      ((n = s.previousElementSibling), (r = a + r));
                  } else r = a + r;
                else r = a.replace(/\S/g, " ") + r;
              } else "newline" === o && (i = !0);
              n = n.previousElementSibling;
            }
            return r;
          },
          De = function (e, t) {
            void 0 === t &&
              (t = { enableAddUndoStack: !0, enableHint: !1, enableInput: !0 }),
              t.enableHint && e.hint.render(e),
              e.preview.render(e);
            var n = a(e);
            "function" == typeof e.options.input &&
              t.enableInput &&
              e.options.input(n),
              e.options.counter.enable && e.counter.render(e, n),
              e.options.cache.enable &&
                (0, c.pK)() &&
                (localStorage.setItem(e.options.cache.id, n),
                e.options.cache.after && e.options.cache.after(n)),
              e.devtools && e.devtools.renderEchart(e),
              clearTimeout(e.sv.processTimeoutId),
              (e.sv.processTimeoutId = window.setTimeout(function () {
                t.enableAddUndoStack &&
                  !e.sv.composingLock &&
                  e.undo.addToUndoStack(e);
              }, e.options.undoDelay));
          },
          Pe = function (e, t) {
            var n = (0, N.zh)(e),
              r = (0, y.S)(n.startContainer, "SPAN");
            r && "" !== r.textContent.trim() && (t = "\n" + t),
              n.collapse(!0),
              document.execCommand("insertHTML", !1, t);
          },
          Ie = function (e, t, n, r) {
            var i = (0, N.zh)(e),
              o = t.getAttribute("data-type");
            0 === e.sv.element.childNodes.length &&
              ((e.sv.element.innerHTML =
                '<span data-type="p" data-block="0"><span data-type="text"><wbr></span></span><span data-type="newline"><br><span style="display: none">\n</span></span>'),
              (0, N.ib)(e.sv.element, i));
            var a = (0, b.F9)(i.startContainer),
              s = (0, y.S)(i.startContainer, "SPAN");
            if (a) {
              if ("link" === o) {
                var l = void 0;
                return (
                  (l =
                    "" === i.toString()
                      ? "".concat(n).concat(Lute.Caret).concat(r)
                      : ""
                          .concat(n)
                          .concat(i.toString())
                          .concat(r.replace(")", Lute.Caret + ")"))),
                  void document.execCommand("insertHTML", !1, l)
                );
              }
              if (
                "italic" === o ||
                "bold" === o ||
                "strike" === o ||
                "inline-code" === o ||
                "code" === o ||
                "table" === o ||
                "line" === o
              )
                return (
                  (l = void 0),
                  (l =
                    "" === i.toString()
                      ? ""
                          .concat(n)
                          .concat(Lute.Caret)
                          .concat("code" === o ? "" : r)
                      : ""
                          .concat(n)
                          .concat(i.toString())
                          .concat(Lute.Caret)
                          .concat("code" === o ? "" : r)),
                  "table" === o || ("code" === o && s && "" !== s.textContent)
                    ? (l = "\n\n" + l)
                    : "line" === o &&
                      (l = "\n\n".concat(n, "\n").concat(Lute.Caret)),
                  void document.execCommand("insertHTML", !1, l)
                );
              if (
                ("check" === o ||
                  "list" === o ||
                  "ordered-list" === o ||
                  "quote" === o) &&
                s
              ) {
                var c = "* ";
                "check" === o
                  ? (c = "* [ ] ")
                  : "ordered-list" === o
                  ? (c = "1. ")
                  : "quote" === o && (c = "> ");
                var d = Ne(s, "newline");
                return (
                  d
                    ? d.insertAdjacentText("afterend", c)
                    : a.insertAdjacentText("afterbegin", c),
                  void q(e)
                );
              }
              (0, N.ib)(e.sv.element, i), De(e);
            }
          },
          Re = function (e) {
            switch (e.currentMode) {
              case "ir":
                return e.ir.element;
              case "wysiwyg":
                return e.wysiwyg.element;
              case "sv":
                return e.sv.element;
            }
          },
          Be = function (e, t) {
            e.options.upload.setHeaders &&
              (e.options.upload.headers = e.options.upload.setHeaders()),
              e.options.upload.headers &&
                Object.keys(e.options.upload.headers).forEach(function (n) {
                  t.setRequestHeader(n, e.options.upload.headers[n]);
                });
          },
          ze = function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function a(e) {
                try {
                  l(r.next(e));
                } catch (t) {
                  o(t);
                }
              }
              function s(e) {
                try {
                  l(r.throw(e));
                } catch (t) {
                  o(t);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              l((r = r.apply(e, t || [])).next());
            });
          },
          qe = function (e, t) {
            var n,
              r,
              i,
              o,
              a = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function s(s) {
              return function (l) {
                return (function (s) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; o && ((o = 0), s[0] && (a = 0)), a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & s[0]
                              ? r.return
                              : s[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                          !(i = i.call(r, s[1])).done)
                      )
                        return i;
                      switch (((r = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                        case 0:
                        case 1:
                          i = s;
                          break;
                        case 4:
                          return a.label++, { value: s[1], done: !1 };
                        case 5:
                          a.label++, (r = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !(
                              (i =
                                (i = a.trys).length > 0 && i[i.length - 1]) ||
                              (6 !== s[0] && 2 !== s[0])
                            )
                          ) {
                            a = 0;
                            continue;
                          }
                          if (
                            3 === s[0] &&
                            (!i || (s[1] > i[0] && s[1] < i[3]))
                          ) {
                            a.label = s[1];
                            break;
                          }
                          if (6 === s[0] && a.label < i[1]) {
                            (a.label = i[1]), (i = s);
                            break;
                          }
                          if (i && a.label < i[2]) {
                            (a.label = i[2]), a.ops.push(s);
                            break;
                          }
                          i[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      s = t.call(e, a);
                    } catch (l) {
                      (s = [6, l]), (r = 0);
                    } finally {
                      n = i = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                })([s, l]);
              };
            }
          },
          Ve = function () {
            (this.isUploading = !1),
              (this.element = document.createElement("div")),
              (this.element.className = "vditor-upload");
          },
          Ue = function (e, t, n) {
            return ze(void 0, void 0, void 0, function () {
              var r, i, o, a, s, l, c, d, u, p, m, f, h, g;
              return qe(this, function (v) {
                switch (v.label) {
                  case 0:
                    for (
                      r = [],
                        i = !0 === e.options.upload.multiple ? t.length : 1,
                        f = 0;
                      f < i;
                      f++
                    )
                      (o = t[f]) instanceof DataTransferItem &&
                        (o = o.getAsFile()),
                        r.push(o);
                    return e.options.upload.handler
                      ? [4, e.options.upload.handler(r)]
                      : [3, 2];
                  case 1:
                    return (
                      (a = v.sent()),
                      n && (n.value = ""),
                      "string" == typeof a ? (e.tip.show(a), [2]) : [2]
                    );
                  case 2:
                    return e.options.upload.url && e.upload
                      ? e.options.upload.file
                        ? [4, e.options.upload.file(r)]
                        : [3, 4]
                      : (n && (n.value = ""),
                        e.tip.show("please config: options.upload.url"),
                        [2]);
                  case 3:
                    (r = v.sent()), (v.label = 4);
                  case 4:
                    if (
                      e.options.upload.validate &&
                      "string" == typeof (a = e.options.upload.validate(r))
                    )
                      return e.tip.show(a), [2];
                    if (
                      ((s = Re(e)),
                      (e.upload.range = (0, N.zh)(e)),
                      (l = (function (e, t) {
                        e.tip.hide();
                        var n = [],
                          r = "",
                          i = "";
                        e.options.lang, e.options;
                        for (
                          var o = function (o, a) {
                              var s = t[a],
                                l = !0;
                              s.name ||
                                ((r += "<li>".concat(
                                  window.VditorI18n.nameEmpty,
                                  "</li>"
                                )),
                                (l = !1)),
                                s.size > e.options.upload.max &&
                                  ((r += "<li>"
                                    .concat(s.name, " ")
                                    .concat(window.VditorI18n.over, " ")
                                    .concat(
                                      e.options.upload.max / 1024 / 1024,
                                      "M</li>"
                                    )),
                                  (l = !1));
                              var c = s.name.lastIndexOf("."),
                                d = s.name.substr(c),
                                u =
                                  e.options.upload.filename(
                                    s.name.substr(0, c)
                                  ) + d;
                              e.options.upload.accept &&
                                (e.options.upload.accept
                                  .split(",")
                                  .some(function (e) {
                                    var t = e.trim();
                                    if (0 === t.indexOf(".")) {
                                      if (d.toLowerCase() === t.toLowerCase())
                                        return !0;
                                    } else if (s.type.split("/")[0] === t.split("/")[0]) return !0;
                                    return !1;
                                  }) ||
                                  ((r += "<li>"
                                    .concat(s.name, " ")
                                    .concat(
                                      window.VditorI18n.fileTypeError,
                                      "</li>"
                                    )),
                                  (l = !1))),
                                l &&
                                  (n.push(s),
                                  (i += "<li>"
                                    .concat(u, " ")
                                    .concat(
                                      window.VditorI18n.uploading,
                                      "</li>"
                                    )));
                            },
                            a = t.length,
                            s = 0;
                          s < a;
                          s++
                        )
                          o(0, s);
                        return (
                          e.tip.show("<ul>".concat(r).concat(i, "</ul>")), n
                        );
                      })(e, r)),
                      0 === l.length)
                    )
                      return n && (n.value = ""), [2];
                    for (
                      c = new FormData(),
                        d = e.options.upload.extraData,
                        u = 0,
                        p = Object.keys(d);
                      u < p.length;
                      u++
                    )
                      (m = p[u]), c.append(m, d[m]);
                    for (f = 0, h = l.length; f < h; f++)
                      c.append(e.options.upload.fieldName, l[f]);
                    return (
                      (g = new XMLHttpRequest()).open(
                        "POST",
                        e.options.upload.url
                      ),
                      e.options.upload.token &&
                        g.setRequestHeader(
                          "X-Upload-Token",
                          e.options.upload.token
                        ),
                      e.options.upload.withCredentials &&
                        (g.withCredentials = !0),
                      Be(e, g),
                      (e.upload.isUploading = !0),
                      s.setAttribute("contenteditable", "false"),
                      (g.onreadystatechange = function () {
                        if (g.readyState === XMLHttpRequest.DONE) {
                          if (
                            ((e.upload.isUploading = !1),
                            s.setAttribute("contenteditable", "true"),
                            g.status >= 200 && g.status < 300)
                          )
                            if (e.options.upload.success)
                              e.options.upload.success(s, g.responseText);
                            else {
                              var r = g.responseText;
                              e.options.upload.format &&
                                (r = e.options.upload.format(
                                  t,
                                  g.responseText
                                )),
                                (function (e, t) {
                                  Re(t).focus();
                                  var n = JSON.parse(e),
                                    r = "";
                                  1 === n.code && (r = "".concat(n.msg)),
                                    n.data.errFiles &&
                                      n.data.errFiles.length > 0 &&
                                      ((r = "<ul><li>".concat(r, "</li>")),
                                      n.data.errFiles.forEach(function (e) {
                                        var n = e.lastIndexOf("."),
                                          i =
                                            t.options.upload.filename(
                                              e.substr(0, n)
                                            ) + e.substr(n);
                                        r += "<li>"
                                          .concat(i, " ")
                                          .concat(
                                            window.VditorI18n.uploadError,
                                            "</li>"
                                          );
                                      }),
                                      (r += "</ul>")),
                                    r ? t.tip.show(r) : t.tip.hide();
                                  var i = "";
                                  Object.keys(n.data.succMap).forEach(function (
                                    e
                                  ) {
                                    var r = n.data.succMap[e],
                                      o = e.lastIndexOf("."),
                                      a = e.substr(o),
                                      s =
                                        t.options.upload.filename(
                                          e.substr(0, o)
                                        ) + a;
                                    0 ===
                                      (a = a.toLowerCase()).indexOf(".wav") ||
                                    0 === a.indexOf(".mp3") ||
                                    0 === a.indexOf(".ogg")
                                      ? "wysiwyg" === t.currentMode
                                        ? (i +=
                                            '<div class="vditor-wysiwyg__block" data-type="html-block"\n data-block="0"><pre><code>&lt;audio controls="controls" src="'
                                              .concat(
                                                r,
                                                '"&gt;&lt;/audio&gt;</code></pre><pre class="vditor-wysiwyg__preview" data-render="1"><audio controls="controls" src="'
                                              )
                                              .concat(
                                                r,
                                                '"></audio></pre></div>\n'
                                              ))
                                        : "ir" === t.currentMode
                                        ? (i +=
                                            '<audio controls="controls" src="'.concat(
                                              r,
                                              '"></audio>\n'
                                            ))
                                        : (i += "["
                                            .concat(s, "](")
                                            .concat(r, ")\n"))
                                      : 0 === a.indexOf(".apng") ||
                                        0 === a.indexOf(".bmp") ||
                                        0 === a.indexOf(".gif") ||
                                        0 === a.indexOf(".ico") ||
                                        0 === a.indexOf(".cur") ||
                                        0 === a.indexOf(".jpg") ||
                                        0 === a.indexOf(".jpeg") ||
                                        0 === a.indexOf(".jfif") ||
                                        0 === a.indexOf(".pjp") ||
                                        0 === a.indexOf(".pjpeg") ||
                                        0 === a.indexOf(".png") ||
                                        0 === a.indexOf(".svg") ||
                                        0 === a.indexOf(".webp")
                                      ? "wysiwyg" === t.currentMode
                                        ? (i += '<img alt="'
                                            .concat(s, '" src="')
                                            .concat(r, '">\n'))
                                        : (i += "!["
                                            .concat(s, "](")
                                            .concat(r, ")\n"))
                                      : "wysiwyg" === t.currentMode
                                      ? (i += '<a href="'
                                          .concat(r, '">')
                                          .concat(s, "</a>\n"))
                                      : (i += "["
                                          .concat(s, "](")
                                          .concat(r, ")\n"));
                                  }),
                                    (0, N.Hc)(t.upload.range),
                                    document.execCommand("insertHTML", !1, i),
                                    (t.upload.range = getSelection()
                                      .getRangeAt(0)
                                      .cloneRange());
                                })(r, e);
                            }
                          else
                            e.options.upload.error
                              ? e.options.upload.error(g.responseText)
                              : e.tip.show(g.responseText);
                          n && (n.value = ""),
                            (e.upload.element.style.display = "none");
                        }
                      }),
                      (g.upload.onprogress = function (t) {
                        if (t.lengthComputable) {
                          var n = (t.loaded / t.total) * 100;
                          (e.upload.element.style.display = "block"),
                            (e.upload.element.style.width = n + "%");
                        }
                      }),
                      g.send(c),
                      [2]
                    );
                }
              });
            });
          },
          We = function (e, t, n) {
            var r,
              o = (0, b.F9)(t.startContainer);
            if (
              (o || (o = e.wysiwyg.element),
              (n &&
                "formatItalic" !== n.inputType &&
                "deleteByDrag" !== n.inputType &&
                "insertFromDrop" !== n.inputType &&
                "formatBold" !== n.inputType &&
                "formatRemove" !== n.inputType &&
                "formatStrikeThrough" !== n.inputType &&
                "insertUnorderedList" !== n.inputType &&
                "insertOrderedList" !== n.inputType &&
                "formatOutdent" !== n.inputType &&
                "formatIndent" !== n.inputType &&
                "" !== n.inputType) ||
                !n)
            ) {
              var a = (function (e) {
                for (var t = e.previousSibling; t; ) {
                  if (
                    3 !== t.nodeType &&
                    "A" === t.tagName &&
                    !t.previousSibling &&
                    "" === t.innerHTML.replace(i.g.ZWSP, "") &&
                    t.nextSibling
                  )
                    return t;
                  t = t.previousSibling;
                }
                return !1;
              })(t.startContainer);
              a && a.remove(),
                e.wysiwyg.element.querySelectorAll("wbr").forEach(function (e) {
                  e.remove();
                }),
                t.insertNode(document.createElement("wbr")),
                o.querySelectorAll("[style]").forEach(function (e) {
                  e.removeAttribute("style");
                }),
                o.querySelectorAll(".vditor-comment").forEach(function (e) {
                  "" === e.textContent.trim() &&
                    (e.classList.remove(
                      "vditor-comment",
                      "vditor-comment--focus"
                    ),
                    e.removeAttribute("data-cmtids"));
                }),
                null === (r = o.previousElementSibling) ||
                  void 0 === r ||
                  r.querySelectorAll(".vditor-comment").forEach(function (e) {
                    "" === e.textContent.trim() &&
                      (e.classList.remove(
                        "vditor-comment",
                        "vditor-comment--focus"
                      ),
                      e.removeAttribute("data-cmtids"));
                  });
              var s = "";
              "link-ref-defs-block" === o.getAttribute("data-type") &&
                (o = e.wysiwyg.element);
              var l,
                c = o.isEqualNode(e.wysiwyg.element),
                d = (0, b.a1)(o, "data-type", "footnotes-block");
              if (c) s = o.innerHTML;
              else {
                var u = (0, b.O9)(t.startContainer);
                if (u && !d) {
                  var p = (0, y.S)(t.startContainer, "BLOCKQUOTE");
                  o = p ? (0, b.F9)(t.startContainer) || o : u;
                }
                if (
                  (d && (o = d),
                  (s = o.outerHTML),
                  "UL" === o.tagName || "OL" === o.tagName)
                ) {
                  var m = o.previousElementSibling,
                    f = o.nextElementSibling;
                  !m ||
                    ("UL" !== m.tagName && "OL" !== m.tagName) ||
                    ((s = m.outerHTML + s), m.remove()),
                    !f ||
                      ("UL" !== f.tagName && "OL" !== f.tagName) ||
                      ((s += f.outerHTML), f.remove()),
                    (s = s.replace(
                      "<div><wbr><br></div>",
                      "<li><p><wbr><br></p></li>"
                    ));
                }
                o.innerText.startsWith("```") ||
                  (e.wysiwyg.element
                    .querySelectorAll("[data-type='link-ref-defs-block']")
                    .forEach(function (e) {
                      e &&
                        !o.isEqualNode(e) &&
                        ((s += e.outerHTML), e.remove());
                    }),
                  e.wysiwyg.element
                    .querySelectorAll("[data-type='footnotes-block']")
                    .forEach(function (e) {
                      e &&
                        !o.isEqualNode(e) &&
                        ((s += e.outerHTML), e.remove());
                    }));
              }
              if (
                ('<p data-block="0">```<wbr></p>' ===
                  (s = s
                    .replace(/<\/(strong|b)><strong data-marker="\W{2}">/g, "")
                    .replace(/<\/(em|i)><em data-marker="\W{1}">/g, "")
                    .replace(/<\/(s|strike)><s data-marker="~{1,2}">/g, "")) &&
                  e.hint.recentLanguage &&
                  (s = '<p data-block="0">```<wbr></p>'.replace(
                    "```",
                    "```" + e.hint.recentLanguage
                  )),
                e.options.debugger,
                (s = e.lute.SpinVditorDOM(s)),
                e.options.debugger,
                c)
              )
                o.innerHTML = s;
              else if (((o.outerHTML = s), d)) {
                var h = (0, b.E2)(e.wysiwyg.element.querySelector("wbr"), "LI");
                if (h) {
                  var g = e.wysiwyg.element.querySelector(
                    'sup[data-type="footnotes-ref"][data-footnotes-label="'.concat(
                      h.getAttribute("data-marker"),
                      '"]'
                    )
                  );
                  g &&
                    g.setAttribute(
                      "aria-label",
                      h.textContent.trim().substr(0, 24)
                    );
                }
              }
              var v,
                w = e.wysiwyg.element.querySelectorAll(
                  "[data-type='link-ref-defs-block']"
                );
              w.forEach(function (e, t) {
                0 === t
                  ? (l = e)
                  : (l.insertAdjacentHTML("beforeend", e.innerHTML),
                    e.remove());
              }),
                w.length > 0 &&
                  e.wysiwyg.element.insertAdjacentElement("beforeend", w[0]);
              var _ = e.wysiwyg.element.querySelectorAll(
                "[data-type='footnotes-block']"
              );
              _.forEach(function (e, t) {
                0 === t
                  ? (v = e)
                  : (v.insertAdjacentHTML("beforeend", e.innerHTML),
                    e.remove());
              }),
                _.length > 0 &&
                  e.wysiwyg.element.insertAdjacentElement("beforeend", _[0]),
                (0, N.ib)(e.wysiwyg.element, t),
                e.wysiwyg.element
                  .querySelectorAll(".vditor-wysiwyg__preview[data-render='2']")
                  .forEach(function (t) {
                    H(t, e);
                  }),
                n &&
                  ("deleteContentBackward" === n.inputType ||
                    "deleteContentForward" === n.inputType) &&
                  e.options.comment.enable &&
                  (e.wysiwyg.triggerRemoveComment(e),
                  e.options.comment.adjustTop(e.wysiwyg.getComments(e, !0)));
            }
            j(e),
              X(e, { enableAddUndoStack: !0, enableHint: !0, enableInput: !0 });
          },
          Ge = function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function a(e) {
                try {
                  l(r.next(e));
                } catch (t) {
                  o(t);
                }
              }
              function s(e) {
                try {
                  l(r.throw(e));
                } catch (t) {
                  o(t);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              l((r = r.apply(e, t || [])).next());
            });
          },
          Ke = function (e, t) {
            var n,
              r,
              i,
              o,
              a = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function s(s) {
              return function (l) {
                return (function (s) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; o && ((o = 0), s[0] && (a = 0)), a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & s[0]
                              ? r.return
                              : s[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                          !(i = i.call(r, s[1])).done)
                      )
                        return i;
                      switch (((r = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                        case 0:
                        case 1:
                          i = s;
                          break;
                        case 4:
                          return a.label++, { value: s[1], done: !1 };
                        case 5:
                          a.label++, (r = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !(
                              (i =
                                (i = a.trys).length > 0 && i[i.length - 1]) ||
                              (6 !== s[0] && 2 !== s[0])
                            )
                          ) {
                            a = 0;
                            continue;
                          }
                          if (
                            3 === s[0] &&
                            (!i || (s[1] > i[0] && s[1] < i[3]))
                          ) {
                            a.label = s[1];
                            break;
                          }
                          if (6 === s[0] && a.label < i[1]) {
                            (a.label = i[1]), (i = s);
                            break;
                          }
                          if (i && a.label < i[2]) {
                            (a.label = i[2]), a.ops.push(s);
                            break;
                          }
                          i[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      s = t.call(e, a);
                    } catch (l) {
                      (s = [6, l]), (r = 0);
                    } finally {
                      n = i = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                })([s, l]);
              };
            }
          },
          Fe = function (e, t, n) {
            if (
              229 === e.keyCode &&
              "" === e.code &&
              "Unidentified" === e.key &&
              "sv" !== t.currentMode
            ) {
              var r = (0, b.F9)(n);
              if (r && "" === r.textContent.trim())
                return (t[t.currentMode].composingLock = !0), !1;
            }
            return !0;
          },
          $e = function (e, t, n) {
            if (
              !(
                "Enter" === n.key ||
                "Tab" === n.key ||
                "Backspace" === n.key ||
                n.key.indexOf("Arrow") > -1 ||
                (0, c.yl)(n) ||
                "Escape" === n.key ||
                n.shiftKey ||
                n.altKey
              )
            ) {
              var r =
                (0, b.lG)(e.startContainer, "P") ||
                (0, b.lG)(e.startContainer, "LI");
              if (r && 0 === (0, N.im)(r, t[t.currentMode].element, e).start) {
                r.nodeValue &&
                  (r.nodeValue = r.nodeValue.replace(/\u2006/g, ""));
                var o = document.createTextNode(i.g.ZWSP);
                e.insertNode(o), e.setStartAfter(o);
              }
            }
          },
          Ze = function (e, t) {
            if ("ArrowDown" === t || "ArrowUp" === t) {
              var n =
                (0, b.a1)(e.startContainer, "data-type", "math-inline") ||
                (0, b.a1)(e.startContainer, "data-type", "html-entity") ||
                (0, b.a1)(e.startContainer, "data-type", "html-inline");
              n &&
                ("ArrowDown" === t && e.setStartAfter(n.parentElement),
                "ArrowUp" === t && e.setStartBefore(n.parentElement));
            }
          },
          Je = function (e, t) {
            var n = (0, N.zh)(e),
              r = (0, b.F9)(n.startContainer);
            r &&
              (r.insertAdjacentHTML(
                t,
                '<p data-block="0">'.concat(i.g.ZWSP, "<wbr>\n</p>")
              ),
              (0, N.ib)(e[e.currentMode].element, n),
              fe(e),
              lt(e));
          },
          Xe = function (e) {
            var t = (0, b.lG)(e, "TABLE");
            return !(!t || !t.rows[0].cells[0].isSameNode(e)) && t;
          },
          Ye = function (e) {
            var t = (0, b.lG)(e, "TABLE");
            return (
              !(
                !t ||
                !t.lastElementChild.lastElementChild.lastElementChild.isSameNode(
                  e
                )
              ) && t
            );
          },
          Qe = function (e, t, n) {
            void 0 === n && (n = !0);
            var r = e.previousElementSibling;
            return (
              r ||
                (r = e.parentElement.previousElementSibling
                  ? e.parentElement.previousElementSibling.lastElementChild
                  : "TBODY" === e.parentElement.parentElement.tagName &&
                    e.parentElement.parentElement.previousElementSibling
                  ? e.parentElement.parentElement.previousElementSibling
                      .lastElementChild.lastElementChild
                  : null),
              r && (t.selectNodeContents(r), n || t.collapse(!1), (0, N.Hc)(t)),
              r
            );
          },
          et = function (e, t, n, r, o) {
            var a = (0, N.im)(r, e[e.currentMode].element, n);
            if (
              ("ArrowDown" === t.key &&
                -1 ===
                  r.textContent.trimRight().substr(a.start).indexOf("\n")) ||
              ("ArrowRight" === t.key &&
                a.start >= r.textContent.trimRight().length)
            ) {
              var s = o.nextElementSibling;
              return (
                !s ||
                (s && ("TABLE" === s.tagName || s.getAttribute("data-type")))
                  ? (o.insertAdjacentHTML(
                      "afterend",
                      '<p data-block="0">'.concat(i.g.ZWSP, "<wbr></p>")
                    ),
                    (0, N.ib)(e[e.currentMode].element, n))
                  : (n.selectNodeContents(s), n.collapse(!0), (0, N.Hc)(n)),
                t.preventDefault(),
                !0
              );
            }
            return !1;
          },
          tt = function (e, t, n, r, o) {
            var a = (0, N.im)(r, e[e.currentMode].element, n);
            if (
              ("ArrowUp" === t.key &&
                -1 === r.textContent.substr(0, a.start).indexOf("\n")) ||
              (("ArrowLeft" === t.key ||
                ("Backspace" === t.key && "" === n.toString())) &&
                0 === a.start)
            ) {
              var s = o.previousElementSibling;
              return (
                !s ||
                (s && ("TABLE" === s.tagName || s.getAttribute("data-type")))
                  ? (o.insertAdjacentHTML(
                      "beforebegin",
                      '<p data-block="0">'.concat(i.g.ZWSP, "<wbr></p>")
                    ),
                    (0, N.ib)(e[e.currentMode].element, n))
                  : (n.selectNodeContents(s), n.collapse(!1), (0, N.Hc)(n)),
                t.preventDefault(),
                !0
              );
            }
            return !1;
          },
          nt = function (e, t, n, r) {
            void 0 === r && (r = !0);
            var i = (0, b.lG)(t.startContainer, "LI");
            if (
              (e[e.currentMode].element
                .querySelectorAll("wbr")
                .forEach(function (e) {
                  e.remove();
                }),
              t.insertNode(document.createElement("wbr")),
              r && i)
            ) {
              for (
                var o = "", a = 0;
                a < i.parentElement.childElementCount;
                a++
              ) {
                var s = i.parentElement.children[a].querySelector("input");
                s && s.remove(),
                  (o += '<p data-block="0">'.concat(
                    i.parentElement.children[a].innerHTML.trimLeft(),
                    "</p>"
                  ));
              }
              i.parentElement.insertAdjacentHTML("beforebegin", o),
                i.parentElement.remove();
            } else if (i)
              if ("check" === n)
                i.parentElement.querySelectorAll("li").forEach(function (e) {
                  e.insertAdjacentHTML(
                    "afterbegin",
                    '<input type="checkbox" />'.concat(
                      0 === e.textContent.indexOf(" ") ? "" : " "
                    )
                  ),
                    e.classList.add("vditor-task");
                });
              else {
                i.querySelector("input") &&
                  i.parentElement.querySelectorAll("li").forEach(function (e) {
                    e.querySelector("input").remove(),
                      e.classList.remove("vditor-task");
                  });
                var l = void 0;
                "list" === n
                  ? (l = document.createElement("ul")).setAttribute(
                      "data-marker",
                      "*"
                    )
                  : (l = document.createElement("ol")).setAttribute(
                      "data-marker",
                      "1."
                    ),
                  l.setAttribute("data-block", "0"),
                  l.setAttribute(
                    "data-tight",
                    i.parentElement.getAttribute("data-tight")
                  ),
                  (l.innerHTML = i.parentElement.innerHTML),
                  i.parentElement.parentNode.replaceChild(l, i.parentElement);
              }
            else {
              var c = (0, b.a1)(t.startContainer, "data-block", "0");
              c ||
                (e[e.currentMode].element.querySelector("wbr").remove(),
                ((c = e[e.currentMode].element.querySelector("p")).innerHTML =
                  "<wbr>")),
                "check" === n
                  ? (c.insertAdjacentHTML(
                      "beforebegin",
                      '<ul data-block="0"><li class="vditor-task"><input type="checkbox" /> '.concat(
                        c.innerHTML,
                        "</li></ul>"
                      )
                    ),
                    c.remove())
                  : "list" === n
                  ? (c.insertAdjacentHTML(
                      "beforebegin",
                      '<ul data-block="0"><li>'.concat(
                        c.innerHTML,
                        "</li></ul>"
                      )
                    ),
                    c.remove())
                  : "ordered-list" === n &&
                    (c.insertAdjacentHTML(
                      "beforebegin",
                      '<ol data-block="0"><li>'.concat(
                        c.innerHTML,
                        "</li></ol>"
                      )
                    ),
                    c.remove());
            }
          },
          rt = function (e, t, n) {
            var r = t.previousElementSibling;
            if (t && r) {
              var i = [t];
              Array.from(n.cloneContents().children).forEach(function (e, n) {
                3 !== e.nodeType &&
                  t &&
                  "" !== e.textContent.trim() &&
                  t.getAttribute("data-node-id") ===
                    e.getAttribute("data-node-id") &&
                  (0 !== n && i.push(t), (t = t.nextElementSibling));
              }),
                e[e.currentMode].element
                  .querySelectorAll("wbr")
                  .forEach(function (e) {
                    e.remove();
                  }),
                n.insertNode(document.createElement("wbr"));
              var o = r.parentElement,
                a = "";
              i.forEach(function (e) {
                var t = e.getAttribute("data-marker");
                1 !== t.length && (t = "1".concat(t.slice(-1))),
                  (a += '<li data-node-id="'
                    .concat(e.getAttribute("data-node-id"), '" data-marker="')
                    .concat(t, '">')
                    .concat(e.innerHTML, "</li>")),
                  e.remove();
              }),
                r.insertAdjacentHTML(
                  "beforeend",
                  "<"
                    .concat(o.tagName, ' data-block="0">')
                    .concat(a, "</")
                    .concat(o.tagName, ">")
                ),
                "wysiwyg" === e.currentMode
                  ? (o.outerHTML = e.lute.SpinVditorDOM(o.outerHTML))
                  : (o.outerHTML = e.lute.SpinVditorIRDOM(o.outerHTML)),
                (0, N.ib)(e[e.currentMode].element, n);
              var s = (0, b.O9)(n.startContainer);
              s &&
                s
                  .querySelectorAll(
                    ".vditor-".concat(
                      e.currentMode,
                      "__preview[data-render='2']"
                    )
                  )
                  .forEach(function (t) {
                    H(t, e),
                      "wysiwyg" === e.currentMode &&
                        t.previousElementSibling.setAttribute(
                          "style",
                          "display:none"
                        );
                  }),
                lt(e),
                fe(e);
            } else e[e.currentMode].element.focus();
          },
          it = function (e, t, n, r) {
            var i = (0, b.lG)(t.parentElement, "LI");
            if (i) {
              e[e.currentMode].element
                .querySelectorAll("wbr")
                .forEach(function (e) {
                  e.remove();
                }),
                n.insertNode(document.createElement("wbr"));
              var o = t.parentElement,
                a = o.cloneNode(),
                s = [t];
              Array.from(n.cloneContents().children).forEach(function (e, n) {
                3 !== e.nodeType &&
                  t &&
                  "" !== e.textContent.trim() &&
                  t.getAttribute("data-node-id") ===
                    e.getAttribute("data-node-id") &&
                  (0 !== n && s.push(t), (t = t.nextElementSibling));
              });
              var l = !1,
                c = "";
              o.querySelectorAll("li").forEach(function (e) {
                l &&
                  ((c += e.outerHTML),
                  e.nextElementSibling || e.previousElementSibling
                    ? e.remove()
                    : e.parentElement.remove()),
                  e.isSameNode(s[s.length - 1]) && (l = !0);
              }),
                s.reverse().forEach(function (e) {
                  i.insertAdjacentElement("afterend", e);
                }),
                c &&
                  ((a.innerHTML = c),
                  s[0].insertAdjacentElement("beforeend", a)),
                "wysiwyg" === e.currentMode
                  ? (r.outerHTML = e.lute.SpinVditorDOM(r.outerHTML))
                  : (r.outerHTML = e.lute.SpinVditorIRDOM(r.outerHTML)),
                (0, N.ib)(e[e.currentMode].element, n);
              var d = (0, b.O9)(n.startContainer);
              d &&
                d
                  .querySelectorAll(
                    ".vditor-".concat(
                      e.currentMode,
                      "__preview[data-render='2']"
                    )
                  )
                  .forEach(function (t) {
                    H(t, e),
                      "wysiwyg" === e.currentMode &&
                        t.previousElementSibling.setAttribute(
                          "style",
                          "display:none"
                        );
                  }),
                lt(e),
                fe(e);
            } else e[e.currentMode].element.focus();
          },
          ot = function (e, t) {
            for (
              var n = getSelection().getRangeAt(0).startContainer.parentElement,
                r = e.rows[0].cells.length,
                i = e.rows.length,
                o = 0,
                a = 0;
              a < i;
              a++
            )
              for (var s = 0; s < r; s++)
                if (e.rows[a].cells[s].isSameNode(n)) {
                  o = s;
                  break;
                }
            for (var l = 0; l < i; l++)
              e.rows[l].cells[o].setAttribute("align", t);
          },
          at = function (e) {
            var t = e.trimRight().split("\n").pop();
            return (
              "" !== t &&
              ("" === t.replace(/ |-/g, "") ||
                "" === t.replace(/ |_/g, "") ||
                "" === t.replace(/ |\*/g, "")) &&
              t.replace(/ /g, "").length > 2 &&
              !(
                t.indexOf("-") > -1 &&
                -1 === t.trimLeft().indexOf(" ") &&
                e.trimRight().split("\n").length > 1
              ) &&
              0 !== t.indexOf("    ") &&
              0 !== t.indexOf("\t")
            );
          },
          st = function (e) {
            var t = e.trimRight().split("\n");
            return (
              0 !== (e = t.pop()).indexOf("    ") &&
              0 !== e.indexOf("\t") &&
              "" !== (e = e.trimLeft()) &&
              0 !== t.length &&
              ("" === e.replace(/-/g, "") || "" === e.replace(/=/g, ""))
            );
          },
          lt = function (e, t) {
            void 0 === t &&
              (t = { enableAddUndoStack: !0, enableHint: !1, enableInput: !0 }),
              "wysiwyg" === e.currentMode
                ? X(e, t)
                : "ir" === e.currentMode
                ? Ct(e, t)
                : "sv" === e.currentMode && De(e, t);
          },
          ct = function (e, t, n, r) {
            var o,
              a = e.startContainer,
              s = (0, b.lG)(a, "LI");
            if (s) {
              if (
                !(0, c.yl)(r) &&
                !r.altKey &&
                "Enter" === r.key &&
                !r.shiftKey &&
                n &&
                s.contains(n) &&
                n.nextElementSibling
              )
                return (
                  s &&
                    !s.textContent.endsWith("\n") &&
                    s.insertAdjacentText("beforeend", "\n"),
                  e.insertNode(document.createTextNode("\n\n")),
                  e.collapse(!1),
                  lt(t),
                  r.preventDefault(),
                  !0
                );
              if (
                !(
                  (0, c.yl)(r) ||
                  r.shiftKey ||
                  r.altKey ||
                  "Backspace" !== r.key ||
                  s.previousElementSibling ||
                  "" !== e.toString() ||
                  0 !== (0, N.im)(s, t[t.currentMode].element, e).start
                )
              )
                return (
                  s.nextElementSibling
                    ? (s.parentElement.insertAdjacentHTML(
                        "beforebegin",
                        '<p data-block="0"><wbr>'.concat(s.innerHTML, "</p>")
                      ),
                      s.remove())
                    : (s.parentElement.outerHTML =
                        '<p data-block="0"><wbr>'.concat(s.innerHTML, "</p>")),
                  (0, N.ib)(t[t.currentMode].element, e),
                  lt(t),
                  r.preventDefault(),
                  !0
                );
              if (
                !(0, c.yl)(r) &&
                !r.shiftKey &&
                !r.altKey &&
                "Backspace" === r.key &&
                "" === s.textContent.trim().replace(i.g.ZWSP, "") &&
                "" === e.toString() &&
                "LI" ===
                  (null === (o = s.previousElementSibling) || void 0 === o
                    ? void 0
                    : o.tagName)
              )
                return (
                  s.previousElementSibling.insertAdjacentText(
                    "beforeend",
                    "\n\n"
                  ),
                  e.selectNodeContents(s.previousElementSibling),
                  e.collapse(!1),
                  s.remove(),
                  (0, N.ib)(t[t.currentMode].element, e),
                  lt(t),
                  r.preventDefault(),
                  !0
                );
              if (!(0, c.yl)(r) && !r.altKey && "Tab" === r.key) {
                var l = !1;
                if (
                  (((0 === e.startOffset &&
                    ((3 === a.nodeType && !a.previousSibling) ||
                      (3 !== a.nodeType && "LI" === a.nodeName))) ||
                    (s.classList.contains("vditor-task") &&
                      1 === e.startOffset &&
                      3 !== a.previousSibling.nodeType &&
                      "INPUT" === a.previousSibling.tagName)) &&
                    (l = !0),
                  l || "" !== e.toString())
                )
                  return (
                    r.shiftKey ? it(t, s, e, s.parentElement) : rt(t, s, e),
                    r.preventDefault(),
                    !0
                  );
              }
            }
            return !1;
          },
          dt = function (e, t, n) {
            if (e.options.tab && "Tab" === n.key)
              return (
                n.shiftKey ||
                  ("" === t.toString()
                    ? (t.insertNode(document.createTextNode(e.options.tab)),
                      t.collapse(!1))
                    : (t.extractContents(),
                      t.insertNode(document.createTextNode(e.options.tab)),
                      t.collapse(!1))),
                (0, N.Hc)(t),
                lt(e),
                n.preventDefault(),
                !0
              );
          },
          ut = function (e, t, n, r) {
            if (n) {
              if (!(0, c.yl)(e) && !e.altKey && "Enter" === e.key) {
                var i = String.raw(
                    $ ||
                      ((d = ["", ""]),
                      (u = ["", ""]),
                      Object.defineProperty
                        ? Object.defineProperty(d, "raw", { value: u })
                        : (d.raw = u),
                      ($ = d)),
                    n.textContent
                  )
                    .replace(/\\\|/g, "")
                    .trim(),
                  o = i.split("|");
                if (i.startsWith("|") && i.endsWith("|") && o.length > 3) {
                  var a = o
                    .map(function () {
                      return "---";
                    })
                    .join("|");
                  return (
                    (a =
                      n.textContent +
                      "\n" +
                      a.substring(3, a.length - 3) +
                      "\n|<wbr>"),
                    (n.outerHTML = t.lute.SpinVditorDOM(a)),
                    (0, N.ib)(t[t.currentMode].element, r),
                    lt(t),
                    Me(t),
                    e.preventDefault(),
                    !0
                  );
                }
                if (at(n.innerHTML) && n.previousElementSibling) {
                  var s = "",
                    l = n.innerHTML.trimRight().split("\n");
                  return (
                    l.length > 1 &&
                      (l.pop(),
                      (s = '<p data-block="0">'.concat(l.join("\n"), "</p>"))),
                    n.insertAdjacentHTML(
                      "afterend",
                      "".concat(
                        s,
                        '<hr data-block="0"><p data-block="0"><wbr>\n</p>'
                      )
                    ),
                    n.remove(),
                    (0, N.ib)(t[t.currentMode].element, r),
                    lt(t),
                    Me(t),
                    e.preventDefault(),
                    !0
                  );
                }
                if (st(n.innerHTML))
                  return (
                    "wysiwyg" === t.currentMode
                      ? (n.outerHTML = t.lute.SpinVditorDOM(
                          n.innerHTML + '<p data-block="0"><wbr>\n</p>'
                        ))
                      : (n.outerHTML = t.lute.SpinVditorIRDOM(
                          n.innerHTML + '<p data-block="0"><wbr>\n</p>'
                        )),
                    (0, N.ib)(t[t.currentMode].element, r),
                    lt(t),
                    Me(t),
                    e.preventDefault(),
                    !0
                  );
              }
              var d, u;
              if (
                r.collapsed &&
                n.previousElementSibling &&
                "Backspace" === e.key &&
                !(0, c.yl)(e) &&
                !e.altKey &&
                !e.shiftKey &&
                n.textContent.trimRight().split("\n").length > 1 &&
                0 === (0, N.im)(n, t[t.currentMode].element, r).start
              ) {
                var p = (0, b.DX)(n.previousElementSibling);
                return (
                  p.textContent.endsWith("\n") ||
                    (p.textContent = p.textContent + "\n"),
                  p.parentElement.insertAdjacentHTML(
                    "beforeend",
                    "<wbr>".concat(n.innerHTML)
                  ),
                  n.remove(),
                  (0, N.ib)(t[t.currentMode].element, r),
                  !1
                );
              }
              return !1;
            }
          },
          pt = function (e, t, n) {
            for (var r = "", i = 0; i < n.parentElement.childElementCount; i++)
              r += '<td align="'.concat(
                n.parentElement.children[i].getAttribute("align"),
                '"> </td>'
              );
            "TH" === n.tagName
              ? n.parentElement.parentElement.insertAdjacentHTML(
                  "afterend",
                  "<tbody><tr>".concat(r, "</tr></tbody>")
                )
              : n.parentElement.insertAdjacentHTML(
                  "afterend",
                  "<tr>".concat(r, "</tr>")
                ),
              lt(e);
          },
          mt = function (e, t, n) {
            for (var r = "", i = 0; i < n.parentElement.childElementCount; i++)
              "TH" === n.tagName
                ? (r += '<th align="'.concat(
                    n.parentElement.children[i].getAttribute("align"),
                    '"> </th>'
                  ))
                : (r += '<td align="'.concat(
                    n.parentElement.children[i].getAttribute("align"),
                    '"> </td>'
                  ));
            if ("TH" === n.tagName) {
              n.parentElement.parentElement.insertAdjacentHTML(
                "beforebegin",
                "<thead><tr>".concat(r, "</tr></thead>")
              ),
                t.insertNode(document.createElement("wbr"));
              var o = n.parentElement.innerHTML
                .replace(/<th>/g, "<td>")
                .replace(/<\/th>/g, "</td>");
              n.parentElement.parentElement.nextElementSibling.insertAdjacentHTML(
                "afterbegin",
                o
              ),
                n.parentElement.parentElement.remove(),
                (0, N.ib)(e.ir.element, t);
            } else
              n.parentElement.insertAdjacentHTML(
                "beforebegin",
                "<tr>".concat(r, "</tr>")
              );
            lt(e);
          },
          ft = function (e, t, n, r) {
            void 0 === r && (r = "afterend");
            for (var i = 0, o = n.previousElementSibling; o; )
              i++, (o = o.previousElementSibling);
            for (var a = 0; a < t.rows.length; a++)
              0 === a
                ? t.rows[a].cells[i].insertAdjacentHTML(r, "<th> </th>")
                : t.rows[a].cells[i].insertAdjacentHTML(r, "<td> </td>");
            lt(e);
          },
          ht = function (e, t, n) {
            if ("TD" === n.tagName) {
              var r = n.parentElement.parentElement;
              n.parentElement.previousElementSibling
                ? t.selectNodeContents(
                    n.parentElement.previousElementSibling.lastElementChild
                  )
                : t.selectNodeContents(
                    r.previousElementSibling.lastElementChild.lastElementChild
                  ),
                1 === r.childElementCount
                  ? r.remove()
                  : n.parentElement.remove(),
                t.collapse(!1),
                (0, N.Hc)(t),
                lt(e);
            }
          },
          gt = function (e, t, n, r) {
            for (var i = 0, o = r.previousElementSibling; o; )
              i++, (o = o.previousElementSibling);
            (r.previousElementSibling || r.nextElementSibling) &&
              (t.selectNodeContents(
                r.previousElementSibling || r.nextElementSibling
              ),
              t.collapse(!0));
            for (var a = 0; a < n.rows.length; a++) {
              var s = n.rows[a].cells;
              if (1 === s.length) {
                n.remove(), fe(e);
                break;
              }
              s[i].remove();
            }
            (0, N.Hc)(t), lt(e);
          },
          vt = function (e, t, n) {
            var r = n.startContainer,
              i = (0, b.lG)(r, "TD") || (0, b.lG)(r, "TH");
            if (i) {
              if (!(0, c.yl)(t) && !t.altKey && "Enter" === t.key) {
                (i.lastElementChild &&
                  (!i.lastElementChild ||
                    (i.lastElementChild.isSameNode(i.lastChild) &&
                      "BR" === i.lastElementChild.tagName))) ||
                  i.insertAdjacentHTML("beforeend", "<br>");
                var o = document.createElement("br");
                return (
                  n.insertNode(o),
                  n.setStartAfter(o),
                  lt(e),
                  Me(e),
                  t.preventDefault(),
                  !0
                );
              }
              if ("Tab" === t.key)
                return t.shiftKey
                  ? (Qe(i, n), t.preventDefault(), !0)
                  : ((u = i.nextElementSibling) ||
                      (u = i.parentElement.nextElementSibling
                        ? i.parentElement.nextElementSibling.firstElementChild
                        : "THEAD" === i.parentElement.parentElement.tagName &&
                          i.parentElement.parentElement.nextElementSibling
                        ? i.parentElement.parentElement.nextElementSibling
                            .firstElementChild.firstElementChild
                        : null),
                    u && (n.selectNodeContents(u), (0, N.Hc)(n)),
                    t.preventDefault(),
                    !0);
              var a = i.parentElement.parentElement.parentElement;
              if ("ArrowUp" === t.key) {
                if ((t.preventDefault(), "TH" === i.tagName))
                  return (
                    a.previousElementSibling
                      ? (n.selectNodeContents(a.previousElementSibling),
                        n.collapse(!1),
                        (0, N.Hc)(n))
                      : Je(e, "beforebegin"),
                    !0
                  );
                for (
                  var s = 0, l = i.parentElement;
                  s < l.cells.length && !l.cells[s].isSameNode(i);
                  s++
                );
                var d = l.previousElementSibling;
                return (
                  d || (d = l.parentElement.previousElementSibling.firstChild),
                  n.selectNodeContents(d.cells[s]),
                  n.collapse(!1),
                  (0, N.Hc)(n),
                  !0
                );
              }
              if ("ArrowDown" === t.key) {
                var u;
                if (
                  (t.preventDefault(),
                  !(l = i.parentElement).nextElementSibling &&
                    "TD" === i.tagName)
                )
                  return (
                    a.nextElementSibling
                      ? (n.selectNodeContents(a.nextElementSibling),
                        n.collapse(!0),
                        (0, N.Hc)(n))
                      : Je(e, "afterend"),
                    !0
                  );
                for (
                  s = 0;
                  s < l.cells.length && !l.cells[s].isSameNode(i);
                  s++
                );
                return (
                  (u = l.nextElementSibling) ||
                    (u = l.parentElement.nextElementSibling.firstChild),
                  n.selectNodeContents(u.cells[s]),
                  n.collapse(!0),
                  (0, N.Hc)(n),
                  !0
                );
              }
              if (
                "wysiwyg" === e.currentMode &&
                !(0, c.yl)(t) &&
                "Enter" === t.key &&
                !t.shiftKey &&
                t.altKey
              ) {
                var p = e.wysiwyg.popover.querySelector(".vditor-input");
                return p.focus(), p.select(), t.preventDefault(), !0;
              }
              if (
                !(0, c.yl)(t) &&
                !t.shiftKey &&
                !t.altKey &&
                "Backspace" === t.key &&
                0 === n.startOffset &&
                "" === n.toString()
              )
                return (
                  !Qe(i, n, !1) &&
                    a &&
                    ("" === a.textContent.trim()
                      ? ((a.outerHTML = '<p data-block="0"><wbr>\n</p>'),
                        (0, N.ib)(e[e.currentMode].element, n))
                      : (n.setStartBefore(a), n.collapse(!0)),
                    lt(e)),
                  t.preventDefault(),
                  !0
                );
              if (I("⇧⌘F", t)) return mt(e, n, i), t.preventDefault(), !0;
              if (I("⌘=", t)) return pt(e, n, i), t.preventDefault(), !0;
              if (I("⇧⌘G", t))
                return ft(e, a, i, "beforebegin"), t.preventDefault(), !0;
              if (I("⇧⌘=", t)) return ft(e, a, i), t.preventDefault(), !0;
              if (I("⌘-", t)) return ht(e, n, i), t.preventDefault(), !0;
              if (I("⇧⌘-", t)) return gt(e, n, a, i), t.preventDefault(), !0;
              if (I("⇧⌘L", t)) {
                if ("ir" === e.currentMode)
                  return ot(a, "left"), lt(e), t.preventDefault(), !0;
                if ((m = e.wysiwyg.popover.querySelector('[data-type="left"]')))
                  return m.click(), t.preventDefault(), !0;
              }
              if (I("⇧⌘C", t)) {
                if ("ir" === e.currentMode)
                  return ot(a, "center"), lt(e), t.preventDefault(), !0;
                if (
                  (m = e.wysiwyg.popover.querySelector('[data-type="center"]'))
                )
                  return m.click(), t.preventDefault(), !0;
              }
              if (I("⇧⌘R", t)) {
                if ("ir" === e.currentMode)
                  return ot(a, "right"), lt(e), t.preventDefault(), !0;
                var m;
                if (
                  (m = e.wysiwyg.popover.querySelector('[data-type="right"]'))
                )
                  return m.click(), t.preventDefault(), !0;
              }
            }
            return !1;
          },
          bt = function (e, t, n, r) {
            if ("PRE" === n.tagName && I("⌘A", t))
              return (
                r.selectNodeContents(n.firstElementChild),
                t.preventDefault(),
                !0
              );
            if (
              e.options.tab &&
              "Tab" === t.key &&
              !t.shiftKey &&
              "" === r.toString()
            )
              return (
                r.insertNode(document.createTextNode(e.options.tab)),
                r.collapse(!1),
                lt(e),
                t.preventDefault(),
                !0
              );
            if (
              "Backspace" === t.key &&
              !(0, c.yl)(t) &&
              !t.shiftKey &&
              !t.altKey
            ) {
              var i = (0, N.im)(n, e[e.currentMode].element, r);
              if (
                (0 === i.start || (1 === i.start && "\n" === n.innerText)) &&
                "" === r.toString()
              )
                return (
                  (n.parentElement.outerHTML = '<p data-block="0"><wbr>'.concat(
                    n.firstElementChild.innerHTML,
                    "</p>"
                  )),
                  (0, N.ib)(e[e.currentMode].element, r),
                  lt(e),
                  t.preventDefault(),
                  !0
                );
            }
            return (
              !(0, c.yl)(t) &&
              !t.altKey &&
              "Enter" === t.key &&
              (n.firstElementChild.textContent.endsWith("\n") ||
                n.firstElementChild.insertAdjacentText("beforeend", "\n"),
              r.extractContents(),
              r.insertNode(document.createTextNode("\n")),
              r.collapse(!1),
              (0, N.Hc)(r),
              (0, c.vU)() || ("wysiwyg" === e.currentMode ? We(e, r) : P(e, r)),
              Me(e),
              t.preventDefault(),
              !0)
            );
          },
          yt = function (e, t, n, r) {
            var o = t.startContainer,
              a = (0, b.lG)(o, "BLOCKQUOTE");
            if (a && "" === t.toString()) {
              if (
                "Backspace" === n.key &&
                !(0, c.yl)(n) &&
                !n.shiftKey &&
                !n.altKey &&
                0 === (0, N.im)(a, e[e.currentMode].element, t).start
              )
                return (
                  t.insertNode(document.createElement("wbr")),
                  (a.outerHTML = a.innerHTML),
                  (0, N.ib)(e[e.currentMode].element, t),
                  lt(e),
                  n.preventDefault(),
                  !0
                );
              if (
                r &&
                "Enter" === n.key &&
                !(0, c.yl)(n) &&
                !n.shiftKey &&
                !n.altKey &&
                "BLOCKQUOTE" === r.parentElement.tagName
              ) {
                var s = !1;
                if (
                  ("\n" === r.innerHTML.replace(i.g.ZWSP, "") ||
                  "" === r.innerHTML.replace(i.g.ZWSP, "")
                    ? ((s = !0), r.remove())
                    : r.innerHTML.endsWith("\n\n") &&
                      (0, N.im)(r, e[e.currentMode].element, t).start ===
                        r.textContent.length - 1 &&
                      ((r.innerHTML = r.innerHTML.substr(
                        0,
                        r.innerHTML.length - 2
                      )),
                      (s = !0)),
                  s)
                )
                  return (
                    a.insertAdjacentHTML(
                      "afterend",
                      '<p data-block="0">'.concat(i.g.ZWSP, "<wbr>\n</p>")
                    ),
                    (0, N.ib)(e[e.currentMode].element, t),
                    lt(e),
                    n.preventDefault(),
                    !0
                  );
              }
              var l = (0, b.F9)(o);
              if ("wysiwyg" === e.currentMode && l && I("⇧⌘;", n))
                return (
                  t.insertNode(document.createElement("wbr")),
                  (l.outerHTML = '<blockquote data-block="0">'.concat(
                    l.outerHTML,
                    "</blockquote>"
                  )),
                  (0, N.ib)(e.wysiwyg.element, t),
                  X(e),
                  n.preventDefault(),
                  !0
                );
              if (et(e, n, t, a, a)) return !0;
              if (tt(e, n, t, a, a)) return !0;
            }
            return !1;
          },
          wt = function (e, t, n) {
            var r = t.startContainer,
              i = (0, b.fb)(r, "vditor-task");
            if (i) {
              if (I("⇧⌘J", n)) {
                var o = i.firstElementChild;
                return (
                  o.checked
                    ? o.removeAttribute("checked")
                    : o.setAttribute("checked", "checked"),
                  lt(e),
                  n.preventDefault(),
                  !0
                );
              }
              if (
                "Backspace" === n.key &&
                !(0, c.yl)(n) &&
                !n.shiftKey &&
                !n.altKey &&
                "" === t.toString() &&
                1 === t.startOffset &&
                ((3 === r.nodeType &&
                  r.previousSibling &&
                  "INPUT" === r.previousSibling.tagName) ||
                  3 !== r.nodeType)
              ) {
                var a = i.previousElementSibling;
                return (
                  i.querySelector("input").remove(),
                  a
                    ? ((0, b.DX)(a).parentElement.insertAdjacentHTML(
                        "beforeend",
                        "<wbr>" + i.innerHTML.trim()
                      ),
                      i.remove())
                    : (i.parentElement.insertAdjacentHTML(
                        "beforebegin",
                        '<p data-block="0"><wbr>'.concat(
                          i.innerHTML.trim() || "\n",
                          "</p>"
                        )
                      ),
                      i.nextElementSibling
                        ? i.remove()
                        : i.parentElement.remove()),
                  (0, N.ib)(e[e.currentMode].element, t),
                  lt(e),
                  n.preventDefault(),
                  !0
                );
              }
              if (
                "Enter" === n.key &&
                !(0, c.yl)(n) &&
                !n.shiftKey &&
                !n.altKey
              ) {
                if ("" === i.textContent.trim())
                  if ((0, b.fb)(i.parentElement, "vditor-task")) {
                    var s = (0, b.O9)(r);
                    s && it(e, i, t, s);
                  } else if (i.nextElementSibling) {
                    var l = "",
                      d = "",
                      u = !1;
                    Array.from(i.parentElement.children).forEach(function (e) {
                      i.isSameNode(e)
                        ? (u = !0)
                        : u
                        ? (l += e.outerHTML)
                        : (d += e.outerHTML);
                    });
                    var p = i.parentElement.tagName,
                      m =
                        "OL" === i.parentElement.tagName
                          ? ""
                          : ' data-marker="'.concat(
                              i.parentElement.getAttribute("data-marker"),
                              '"'
                            ),
                      f = "";
                    d &&
                      ((f =
                        "UL" === i.parentElement.tagName ? "" : ' start="1"'),
                      (d = "<"
                        .concat(p, ' data-tight="true"')
                        .concat(m, ' data-block="0">')
                        .concat(d, "</")
                        .concat(p, ">"))),
                      (i.parentElement.outerHTML = ""
                        .concat(d, '<p data-block="0"><wbr>\n</p><')
                        .concat(p, '\n data-tight="true"')
                        .concat(m, ' data-block="0"')
                        .concat(f, ">")
                        .concat(l, "</")
                        .concat(p, ">"));
                  } else
                    i.parentElement.insertAdjacentHTML(
                      "afterend",
                      '<p data-block="0"><wbr>\n</p>'
                    ),
                      1 === i.parentElement.querySelectorAll("li").length
                        ? i.parentElement.remove()
                        : i.remove();
                else
                  3 !== r.nodeType &&
                  0 === t.startOffset &&
                  "INPUT" === r.firstChild.tagName
                    ? t.setStart(r.childNodes[1], 1)
                    : (t.setEndAfter(i.lastChild),
                      i.insertAdjacentHTML(
                        "afterend",
                        '<li class="vditor-task" data-marker="'.concat(
                          i.getAttribute("data-marker"),
                          '"><input type="checkbox"> <wbr></li>'
                        )
                      ),
                      document.querySelector("wbr").after(t.extractContents()));
                return (
                  (0, N.ib)(e[e.currentMode].element, t),
                  lt(e),
                  Me(e),
                  n.preventDefault(),
                  !0
                );
              }
            }
            return !1;
          },
          _t = function (e, t, n, r) {
            if (3 !== t.startContainer.nodeType) {
              var i = t.startContainer.children[t.startOffset];
              if (i && "HR" === i.tagName)
                return (
                  t.selectNodeContents(i.previousElementSibling),
                  t.collapse(!1),
                  n.preventDefault(),
                  !0
                );
            }
            if (r) {
              var o = r.previousElementSibling;
              if (
                o &&
                0 === (0, N.im)(r, e[e.currentMode].element, t).start &&
                (((0, c.vU)() && "HR" === o.tagName) || "TABLE" === o.tagName)
              ) {
                if ("TABLE" === o.tagName) {
                  var a = o.lastElementChild.lastElementChild.lastElementChild;
                  (a.innerHTML =
                    a.innerHTML.trimLeft() + "<wbr>" + r.textContent.trim()),
                    r.remove();
                } else o.remove();
                return (
                  (0, N.ib)(e[e.currentMode].element, t),
                  lt(e),
                  n.preventDefault(),
                  !0
                );
              }
            }
            return !1;
          },
          kt = function (e) {
            (0, c.vU)() &&
              3 !== e.startContainer.nodeType &&
              "HR" === e.startContainer.tagName &&
              e.setStartBefore(e.startContainer);
          },
          Et = function (e, t, n) {
            var r, i;
            if (!(0, c.vU)()) return !1;
            if (
              "ArrowUp" === e.key &&
              t &&
              "TABLE" ===
                (null === (r = t.previousElementSibling) || void 0 === r
                  ? void 0
                  : r.tagName)
            ) {
              var o = t.previousElementSibling;
              return (
                n.selectNodeContents(
                  o.rows[o.rows.length - 1].lastElementChild
                ),
                n.collapse(!1),
                e.preventDefault(),
                !0
              );
            }
            return !(
              "ArrowDown" !== e.key ||
              !t ||
              "TABLE" !==
                (null === (i = t.nextElementSibling) || void 0 === i
                  ? void 0
                  : i.tagName) ||
              (n.selectNodeContents(t.nextElementSibling.rows[0].cells[0]),
              n.collapse(!0),
              e.preventDefault(),
              0)
            );
          },
          St = function (e, t, n) {
            return Ge(void 0, void 0, void 0, function () {
              var r, o, a, s, l, c, d, u, p, m, f, h, g, v, y, w;
              return Ke(this, function (_) {
                switch (_.label) {
                  case 0:
                    return "true" !==
                      e[e.currentMode].element.getAttribute("contenteditable")
                      ? [2]
                      : (t.stopPropagation(),
                        t.preventDefault(),
                        "clipboardData" in t
                          ? ((r = t.clipboardData.getData("text/html")),
                            (o = t.clipboardData.getData("text/plain")),
                            (a = t.clipboardData.files))
                          : ((r = t.dataTransfer.getData("text/html")),
                            (o = t.dataTransfer.getData("text/plain")),
                            t.dataTransfer.types.includes("Files") &&
                              (a = t.dataTransfer.items)),
                        (s = {}),
                        (l = function (t, n) {
                          if (!n) return ["", Lute.WalkContinue];
                          if (e.options.upload.renderLinkDest)
                            return e.options.upload.renderLinkDest(e, t, n);
                          var r = t.TokensStr();
                          if (
                            34 === t.__internal_object__.Parent.Type &&
                            r &&
                            -1 === r.indexOf("file://") &&
                            e.options.upload.linkToImgUrl
                          ) {
                            var i = new XMLHttpRequest();
                            i.open("POST", e.options.upload.linkToImgUrl),
                              e.options.upload.token &&
                                i.setRequestHeader(
                                  "X-Upload-Token",
                                  e.options.upload.token
                                ),
                              e.options.upload.withCredentials &&
                                (i.withCredentials = !0),
                              Be(e, i),
                              i.setRequestHeader(
                                "Content-Type",
                                "application/json; charset=utf-8"
                              ),
                              (i.onreadystatechange = function () {
                                if (i.readyState === XMLHttpRequest.DONE) {
                                  if (200 === i.status) {
                                    var t = i.responseText;
                                    e.options.upload.linkToImgFormat &&
                                      (t = e.options.upload.linkToImgFormat(
                                        i.responseText
                                      ));
                                    var n = JSON.parse(t);
                                    if (0 !== n.code)
                                      return void e.tip.show(n.msg);
                                    var r = n.data.originalURL;
                                    if ("sv" === e.currentMode)
                                      e.sv.element
                                        .querySelectorAll(
                                          ".vditor-sv__marker--link"
                                        )
                                        .forEach(function (e) {
                                          e.textContent === r &&
                                            (e.textContent = n.data.url);
                                        });
                                    else {
                                      var o = e[
                                        e.currentMode
                                      ].element.querySelector(
                                        'img[src="'.concat(r, '"]')
                                      );
                                      (o.src = n.data.url),
                                        "ir" === e.currentMode &&
                                          (o.previousElementSibling.previousElementSibling.innerHTML =
                                            n.data.url);
                                    }
                                    lt(e);
                                  } else e.tip.show(i.responseText);
                                  e.options.upload.linkToImgCallback &&
                                    e.options.upload.linkToImgCallback(
                                      i.responseText
                                    );
                                }
                              }),
                              i.send(JSON.stringify({ url: r }));
                          }
                          return "ir" === e.currentMode
                            ? [
                                '<span class="vditor-ir__marker vditor-ir__marker--link">'.concat(
                                  Lute.EscapeHTMLStr(r),
                                  "</span>"
                                ),
                                Lute.WalkContinue,
                              ]
                            : "wysiwyg" === e.currentMode
                            ? ["", Lute.WalkContinue]
                            : [
                                '<span class="vditor-sv__marker--link">'.concat(
                                  Lute.EscapeHTMLStr(r),
                                  "</span>"
                                ),
                                Lute.WalkContinue,
                              ];
                        }),
                        (r
                          .replace(/&amp;/g, "&")
                          .replace(/<(|\/)(html|body|meta)[^>]*?>/gi, "")
                          .trim() !==
                          '<a href="'.concat(o, '">').concat(o, "</a>") &&
                          r
                            .replace(/&amp;/g, "&")
                            .replace(/<(|\/)(html|body|meta)[^>]*?>/gi, "")
                            .trim() !==
                            '\x3c!--StartFragment--\x3e<a href="'
                              .concat(o, '">')
                              .concat(o, "</a>\x3c!--EndFragment--\x3e")) ||
                          (r = ""),
                        (c = new DOMParser().parseFromString(r, "text/html"))
                          .body && (r = c.body.innerHTML),
                        (r = Lute.Sanitize(r)),
                        e.wysiwyg.getComments(e),
                        (d = e[e.currentMode].element.scrollHeight),
                        (u = (function (e, t, n) {
                          void 0 === n && (n = "sv");
                          var r = document.createElement("div");
                          r.innerHTML = e;
                          var i = !1;
                          1 === r.childElementCount &&
                            r.lastElementChild.style.fontFamily.indexOf(
                              "monospace"
                            ) > -1 &&
                            (i = !0);
                          var o = r.querySelectorAll("pre");
                          if (
                            (1 === r.childElementCount &&
                              1 === o.length &&
                              "vditor-wysiwyg" !== o[0].className &&
                              "vditor-sv" !== o[0].className &&
                              (i = !0),
                            0 === e.indexOf('\n<p class="p1">') && (i = !0),
                            1 === r.childElementCount &&
                              "TABLE" === r.firstElementChild.tagName &&
                              r.querySelector(".line-number") &&
                              r.querySelector(".line-content") &&
                              (i = !0),
                            i)
                          ) {
                            var a = t || e;
                            return /\n/.test(a) || 1 === o.length
                              ? "wysiwyg" === n
                                ? '<div class="vditor-wysiwyg__block" data-block="0" data-type="code-block"><pre><code>'.concat(
                                    a
                                      .replace(/&/g, "&amp;")
                                      .replace(/</g, "&lt;"),
                                    "<wbr></code></pre></div>"
                                  )
                                : "\n```\n" +
                                  a
                                    .replace(/&/g, "&amp;")
                                    .replace(/</g, "&lt;") +
                                  "\n```"
                              : "wysiwyg" === n
                              ? "<code>".concat(
                                  a
                                    .replace(/&/g, "&amp;")
                                    .replace(/</g, "&lt;"),
                                  "</code><wbr>"
                                )
                              : "`".concat(a, "`");
                          }
                          return !1;
                        })(r, o, e.currentMode)),
                        (p =
                          "sv" === e.currentMode
                            ? (0, b.a1)(t.target, "data-type", "code-block")
                            : (0, b.lG)(t.target, "CODE"))
                          ? ("sv" === e.currentMode
                              ? document.execCommand(
                                  "insertHTML",
                                  !1,
                                  o.replace(/&/g, "&amp;").replace(/</g, "&lt;")
                                )
                              : ((m = (0, N.im)(
                                  t.target,
                                  e[e.currentMode].element
                                )),
                                "PRE" !== p.parentElement.tagName &&
                                  (o += i.g.ZWSP),
                                (p.textContent =
                                  p.textContent.substring(0, m.start) +
                                  o +
                                  p.textContent.substring(m.end)),
                                (0, N.$j)(
                                  m.start + o.length,
                                  m.start + o.length,
                                  p.parentElement
                                ),
                                (null === (w = p.parentElement) || void 0 === w
                                  ? void 0
                                  : w.nextElementSibling.classList.contains(
                                      "vditor-".concat(
                                        e.currentMode,
                                        "__preview"
                                      )
                                    )) &&
                                  ((p.parentElement.nextElementSibling.innerHTML =
                                    p.outerHTML),
                                  H(p.parentElement.nextElementSibling, e))),
                            [3, 8])
                          : [3, 1]);
                  case 1:
                    return u ? (n.pasteCode(u), [3, 8]) : [3, 2];
                  case 2:
                    return "" === r.trim()
                      ? [3, 3]
                      : (((f = document.createElement("div")).innerHTML = r),
                        f.querySelectorAll("[style]").forEach(function (e) {
                          e.removeAttribute("style");
                        }),
                        f
                          .querySelectorAll(".vditor-copy")
                          .forEach(function (e) {
                            e.remove();
                          }),
                        "ir" === e.currentMode
                          ? ((s.HTML2VditorIRDOM = { renderLinkDest: l }),
                            e.lute.SetJSRenderers({ renderers: s }),
                            (0, N.oC)(e.lute.HTML2VditorIRDOM(f.innerHTML), e))
                          : "wysiwyg" === e.currentMode
                          ? ((s.HTML2VditorDOM = { renderLinkDest: l }),
                            e.lute.SetJSRenderers({ renderers: s }),
                            (0, N.oC)(e.lute.HTML2VditorDOM(f.innerHTML), e))
                          : ((s.Md2VditorSVDOM = { renderLinkDest: l }),
                            e.lute.SetJSRenderers({ renderers: s }),
                            He(e, e.lute.HTML2Md(f.innerHTML).trimRight())),
                        e.outline.render(e),
                        [3, 8]);
                  case 3:
                    return a.length > 0
                      ? e.options.upload.url || e.options.upload.handler
                        ? [4, Ue(e, a)]
                        : [3, 5]
                      : [3, 7];
                  case 4:
                    return _.sent(), [3, 6];
                  case 5:
                    (h = new FileReader()),
                      "clipboardData" in t
                        ? ((a = t.clipboardData.files), (g = a[0]))
                        : t.dataTransfer.types.includes("Files") &&
                          ((a = t.dataTransfer.items), (g = a[0].getAsFile())),
                      g &&
                        g.type.startsWith("image") &&
                        (h.readAsDataURL(g),
                        (h.onload = function () {
                          var t = "";
                          "wysiwyg" === e.currentMode
                            ? (t += '<img alt="'
                                .concat(g.name, '" src="')
                                .concat(h.result.toString(), '">\n'))
                            : (t += "!["
                                .concat(g.name, "](")
                                .concat(h.result.toString(), ")\n")),
                            document.execCommand("insertHTML", !1, t);
                        })),
                      (_.label = 6);
                  case 6:
                    return [3, 8];
                  case 7:
                    "" !== o.trim() &&
                      0 === a.length &&
                      ("" !== (y = (0, N.zh)(e)).toString() &&
                        e.lute.IsValidLinkDest(o) &&
                        (o = "[".concat(y.toString(), "](").concat(o, ")")),
                      "ir" === e.currentMode
                        ? ((s.Md2VditorIRDOM = { renderLinkDest: l }),
                          e.lute.SetJSRenderers({ renderers: s }),
                          (0, N.oC)(e.lute.Md2VditorIRDOM(o), e))
                        : "wysiwyg" === e.currentMode
                        ? ((s.Md2VditorDOM = { renderLinkDest: l }),
                          e.lute.SetJSRenderers({ renderers: s }),
                          (0, N.oC)(e.lute.Md2VditorDOM(o), e))
                        : ((s.Md2VditorSVDOM = { renderLinkDest: l }),
                          e.lute.SetJSRenderers({ renderers: s }),
                          He(e, o)),
                      e.outline.render(e)),
                      (_.label = 8);
                  case 8:
                    return (
                      "sv" !== e.currentMode &&
                        ((v = (0, b.F9)((0, N.zh)(e).startContainer)) &&
                          ((y = (0, N.zh)(e)),
                          e[e.currentMode].element
                            .querySelectorAll("wbr")
                            .forEach(function (e) {
                              e.remove();
                            }),
                          y.insertNode(document.createElement("wbr")),
                          "wysiwyg" === e.currentMode
                            ? (v.outerHTML = e.lute.SpinVditorDOM(v.outerHTML))
                            : (v.outerHTML = e.lute.SpinVditorIRDOM(
                                v.outerHTML
                              )),
                          (0, N.ib)(e[e.currentMode].element, y)),
                        e[e.currentMode].element
                          .querySelectorAll(
                            ".vditor-".concat(
                              e.currentMode,
                              "__preview[data-render='2']"
                            )
                          )
                          .forEach(function (t) {
                            H(t, e);
                          })),
                      e.wysiwyg.triggerRemoveComment(e),
                      lt(e),
                      e[e.currentMode].element.scrollHeight - d >
                        Math.min(
                          e[e.currentMode].element.clientHeight,
                          window.innerHeight
                        ) /
                          2 && Me(e),
                      [2]
                    );
                }
              });
            });
          },
          Lt = function (e) {
            e.hint.render(e);
            var t = (0, N.zh)(e).startContainer,
              n = (0, b.a1)(t, "data-type", "code-block-info");
            if (n)
              if (
                "" === n.textContent.replace(i.g.ZWSP, "") &&
                e.hint.recentLanguage
              )
                (n.textContent = i.g.ZWSP + e.hint.recentLanguage),
                  (0, N.zh)(e).selectNodeContents(n);
              else {
                var r = [],
                  o = n.textContent
                    .substring(0, (0, N.im)(n, e.ir.element).start)
                    .replace(i.g.ZWSP, "");
                (e.options.preview.hljs.langs || i.g.CODE_LANGUAGES).forEach(
                  function (e) {
                    e.indexOf(o.toLowerCase()) > -1 &&
                      r.push({ html: e, value: e });
                  }
                ),
                  e.hint.genHTML(r, o, e);
              }
          },
          Ct = function (e, t) {
            void 0 === t &&
              (t = { enableAddUndoStack: !0, enableHint: !1, enableInput: !0 }),
              t.enableHint && Lt(e),
              clearTimeout(e.ir.processTimeoutId),
              (e.ir.processTimeoutId = window.setTimeout(function () {
                if (!e.ir.composingLock) {
                  var n = a(e);
                  "function" == typeof e.options.input &&
                    t.enableInput &&
                    e.options.input(n),
                    e.options.counter.enable && e.counter.render(e, n),
                    e.options.cache.enable &&
                      (0, c.pK)() &&
                      (localStorage.setItem(e.options.cache.id, n),
                      e.options.cache.after && e.options.cache.after(n)),
                    e.devtools && e.devtools.renderEchart(e),
                    t.enableAddUndoStack && e.undo.addToUndoStack(e);
                }
              }, e.options.undoDelay));
          },
          xt = function (e, t) {
            var n = (0, N.zh)(e),
              r = (0, b.F9)(n.startContainer) || n.startContainer;
            if (r) {
              var i = r.querySelector(".vditor-ir__marker--heading");
              i
                ? (i.innerHTML = t)
                : (r.insertAdjacentText("afterbegin", t),
                  n.selectNodeContents(r),
                  n.collapse(!1)),
                P(e, n.cloneRange()),
                J(e);
            }
          },
          Mt = function (e, t, n) {
            var r = (0, b.a1)(e.startContainer, "data-type", n);
            if (r) {
              r.firstElementChild.remove(),
                r.lastElementChild.remove(),
                e.insertNode(document.createElement("wbr"));
              var i = document.createElement("div");
              (i.innerHTML = t.lute.SpinVditorIRDOM(r.outerHTML)),
                (r.outerHTML = i.firstElementChild.innerHTML.trim());
            }
          },
          Tt = function (e, t, n, r) {
            var i = (0, N.zh)(e),
              o = t.getAttribute("data-type"),
              a = i.startContainer;
            3 === a.nodeType && (a = a.parentElement);
            var s = !0;
            if (t.classList.contains("vditor-menu--current"))
              if ("quote" === o) {
                var l = (0, b.lG)(a, "BLOCKQUOTE");
                l &&
                  (i.insertNode(document.createElement("wbr")),
                  (l.outerHTML =
                    "" === l.innerHTML.trim()
                      ? '<p data-block="0">'.concat(l.innerHTML, "</p>")
                      : l.innerHTML));
              } else if ("link" === o) {
                var c = (0, b.a1)(i.startContainer, "data-type", "a");
                if (c) {
                  var u = (0, b.fb)(i.startContainer, "vditor-ir__link");
                  u
                    ? (i.insertNode(document.createElement("wbr")),
                      (c.outerHTML = u.innerHTML))
                    : (c.outerHTML =
                        c.querySelector(".vditor-ir__link").innerHTML +
                        "<wbr>");
                }
              } else
                "italic" === o
                  ? Mt(i, e, "em")
                  : "bold" === o
                  ? Mt(i, e, "strong")
                  : "strike" === o
                  ? Mt(i, e, "s")
                  : "inline-code" === o
                  ? Mt(i, e, "code")
                  : ("check" !== o && "list" !== o && "ordered-list" !== o) ||
                    (nt(e, i, o),
                    (s = !1),
                    t.classList.remove("vditor-menu--current"));
            else {
              0 === e.ir.element.childNodes.length &&
                ((e.ir.element.innerHTML = '<p data-block="0"><wbr></p>'),
                (0, N.ib)(e.ir.element, i));
              var p = (0, b.F9)(i.startContainer);
              if ("line" === o) {
                if (p) {
                  var m = '<hr data-block="0"><p data-block="0"><wbr>\n</p>';
                  "" === p.innerHTML.trim()
                    ? (p.outerHTML = m)
                    : p.insertAdjacentHTML("afterend", m);
                }
              } else if ("quote" === o)
                p &&
                  (i.insertNode(document.createElement("wbr")),
                  (p.outerHTML = '<blockquote data-block="0">'.concat(
                    p.outerHTML,
                    "</blockquote>"
                  )),
                  (s = !1),
                  t.classList.add("vditor-menu--current"));
              else if ("link" === o) {
                var f = void 0;
                (f =
                  "" === i.toString()
                    ? "".concat(n, "<wbr>").concat(r)
                    : ""
                        .concat(n)
                        .concat(i.toString())
                        .concat(r.replace(")", "<wbr>)"))),
                  document.execCommand("insertHTML", !1, f),
                  (s = !1),
                  t.classList.add("vditor-menu--current");
              } else if (
                "italic" === o ||
                "bold" === o ||
                "strike" === o ||
                "inline-code" === o ||
                "code" === o ||
                "table" === o
              ) {
                (f = void 0),
                  "" === i.toString()
                    ? (f = "".concat(n, "<wbr>").concat(r))
                    : ((f =
                        "code" === o
                          ? ""
                              .concat(n, "\n")
                              .concat(i.toString(), "<wbr>")
                              .concat(r)
                          : "table" === o
                          ? "".concat(n).concat(i.toString(), "<wbr>").concat(r)
                          : ""
                              .concat(n)
                              .concat(i.toString())
                              .concat(r, "<wbr>")),
                      i.deleteContents()),
                  ("table" !== o && "code" !== o) || (f = "\n" + f + "\n\n");
                var h = document.createElement("span");
                (h.innerHTML = f),
                  i.insertNode(h),
                  P(e, i),
                  "table" === o &&
                    (i.selectNodeContents(
                      getSelection().getRangeAt(0).startContainer.parentElement
                    ),
                    (0, N.Hc)(i));
              } else
                ("check" !== o && "list" !== o && "ordered-list" !== o) ||
                  (nt(e, i, o, !1),
                  (s = !1),
                  d(e.toolbar.elements, ["check", "list", "ordered-list"]),
                  t.classList.add("vditor-menu--current"));
            }
            (0, N.ib)(e.ir.element, i), Ct(e), s && J(e);
          },
          At = function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function a(e) {
                try {
                  l(r.next(e));
                } catch (t) {
                  o(t);
                }
              }
              function s(e) {
                try {
                  l(r.throw(e));
                } catch (t) {
                  o(t);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, s);
              }
              l((r = r.apply(e, t || [])).next());
            });
          },
          Ht = function (e, t) {
            var n,
              r,
              i,
              o,
              a = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function s(s) {
              return function (l) {
                return (function (s) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; o && ((o = 0), s[0] && (a = 0)), a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & s[0]
                              ? r.return
                              : s[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                          !(i = i.call(r, s[1])).done)
                      )
                        return i;
                      switch (((r = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                        case 0:
                        case 1:
                          i = s;
                          break;
                        case 4:
                          return a.label++, { value: s[1], done: !1 };
                        case 5:
                          a.label++, (r = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !(
                              (i =
                                (i = a.trys).length > 0 && i[i.length - 1]) ||
                              (6 !== s[0] && 2 !== s[0])
                            )
                          ) {
                            a = 0;
                            continue;
                          }
                          if (
                            3 === s[0] &&
                            (!i || (s[1] > i[0] && s[1] < i[3]))
                          ) {
                            a.label = s[1];
                            break;
                          }
                          if (6 === s[0] && a.label < i[1]) {
                            (a.label = i[1]), (i = s);
                            break;
                          }
                          if (i && a.label < i[2]) {
                            (a.label = i[2]), a.ops.push(s);
                            break;
                          }
                          i[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      s = t.call(e, a);
                    } catch (l) {
                      (s = [6, l]), (r = 0);
                    } finally {
                      n = i = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                })([s, l]);
              };
            }
          },
          Nt = (function () {
            function e(e) {
              var t = this;
              (this.splitChar = ""),
                (this.lastIndex = -1),
                (this.fillEmoji = function (e, n) {
                  t.element.style.display = "none";
                  var r = decodeURIComponent(e.getAttribute("data-value")),
                    o = window.getSelection().getRangeAt(0);
                  if ("ir" === n.currentMode) {
                    var a = (0, b.a1)(
                      o.startContainer,
                      "data-type",
                      "code-block-info"
                    );
                    if (a)
                      return (
                        (a.textContent = i.g.ZWSP + r.trimRight()),
                        o.selectNodeContents(a),
                        o.collapse(!1),
                        Ct(n),
                        a.parentElement
                          .querySelectorAll("code")
                          .forEach(function (e) {
                            e.className = "language-" + r.trimRight();
                          }),
                        H(
                          a.parentElement.querySelector(".vditor-ir__preview"),
                          n
                        ),
                        void (t.recentLanguage = r.trimRight())
                      );
                  }
                  if (
                    "wysiwyg" === n.currentMode &&
                    3 !== o.startContainer.nodeType
                  ) {
                    var s = o.startContainer,
                      l = void 0;
                    if (
                      (l = s.classList.contains("vditor-input")
                        ? s
                        : s.firstElementChild) &&
                      l.classList.contains("vditor-input")
                    )
                      return (
                        (l.value = r.trimRight()),
                        o.selectNodeContents(l),
                        o.collapse(!1),
                        l.dispatchEvent(
                          new CustomEvent("input", { detail: 1 })
                        ),
                        void (t.recentLanguage = r.trimRight())
                      );
                  }
                  if (
                    (o.setStart(o.startContainer, t.lastIndex),
                    o.deleteContents(),
                    n.options.hint.parse
                      ? "sv" === n.currentMode
                        ? (0, N.oC)(n.lute.SpinVditorSVDOM(r), n)
                        : "wysiwyg" === n.currentMode
                        ? (0, N.oC)(n.lute.SpinVditorDOM(r), n)
                        : (0, N.oC)(n.lute.SpinVditorIRDOM(r), n)
                      : (0, N.oC)(r, n),
                    ":" === t.splitChar &&
                      r.indexOf(":") > -1 &&
                      "sv" !== n.currentMode &&
                      o.insertNode(document.createTextNode(" ")),
                    o.collapse(!1),
                    (0, N.Hc)(o),
                    "wysiwyg" === n.currentMode)
                  )
                    (c = (0, b.fb)(
                      o.startContainer,
                      "vditor-wysiwyg__block"
                    )) &&
                      c.lastElementChild.classList.contains(
                        "vditor-wysiwyg__preview"
                      ) &&
                      ((c.lastElementChild.innerHTML =
                        c.firstElementChild.innerHTML),
                      H(c.lastElementChild, n));
                  else if ("ir" === n.currentMode) {
                    var c;
                    (c = (0, b.fb)(
                      o.startContainer,
                      "vditor-ir__marker--pre"
                    )) &&
                      c.nextElementSibling.classList.contains(
                        "vditor-ir__preview"
                      ) &&
                      ((c.nextElementSibling.innerHTML = c.innerHTML),
                      H(c.nextElementSibling, n));
                  }
                  lt(n);
                }),
                (this.timeId = -1),
                (this.element = document.createElement("div")),
                (this.element.className = "vditor-hint"),
                (this.recentLanguage = ""),
                e.push({ key: ":" });
            }
            return (
              (e.prototype.render = function (e) {
                var t = this;
                if (window.getSelection().focusNode) {
                  var n,
                    r = getSelection().getRangeAt(0);
                  n =
                    r.startContainer.textContent.substring(0, r.startOffset) ||
                    "";
                  var i = this.getKey(n, e.options.hint.extend);
                  if (void 0 === i)
                    (this.element.style.display = "none"),
                      clearTimeout(this.timeId);
                  else if (":" === this.splitChar) {
                    var o =
                        "" === i ? e.options.hint.emoji : e.lute.GetEmojis(),
                      a = [];
                    Object.keys(o).forEach(function (e) {
                      0 === e.indexOf(i.toLowerCase()) &&
                        (o[e].indexOf(".") > -1
                          ? a.push({
                              html: '<img src="'
                                .concat(o[e], '" title=":')
                                .concat(e, ':"/> :')
                                .concat(e, ":"),
                              value: ":".concat(e, ":"),
                            })
                          : a.push({
                              html: '<span class="vditor-hint__emoji">'
                                .concat(o[e], "</span>")
                                .concat(e),
                              value: o[e],
                            }));
                    }),
                      this.genHTML(a, i, e);
                  } else
                    e.options.hint.extend.forEach(function (n) {
                      n.key === t.splitChar &&
                        (clearTimeout(t.timeId),
                        (t.timeId = window.setTimeout(function () {
                          return At(t, void 0, void 0, function () {
                            var t;
                            return Ht(this, function (r) {
                              switch (r.label) {
                                case 0:
                                  return (t = this.genHTML), [4, n.hint(i)];
                                case 1:
                                  return t.apply(this, [r.sent(), i, e]), [2];
                              }
                            });
                          });
                        }, e.options.hint.delay)));
                    });
                }
              }),
              (e.prototype.genHTML = function (e, t, n) {
                var r = this;
                if (0 !== e.length) {
                  var i = n[n.currentMode].element,
                    o = (0, N.Ny)(i),
                    a =
                      o.left +
                      ("left" === n.options.outline.position
                        ? n.outline.element.offsetWidth
                        : 0),
                    s = o.top,
                    l = "";
                  e.forEach(function (e, n) {
                    if (!(n > 7)) {
                      var r = e.html;
                      if ("" !== t) {
                        var i = r.lastIndexOf(">") + 1,
                          o = r.substr(i),
                          a = o.toLowerCase().indexOf(t.toLowerCase());
                        a > -1 &&
                          ((o =
                            o.substring(0, a) +
                            "<b>" +
                            o.substring(a, a + t.length) +
                            "</b>" +
                            o.substring(a + t.length)),
                          (r = r.substr(0, i) + o));
                      }
                      l += '<button type="button" data-value="'
                        .concat(encodeURIComponent(e.value), ' "\n')
                        .concat(
                          0 === n ? "class='vditor-hint--current'" : "",
                          "> "
                        )
                        .concat(r, "</button>");
                    }
                  }),
                    (this.element.innerHTML = l);
                  var c = parseInt(
                    document.defaultView
                      .getComputedStyle(i, null)
                      .getPropertyValue("line-height"),
                    10
                  );
                  (this.element.style.top = "".concat(s + (c || 22), "px")),
                    (this.element.style.left = "".concat(a, "px")),
                    (this.element.style.display = "block"),
                    (this.element.style.right = "auto"),
                    this.element
                      .querySelectorAll("button")
                      .forEach(function (e) {
                        e.addEventListener("click", function (t) {
                          r.fillEmoji(e, n), t.preventDefault();
                        });
                      }),
                    this.element.getBoundingClientRect().bottom >
                      window.innerHeight &&
                      (this.element.style.top = "".concat(
                        s - this.element.offsetHeight,
                        "px"
                      )),
                    this.element.getBoundingClientRect().right >
                      window.innerWidth &&
                      ((this.element.style.left = "auto"),
                      (this.element.style.right = "0"));
                } else this.element.style.display = "none";
              }),
              (e.prototype.select = function (e, t) {
                if (
                  0 === this.element.querySelectorAll("button").length ||
                  "none" === this.element.style.display
                )
                  return !1;
                var n = this.element.querySelector(".vditor-hint--current");
                if ("ArrowDown" === e.key)
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    n.removeAttribute("class"),
                    n.nextElementSibling
                      ? (n.nextElementSibling.className =
                          "vditor-hint--current")
                      : (this.element.children[0].className =
                          "vditor-hint--current"),
                    !0
                  );
                if ("ArrowUp" === e.key) {
                  if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    n.removeAttribute("class"),
                    n.previousElementSibling)
                  )
                    n.previousElementSibling.className = "vditor-hint--current";
                  else {
                    var r = this.element.children.length;
                    this.element.children[r - 1].className =
                      "vditor-hint--current";
                  }
                  return !0;
                }
                return !(
                  (0, c.yl)(e) ||
                  e.shiftKey ||
                  e.altKey ||
                  "Enter" !== e.key ||
                  e.isComposing ||
                  (e.preventDefault(),
                  e.stopPropagation(),
                  this.fillEmoji(n, t),
                  0)
                );
              }),
              (e.prototype.getKey = function (e, t) {
                var n,
                  r = this;
                if (
                  ((this.lastIndex = -1),
                  (this.splitChar = ""),
                  t.forEach(function (t) {
                    var n = e.lastIndexOf(t.key);
                    r.lastIndex < n &&
                      ((r.splitChar = t.key), (r.lastIndex = n));
                  }),
                  -1 === this.lastIndex)
                )
                  return n;
                var i = e.split(this.splitChar),
                  a = i[i.length - 1];
                if (i.length > 1 && a.trim() === a)
                  if (2 === i.length && "" === i[0] && i[1].length < 32)
                    n = i[1];
                  else {
                    var s = i[i.length - 2].slice(-1);
                    " " === (0, o.X)(s) && a.length < 32 && (n = a);
                  }
                return n;
              }),
              e
            );
          })(),
          jt = (function () {
            function e(e) {
              this.composingLock = !1;
              var t = document.createElement("div");
              (t.className = "vditor-ir"),
                (t.innerHTML = '<pre class="vditor-reset" placeholder="'.concat(
                  e.options.placeholder,
                  '"\n contenteditable="true" spellcheck="false"></pre>'
                )),
                (this.element = t.firstElementChild),
                this.bindEvent(e),
                ke(e, this.element),
                Ee(e, this.element),
                Se(e, this.element),
                Te(e, this.element),
                Ae(e, this.element),
                Le(e, this.element),
                Ce(e, this.element, this.copy),
                xe(e, this.element, this.copy);
            }
            return (
              (e.prototype.copy = function (e, t) {
                var n = getSelection().getRangeAt(0);
                if ("" !== n.toString()) {
                  e.stopPropagation(), e.preventDefault();
                  var r = document.createElement("div");
                  r.appendChild(n.cloneContents()),
                    e.clipboardData.setData(
                      "text/plain",
                      t.lute.VditorIRDOM2Md(r.innerHTML).trim()
                    ),
                    e.clipboardData.setData("text/html", "");
                }
              }),
              (e.prototype.bindEvent = function (e) {
                var t = this;
                this.element.addEventListener("paste", function (t) {
                  St(e, t, {
                    pasteCode: function (e) {
                      document.execCommand("insertHTML", !1, e);
                    },
                  });
                }),
                  this.element.addEventListener("scroll", function () {
                    g(e, ["hint"]);
                  }),
                  this.element.addEventListener(
                    "compositionstart",
                    function (e) {
                      t.composingLock = !0;
                    }
                  ),
                  this.element.addEventListener("compositionend", function (n) {
                    (0, c.vU)() ||
                      P(e, getSelection().getRangeAt(0).cloneRange()),
                      (t.composingLock = !1);
                  }),
                  this.element.addEventListener("input", function (n) {
                    if (
                      "deleteByDrag" !== n.inputType &&
                      "insertFromDrop" !== n.inputType
                    )
                      return t.preventInput
                        ? ((t.preventInput = !1),
                          void Ct(e, {
                            enableAddUndoStack: !0,
                            enableHint: !0,
                            enableInput: !0,
                          }))
                        : void (
                            t.composingLock ||
                            "‘" === n.data ||
                            "“" === n.data ||
                            "《" === n.data ||
                            P(
                              e,
                              getSelection().getRangeAt(0).cloneRange(),
                              !1,
                              n
                            )
                          );
                  }),
                  this.element.addEventListener("click", function (n) {
                    if ("INPUT" === n.target.tagName)
                      return (
                        n.target.checked
                          ? n.target.setAttribute("checked", "checked")
                          : n.target.removeAttribute("checked"),
                        (t.preventInput = !0),
                        void Ct(e)
                      );
                    var r = (0, N.zh)(e),
                      o = (0, b.fb)(n.target, "vditor-ir__preview");
                    if (
                      (o ||
                        (o = (0, b.fb)(r.startContainer, "vditor-ir__preview")),
                      o &&
                        (o.previousElementSibling.firstElementChild
                          ? r.selectNodeContents(
                              o.previousElementSibling.firstElementChild
                            )
                          : r.selectNodeContents(o.previousElementSibling),
                        r.collapse(!0),
                        (0, N.Hc)(r),
                        Me(e)),
                      "IMG" === n.target.tagName)
                    ) {
                      var a = n.target.parentElement.querySelector(
                        ".vditor-ir__marker--link"
                      );
                      a && (r.selectNode(a), (0, N.Hc)(r));
                    }
                    var s = (0, b.a1)(n.target, "data-type", "a");
                    if (!s || s.classList.contains("vditor-ir__node--expand")) {
                      if (
                        n.target.isEqualNode(t.element) &&
                        t.element.lastElementChild &&
                        r.collapsed
                      ) {
                        var l =
                          t.element.lastElementChild.getBoundingClientRect();
                        n.y > l.top + l.height &&
                          ("P" === t.element.lastElementChild.tagName &&
                          "" ===
                            t.element.lastElementChild.textContent
                              .trim()
                              .replace(i.g.ZWSP, "")
                            ? (r.selectNodeContents(t.element.lastElementChild),
                              r.collapse(!1))
                            : (t.element.insertAdjacentHTML(
                                "beforeend",
                                '<p data-block="0">'.concat(
                                  i.g.ZWSP,
                                  "<wbr></p>"
                                )
                              ),
                              (0, N.ib)(t.element, r)));
                      }
                      "" === r.toString()
                        ? R(r, e)
                        : setTimeout(function () {
                            R((0, N.zh)(e), e);
                          }),
                        O(n, e),
                        J(e);
                    } else e.options.link.click ? e.options.link.click(s.querySelector(":scope > .vditor-ir__marker--link")) : e.options.link.isOpen && window.open(s.querySelector(":scope > .vditor-ir__marker--link").textContent);
                  }),
                  this.element.addEventListener("keyup", function (n) {
                    if (!n.isComposing && !(0, c.yl)(n))
                      if (
                        ("Enter" === n.key && Me(e),
                        J(e),
                        ("Backspace" !== n.key && "Delete" !== n.key) ||
                          "" === e.ir.element.innerHTML ||
                          1 !== e.ir.element.childNodes.length ||
                          !e.ir.element.firstElementChild ||
                          "P" !== e.ir.element.firstElementChild.tagName ||
                          0 !==
                            e.ir.element.firstElementChild.childElementCount ||
                          ("" !== e.ir.element.textContent &&
                            "\n" !== e.ir.element.textContent))
                      ) {
                        var r = (0, N.zh)(e);
                        "Backspace" === n.key
                          ? ((0, c.vU)() &&
                              "\n" === r.startContainer.textContent &&
                              1 === r.startOffset &&
                              ((r.startContainer.textContent = ""), R(r, e)),
                            t.element
                              .querySelectorAll(".language-math")
                              .forEach(function (e) {
                                var t = e.querySelector("br");
                                t && t.remove();
                              }))
                          : n.key.indexOf("Arrow") > -1
                          ? (("ArrowLeft" !== n.key &&
                              "ArrowRight" !== n.key) ||
                              Lt(e),
                            R(r, e))
                          : 229 === n.keyCode &&
                            "" === n.code &&
                            "Unidentified" === n.key &&
                            R(r, e);
                        var o = (0, b.fb)(
                          r.startContainer,
                          "vditor-ir__preview"
                        );
                        if (o) {
                          if ("ArrowUp" === n.key || "ArrowLeft" === n.key)
                            return (
                              o.previousElementSibling.firstElementChild
                                ? r.selectNodeContents(
                                    o.previousElementSibling.firstElementChild
                                  )
                                : r.selectNodeContents(
                                    o.previousElementSibling
                                  ),
                              r.collapse(!1),
                              n.preventDefault(),
                              !0
                            );
                          if (
                            "SPAN" === o.tagName &&
                            ("ArrowDown" === n.key || "ArrowRight" === n.key)
                          )
                            return (
                              "html-entity" ===
                              o.parentElement.getAttribute("data-type")
                                ? (o.parentElement.insertAdjacentText(
                                    "afterend",
                                    i.g.ZWSP
                                  ),
                                  r.setStart(o.parentElement.nextSibling, 1))
                                : r.selectNodeContents(
                                    o.parentElement.lastElementChild
                                  ),
                              r.collapse(!1),
                              n.preventDefault(),
                              !0
                            );
                        }
                      } else e.ir.element.innerHTML = "";
                  });
              }),
              e
            );
          })(),
          Ot = function (e) {
            return "sv" === e.currentMode
              ? e.lute.Md2HTML(a(e))
              : "wysiwyg" === e.currentMode
              ? e.lute.VditorDOM2HTML(e.wysiwyg.element.innerHTML)
              : "ir" === e.currentMode
              ? e.lute.VditorIRDOM2HTML(e.ir.element.innerHTML)
              : void 0;
          },
          Dt = n(65),
          Pt = n(182),
          It = (function () {
            function e(e) {
              (this.element = document.createElement("div")),
                (this.element.className = "vditor-outline"),
                (this.element.innerHTML =
                  '<div class="vditor-outline__title">'.concat(
                    e,
                    '</div>\n<div class="vditor-outline__content"></div>'
                  ));
            }
            return (
              (e.prototype.render = function (e) {
                return "block" === e.preview.element.style.display
                  ? (0, Pt.k)(
                      e.preview.previewElement,
                      this.element.lastElementChild,
                      e
                    )
                  : (0, Pt.k)(
                      e[e.currentMode].element,
                      this.element.lastElementChild,
                      e
                    );
              }),
              (e.prototype.toggle = function (e, t, n) {
                var r;
                void 0 === t && (t = !0), void 0 === n && (n = !0);
                var o =
                  null === (r = e.toolbar.elements.outline) || void 0 === r
                    ? void 0
                    : r.firstElementChild;
                if (
                  (t && window.innerWidth >= i.g.MOBILE_WIDTH
                    ? ((this.element.style.display = "block"),
                      this.render(e),
                      null == o || o.classList.add("vditor-menu--current"))
                    : ((this.element.style.display = "none"),
                      null == o || o.classList.remove("vditor-menu--current")),
                  n && getSelection().rangeCount > 0)
                ) {
                  var a = getSelection().getRangeAt(0);
                  e[e.currentMode].element.contains(a.startContainer) &&
                    (0, N.Hc)(a);
                }
                W(e);
              }),
              e
            );
          })(),
          Rt = n(431),
          Bt = (function () {
            function e(e) {
              var t = this;
              (this.element = document.createElement("div")),
                (this.element.className = "vditor-preview"),
                (this.previewElement = document.createElement("div")),
                (this.previewElement.className = "vditor-reset"),
                e.options.classes.preview &&
                  this.previewElement.classList.add(e.options.classes.preview),
                (this.previewElement.style.maxWidth =
                  e.options.preview.maxWidth + "px"),
                this.previewElement.addEventListener("copy", function (n) {
                  if ("TEXTAREA" !== n.target.tagName) {
                    var r = document.createElement("div");
                    (r.className = "vditor-reset"),
                      r.appendChild(
                        getSelection().getRangeAt(0).cloneContents()
                      ),
                      t.copyToX(e, r, "default"),
                      n.preventDefault();
                  }
                }),
                this.previewElement.addEventListener("click", function (n) {
                  var r = (0, b.lG)(n.target, "SPAN");
                  if (r && (0, b.fb)(r, "vditor-toc")) {
                    var i = t.previewElement.querySelector(
                      "#" + r.getAttribute("data-target-id")
                    );
                    i && (t.element.scrollTop = i.offsetTop);
                  } else {
                    if ("A" === n.target.tagName)
                      return (
                        e.options.link.click
                          ? e.options.link.click(n.target)
                          : e.options.link.isOpen &&
                            window.open(n.target.getAttribute("href")),
                        void n.preventDefault()
                      );
                    "IMG" === n.target.tagName &&
                      (e.options.image.preview
                        ? e.options.image.preview(n.target)
                        : e.options.image.isPreview &&
                          (0, B.E)(n.target, e.options.lang, e.options.theme));
                  }
                }),
                this.element.appendChild(this.previewElement);
              var n = e.options.preview.actions;
              if (0 !== n.length) {
                var r = document.createElement("div");
                r.className = "vditor-preview__action";
                for (var i = [], o = 0; o < n.length; o++) {
                  var a = n[o];
                  if ("object" != typeof a)
                    switch (a) {
                      case "desktop":
                        i.push(
                          '<button type="button" class="vditor-preview__action--current" data-type="desktop">Desktop</button>'
                        );
                        break;
                      case "tablet":
                        i.push(
                          '<button type="button" data-type="tablet">Tablet</button>'
                        );
                        break;
                      case "mobile":
                        i.push(
                          '<button type="button" data-type="mobile">Mobile/Wechat</button>'
                        );
                        break;
                      case "mp-wechat":
                        i.push(
                          '<button type="button" data-type="mp-wechat" class="vditor-tooltipped vditor-tooltipped__w" aria-label="复制到公众号"><svg><use xlink:href="#vditor-icon-mp-wechat"></use></svg></button>'
                        );
                        break;
                      case "zhihu":
                        i.push(
                          '<button type="button" data-type="zhihu" class="vditor-tooltipped vditor-tooltipped__w" aria-label="复制到知乎"><svg><use xlink:href="#vditor-icon-zhihu"></use></svg></button>'
                        );
                    }
                  else
                    i.push(
                      '<button type="button" data-type="'
                        .concat(a.key, '" class="')
                        .concat(a.className, '"')
                        .concat(
                          a.tooltip
                            ? ' aria-label="'.concat(a.tooltip, '"')
                            : "",
                          '">'
                        )
                        .concat(a.text, "</button>")
                    );
                }
                (r.innerHTML = i.join("")),
                  r.addEventListener((0, c.Le)(), function (i) {
                    var o = (0, y.S)(i.target, "BUTTON");
                    if (o) {
                      var a = o.getAttribute("data-type"),
                        s = n.find(function (e) {
                          return (null == e ? void 0 : e.key) === a;
                        });
                      s
                        ? s.click(a)
                        : "mp-wechat" !== a && "zhihu" !== a
                        ? ((t.previewElement.style.width =
                            "desktop" === a
                              ? "auto"
                              : "tablet" === a
                              ? "780px"
                              : "360px"),
                          t.previewElement.scrollWidth >
                            t.previewElement.parentElement.clientWidth &&
                            (t.previewElement.style.width = "auto"),
                          t.render(e),
                          r.querySelectorAll("button").forEach(function (e) {
                            e.classList.remove(
                              "vditor-preview__action--current"
                            );
                          }),
                          o.classList.add("vditor-preview__action--current"))
                        : t.copyToX(e, t.previewElement.cloneNode(!0), a);
                    }
                  }),
                  this.element.insertBefore(r, this.previewElement);
              }
            }
            return (
              (e.prototype.render = function (e, t) {
                var n = this;
                if (
                  (clearTimeout(this.mdTimeoutId),
                  "none" !== this.element.style.display)
                )
                  if (t) this.previewElement.innerHTML = t;
                  else if (
                    "" !==
                    a(e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                  ) {
                    var r = new Date().getTime(),
                      i = a(e);
                    this.mdTimeoutId = window.setTimeout(function () {
                      if (e.options.preview.url) {
                        var t = new XMLHttpRequest();
                        t.open("POST", e.options.preview.url),
                          t.setRequestHeader(
                            "Content-Type",
                            "application/json;charset=UTF-8"
                          ),
                          (t.onreadystatechange = function () {
                            if (t.readyState === XMLHttpRequest.DONE)
                              if (200 === t.status) {
                                var o = JSON.parse(t.responseText);
                                if (0 !== o.code) return void e.tip.show(o.msg);
                                e.options.preview.transform &&
                                  (o.data = e.options.preview.transform(
                                    o.data
                                  )),
                                  (n.previewElement.innerHTML = o.data),
                                  n.afterRender(e, r);
                              } else {
                                var a = e.lute.Md2HTML(i);
                                e.options.preview.transform &&
                                  (a = e.options.preview.transform(a)),
                                  (n.previewElement.innerHTML = a),
                                  n.afterRender(e, r);
                              }
                          }),
                          t.send(JSON.stringify({ markdownText: i }));
                      } else {
                        var o = e.lute.Md2HTML(i);
                        e.options.preview.transform &&
                          (o = e.options.preview.transform(o)),
                          (n.previewElement.innerHTML = o),
                          n.afterRender(e, r);
                      }
                    }, e.options.preview.delay);
                  } else this.previewElement.innerHTML = "";
                else
                  "renderPerformance" ===
                    this.element.getAttribute("data-type") && e.tip.hide();
              }),
              (e.prototype.afterRender = function (e, t) {
                e.options.preview.parse &&
                  e.options.preview.parse(this.element);
                var n = new Date().getTime() - t;
                new Date().getTime() - t > 2600
                  ? (e.tip.show(
                      window.VditorI18n.performanceTip.replace(
                        "${x}",
                        n.toString()
                      )
                    ),
                    e.preview.element.setAttribute(
                      "data-type",
                      "renderPerformance"
                    ))
                  : "renderPerformance" ===
                      e.preview.element.getAttribute("data-type") &&
                    (e.tip.hide(),
                    e.preview.element.removeAttribute("data-type"));
                var r = e.preview.element.querySelector(
                  ".vditor-comment--focus"
                );
                r && r.classList.remove("vditor-comment--focus"),
                  (0, k.O)(e.preview.previewElement, e.options.preview.hljs),
                  (0, L.s)(
                    e.options.preview.hljs,
                    e.preview.previewElement,
                    e.options.cdn
                  ),
                  (0, x.i)(
                    e.preview.previewElement,
                    e.options.cdn,
                    e.options.theme
                  ),
                  (0, M.K)(
                    e.preview.previewElement,
                    e.options.cdn,
                    e.options.theme
                  ),
                  (0, E.P)(e.preview.previewElement, e.options.cdn),
                  (0, S.v)(e.preview.previewElement, e.options.cdn),
                  (0, _.p)(
                    e.preview.previewElement,
                    e.options.cdn,
                    e.options.theme
                  ),
                  (0, T.P)(
                    e.preview.previewElement,
                    e.options.cdn,
                    e.options.theme
                  ),
                  (0, A.B)(e.preview.previewElement, e.options.cdn),
                  (0, w.Q)(e.preview.previewElement, e.options.cdn),
                  e.options.preview.render.media.enable &&
                    (0, Rt.Y)(e.preview.previewElement),
                  e.options.customRenders.forEach(function (t) {
                    t.render(e.preview.previewElement, e);
                  });
                var i = e.preview.element,
                  o = e.outline.render(e);
                "" === o && (o = "[ToC]"),
                  i
                    .querySelectorAll('[data-type="toc-block"]')
                    .forEach(function (t) {
                      (t.innerHTML = o),
                        (0, C.H)(t, {
                          cdn: e.options.cdn,
                          math: e.options.preview.math,
                        });
                    }),
                  (0, C.H)(e.preview.previewElement, {
                    cdn: e.options.cdn,
                    math: e.options.preview.math,
                  });
              }),
              (e.prototype.copyToX = function (e, t, n) {
                void 0 === n && (n = "mp-wechat"),
                  "zhihu" !== n
                    ? t
                        .querySelectorAll(".katex-html .base")
                        .forEach(function (e) {
                          e.style.display = "initial";
                        })
                    : t
                        .querySelectorAll(".language-math")
                        .forEach(function (e) {
                          e.outerHTML =
                            '<img class="Formula-image" data-eeimg="true" src="//www.zhihu.com/equation?tex=" alt="'.concat(
                              e.getAttribute("data-math"),
                              '\\" style="display: block; margin: 0 auto; max-width: 100%;">'
                            );
                        }),
                  (t.style.backgroundColor = "#fff"),
                  t.querySelectorAll("code").forEach(function (e) {
                    e.style.backgroundImage = "none";
                  }),
                  this.element.append(t);
                var r = t.ownerDocument.createRange();
                r.selectNode(t),
                  (0, N.Hc)(r),
                  document.execCommand("copy"),
                  t.remove(),
                  e.tip.show(
                    ["zhihu", "mp-wechat"].includes(n)
                      ? "已复制，可到".concat(
                          "zhihu" === n ? "知乎" : "微信公众号平台",
                          "进行粘贴"
                        )
                      : "已复制到剪切板"
                  );
              }),
              e
            );
          })(),
          zt = (function () {
            function e(e) {
              (this.element = document.createElement("div")),
                (this.element.className =
                  "vditor-resize vditor-resize--".concat(
                    e.options.resize.position
                  )),
                (this.element.innerHTML =
                  '<div><svg><use xlink:href="#vditor-icon-resize"></use></svg></div>'),
                this.bindEvent(e);
            }
            return (
              (e.prototype.bindEvent = function (e) {
                var t = this;
                this.element.addEventListener("mousedown", function (n) {
                  var r = document,
                    i = n.clientY,
                    o = e.element.offsetHeight,
                    a =
                      63 +
                      e.element.querySelector(".vditor-toolbar").clientHeight;
                  (r.ondragstart = function () {
                    return !1;
                  }),
                    window.captureEvents && window.captureEvents(),
                    t.element.classList.add("vditor-resize--selected"),
                    (r.onmousemove = function (t) {
                      "top" === e.options.resize.position
                        ? (e.element.style.height =
                            Math.max(a, o + (i - t.clientY)) + "px")
                        : (e.element.style.height =
                            Math.max(a, o + (t.clientY - i)) + "px"),
                        e.options.typewriterMode &&
                          (e.sv.element.style.paddingBottom =
                            e.sv.element.parentElement.offsetHeight / 2 + "px");
                    }),
                    (r.onmouseup = function () {
                      e.options.resize.after &&
                        e.options.resize.after(e.element.offsetHeight - o),
                        window.captureEvents && window.captureEvents(),
                        (r.onmousemove = null),
                        (r.onmouseup = null),
                        (r.ondragstart = null),
                        (r.onselectstart = null),
                        (r.onselect = null),
                        t.element.classList.remove("vditor-resize--selected");
                    });
                });
              }),
              e
            );
          })(),
          qt = (function () {
            function e(e) {
              (this.composingLock = !1),
                (this.element = document.createElement("pre")),
                (this.element.className = "vditor-sv vditor-reset"),
                this.element.setAttribute("placeholder", e.options.placeholder),
                this.element.setAttribute("contenteditable", "true"),
                this.element.setAttribute("spellcheck", "false"),
                this.bindEvent(e),
                ke(e, this.element),
                Se(e, this.element),
                Te(e, this.element),
                Ae(e, this.element),
                Le(e, this.element),
                Ce(e, this.element, this.copy),
                xe(e, this.element, this.copy);
            }
            return (
              (e.prototype.copy = function (e, t) {
                e.stopPropagation(),
                  e.preventDefault(),
                  e.clipboardData.setData(
                    "text/plain",
                    _e(t[t.currentMode].element)
                  );
              }),
              (e.prototype.bindEvent = function (e) {
                var t = this;
                this.element.addEventListener("paste", function (t) {
                  St(e, t, {
                    pasteCode: function (e) {
                      document.execCommand("insertHTML", !1, e);
                    },
                  });
                }),
                  this.element.addEventListener("scroll", function () {
                    if ("block" === e.preview.element.style.display) {
                      var n = t.element.scrollTop,
                        r = t.element.clientHeight,
                        i =
                          t.element.scrollHeight -
                          parseFloat(t.element.style.paddingBottom || "0"),
                        o = e.preview.element;
                      o.scrollTop =
                        n / r > 0.5
                          ? ((n + r) * o.scrollHeight) / i - r
                          : (n * o.scrollHeight) / i;
                    }
                  }),
                  this.element.addEventListener(
                    "compositionstart",
                    function (e) {
                      t.composingLock = !0;
                    }
                  ),
                  this.element.addEventListener("compositionend", function (n) {
                    (0, c.vU)() || q(e, n), (t.composingLock = !1);
                  }),
                  this.element.addEventListener("input", function (n) {
                    if (
                      "deleteByDrag" !== n.inputType &&
                      "insertFromDrop" !== n.inputType &&
                      !t.composingLock &&
                      "‘" !== n.data &&
                      "“" !== n.data &&
                      "《" !== n.data
                    )
                      return t.preventInput
                        ? ((t.preventInput = !1),
                          void De(e, {
                            enableAddUndoStack: !0,
                            enableHint: !0,
                            enableInput: !0,
                          }))
                        : void q(e, n);
                  }),
                  this.element.addEventListener("keyup", function (t) {
                    t.isComposing ||
                      (0, c.yl)(t) ||
                      (("Backspace" !== t.key && "Delete" !== t.key) ||
                      "" === e.sv.element.innerHTML ||
                      1 !== e.sv.element.childNodes.length ||
                      !e.sv.element.firstElementChild ||
                      "DIV" !== e.sv.element.firstElementChild.tagName ||
                      2 !== e.sv.element.firstElementChild.childElementCount ||
                      ("" !== e.sv.element.firstElementChild.textContent &&
                        "\n" !== e.sv.element.textContent)
                        ? "Enter" === t.key && Me(e)
                        : (e.sv.element.innerHTML = ""));
                  });
              }),
              e
            );
          })(),
          Vt = (function () {
            function e() {
              (this.element = document.createElement("div")),
                (this.element.className = "vditor-tip");
            }
            return (
              (e.prototype.show = function (e, t) {
                var n = this;
                void 0 === t && (t = 6e3),
                  (this.element.className = "vditor-tip vditor-tip--show"),
                  0 === t
                    ? ((this.element.innerHTML =
                        '<div class="vditor-tip__content">'.concat(
                          e,
                          '\n<div class="vditor-tip__close">X</div></div>'
                        )),
                      this.element
                        .querySelector(".vditor-tip__close")
                        .addEventListener("click", function () {
                          n.hide();
                        }))
                    : ((this.element.innerHTML =
                        '<div class="vditor-tip__content">'.concat(
                          e,
                          "</div>"
                        )),
                      setTimeout(function () {
                        n.hide();
                      }, t)),
                  this.element.removeAttribute("style"),
                  setTimeout(function () {
                    n.element.getBoundingClientRect().top < 46 &&
                      ((n.element.style.position = "fixed"),
                      (n.element.style.top = "46px"));
                  }, 150);
              }),
              (e.prototype.hide = function () {
                (this.element.className = "vditor-messageElementtip"),
                  (this.element.innerHTML = "");
              }),
              e
            );
          })(),
          Ut = function (e, t) {
            if (t.options.preview.mode !== e) {
              switch (((t.options.preview.mode = e), e)) {
                case "both":
                  (t.sv.element.style.display = "block"),
                    (t.preview.element.style.display = "block"),
                    t.preview.render(t),
                    u(t.toolbar.elements, ["both"]);
                  break;
                case "editor":
                  (t.sv.element.style.display = "block"),
                    (t.preview.element.style.display = "none"),
                    d(t.toolbar.elements, ["both"]);
              }
              t.devtools && t.devtools.renderEchart(t);
            }
          },
          Wt = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          Gt = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this;
              return (
                "both" === t.options.preview.mode &&
                  r.element.children[0].classList.add("vditor-menu--current"),
                r.element.children[0].addEventListener(
                  (0, c.Le)(),
                  function (e) {
                    r.element.firstElementChild.classList.contains(
                      i.g.CLASS_MENU_DISABLED
                    ) ||
                      (e.preventDefault(),
                      "sv" === t.currentMode &&
                        ("both" === t.options.preview.mode
                          ? Ut("editor", t)
                          : Ut("both", t)));
                  }
                ),
                r
              );
            }
            return Wt(t, e), t;
          })(ve),
          Kt = function () {
            (this.element = document.createElement("div")),
              (this.element.className = "vditor-toolbar__br");
          },
          Ft = n(34),
          $t = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          Zt = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this,
                o = r.element.children[0],
                a = document.createElement("div");
              a.className = "vditor-hint".concat(
                2 === n.level ? "" : " vditor-panel--arrow"
              );
              var s = "";
              return (
                i.g.CODE_THEME.forEach(function (e) {
                  s += "<button>".concat(e, "</button>");
                }),
                (a.innerHTML = '<div style="overflow: auto;max-height:'
                  .concat(window.innerHeight / 2, 'px">')
                  .concat(s, "</div>")),
                a.addEventListener((0, c.Le)(), function (e) {
                  "BUTTON" === e.target.tagName &&
                    (g(t, ["subToolbar"]),
                    (t.options.preview.hljs.style = e.target.textContent),
                    (0, Ft.Y)(e.target.textContent, t.options.cdn),
                    e.preventDefault(),
                    e.stopPropagation());
                }),
                r.element.appendChild(a),
                v(t, a, o, n.level),
                r
              );
            }
            return $t(t, e), t;
          })(ve),
          Jt = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          Xt = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this,
                i = r.element.children[0],
                o = document.createElement("div");
              o.className = "vditor-hint".concat(
                2 === n.level ? "" : " vditor-panel--arrow"
              );
              var a = "";
              return (
                Object.keys(t.options.preview.theme.list).forEach(function (e) {
                  a += '<button data-type="'
                    .concat(e, '">')
                    .concat(t.options.preview.theme.list[e], "</button>");
                }),
                (o.innerHTML = '<div style="overflow: auto;max-height:'
                  .concat(window.innerHeight / 2, 'px">')
                  .concat(a, "</div>")),
                o.addEventListener((0, c.Le)(), function (e) {
                  "BUTTON" === e.target.tagName &&
                    (g(t, ["subToolbar"]),
                    (t.options.preview.theme.current =
                      e.target.getAttribute("data-type")),
                    (0, V.Z)(
                      t.options.preview.theme.current,
                      t.options.preview.theme.path
                    ),
                    e.preventDefault(),
                    e.stopPropagation());
                }),
                r.element.appendChild(o),
                v(t, o, i, n.level),
                r
              );
            }
            return Jt(t, e), t;
          })(ve),
          Yt = (function () {
            function e(e) {
              (this.element = document.createElement("span")),
                (this.element.className =
                  "vditor-counter vditor-tooltipped vditor-tooltipped__nw"),
                this.render(e, "");
            }
            return (
              (e.prototype.render = function (e, t) {
                var n = t.endsWith("\n") ? t.length - 1 : t.length;
                if ("text" === e.options.counter.type && e[e.currentMode]) {
                  var r = e[e.currentMode].element.cloneNode(!0);
                  r
                    .querySelectorAll(".vditor-wysiwyg__preview")
                    .forEach(function (e) {
                      e.remove();
                    }),
                    (n = r.textContent.length);
                }
                "number" == typeof e.options.counter.max
                  ? (n > e.options.counter.max
                      ? (this.element.className =
                          "vditor-counter vditor-counter--error")
                      : (this.element.className = "vditor-counter"),
                    (this.element.innerHTML = ""
                      .concat(n, "/")
                      .concat(e.options.counter.max)))
                  : (this.element.innerHTML = "".concat(n)),
                  this.element.setAttribute(
                    "aria-label",
                    e.options.counter.type
                  ),
                  e.options.counter.after &&
                    e.options.counter.after(n, {
                      enable: e.options.counter.enable,
                      max: e.options.counter.max,
                      type: e.options.counter.type,
                    });
              }),
              e
            );
          })(),
          Qt = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          en = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this;
              return (
                (r.element.children[0].innerHTML = n.icon),
                r.element.children[0].addEventListener(
                  (0, c.Le)(),
                  function (e) {
                    e.preventDefault(),
                      e.currentTarget.classList.contains(
                        i.g.CLASS_MENU_DISABLED
                      ) || n.click(e, t);
                  }
                ),
                r
              );
            }
            return Qt(t, e), t;
          })(ve),
          tn = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          nn = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this;
              return (
                r.element.firstElementChild.addEventListener(
                  (0, c.Le)(),
                  function (e) {
                    var n = r.element.firstElementChild;
                    n.classList.contains(i.g.CLASS_MENU_DISABLED) ||
                      (e.preventDefault(),
                      n.classList.contains("vditor-menu--current")
                        ? (n.classList.remove("vditor-menu--current"),
                          (t.devtools.element.style.display = "none"),
                          W(t))
                        : (n.classList.add("vditor-menu--current"),
                          (t.devtools.element.style.display = "block"),
                          W(t),
                          t.devtools.renderEchart(t)));
                  }
                ),
                r
              );
            }
            return tn(t, e), t;
          })(ve),
          rn = function () {
            (this.element = document.createElement("div")),
              (this.element.className = "vditor-toolbar__divider");
          },
          on = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          an = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this,
                i = document.createElement("div");
              i.className = "vditor-panel vditor-panel--arrow";
              var o = "";
              return (
                Object.keys(t.options.hint.emoji).forEach(function (e) {
                  var n = t.options.hint.emoji[e];
                  n.indexOf(".") > -1
                    ? (o += '<button data-value=":'
                        .concat(e, ': " data-key=":')
                        .concat(e, ':"><img\ndata-value=":')
                        .concat(e, ': " data-key=":')
                        .concat(e, ':" class="vditor-emojis__icon" src="')
                        .concat(n, '"/></button>'))
                    : (o += '<button data-value="'
                        .concat(n, ' "\n data-key="')
                        .concat(e, '"><span class="vditor-emojis__icon">')
                        .concat(n, "</span></button>"));
                }),
                (i.innerHTML = '<div class="vditor-emojis" style="max-height: '
                  .concat(
                    "auto" === t.options.height
                      ? "auto"
                      : t.options.height - 80,
                    'px">'
                  )
                  .concat(
                    o,
                    '</div><div class="vditor-emojis__tail">\n    <span class="vditor-emojis__tip"></span><span>'
                  )
                  .concat(t.options.hint.emojiTail || "", "</span>\n</div>")),
                r.element.appendChild(i),
                v(t, i, r.element.firstElementChild, n.level),
                r.bindEvent(t),
                r
              );
            }
            return (
              on(t, e),
              (t.prototype.bindEvent = function (e) {
                var t = this;
                this.element.lastElementChild.addEventListener(
                  (0, c.Le)(),
                  function (n) {
                    var r = (0, y.S)(n.target, "BUTTON");
                    if (r) {
                      n.preventDefault();
                      var i = r.getAttribute("data-value"),
                        o = (0, N.zh)(e),
                        a = i;
                      if (
                        ("wysiwyg" === e.currentMode
                          ? (a = e.lute.SpinVditorDOM(i))
                          : "ir" === e.currentMode &&
                            (a = e.lute.SpinVditorIRDOM(i)),
                        i.indexOf(":") > -1 && "sv" !== e.currentMode)
                      ) {
                        var s = document.createElement("div");
                        (s.innerHTML = a),
                          (a =
                            s.firstElementChild.firstElementChild.outerHTML +
                            " "),
                          (0, N.oC)(a, e);
                      } else
                        o.extractContents(),
                          o.insertNode(document.createTextNode(i));
                      o.collapse(!1),
                        (0, N.Hc)(o),
                        (t.element.lastElementChild.style.display = "none"),
                        lt(e);
                    }
                  }
                ),
                  this.element.lastElementChild.addEventListener(
                    "mouseover",
                    function (e) {
                      var n = (0, y.S)(e.target, "BUTTON");
                      n &&
                        (t.element.querySelector(
                          ".vditor-emojis__tip"
                        ).innerHTML = n.getAttribute("data-key"));
                    }
                  );
              }),
              t
            );
          })(ve),
          sn = function (e, t, n) {
            var r = document.createElement("a");
            "download" in r
              ? ((r.download = n),
                (r.style.display = "none"),
                (r.href = URL.createObjectURL(new Blob([t]))),
                document.body.appendChild(r),
                r.click(),
                r.remove())
              : e.tip.show(window.VditorI18n.downloadTip, 0);
          },
          ln = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          cn = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this,
                i = r.element.children[0],
                o = document.createElement("div");
              return (
                (o.className = "vditor-hint".concat(
                  2 === n.level ? "" : " vditor-panel--arrow"
                )),
                (o.innerHTML =
                  '<button data-type="markdown">Markdown</button>\n<button data-type="pdf">PDF</button>\n<button data-type="html">HTML</button>'),
                o.addEventListener((0, c.Le)(), function (e) {
                  var n = e.target;
                  if ("BUTTON" === n.tagName) {
                    switch (n.getAttribute("data-type")) {
                      case "markdown":
                        !(function (e) {
                          var t = a(e);
                          sn(e, t, t.substr(0, 10) + ".md");
                        })(t);
                        break;
                      case "pdf":
                        !(function (e) {
                          e.tip.show(window.VditorI18n.generate, 3800);
                          var t = document.querySelector("#vditorExportIframe");
                          t.contentDocument.open(),
                            t.contentDocument.write(
                              '<link rel="stylesheet" href="'
                                .concat(
                                  e.options.cdn,
                                  '/dist/index.css"/>\n<script src="'
                                )
                                .concat(
                                  e.options.cdn,
                                  '/dist/method.min.js"></script>\n<div id="preview" style="width: 800px"></div>\n<script>\nwindow.addEventListener("message", (e) => {\n  if(!e.data) {\n    return;\n  }\n  Vditor.preview(document.getElementById(\'preview\'), e.data, {\n    cdn: "'
                                )
                                .concat(
                                  e.options.cdn,
                                  '",\n    markdown: {\n      theme: '
                                )
                                .concat(
                                  JSON.stringify(e.options.preview.theme),
                                  '\n    },\n    hljs: {\n      style: "'
                                )
                                .concat(
                                  e.options.preview.hljs.style,
                                  '"\n    }\n  });\n  setTimeout(() => {\n        window.print();\n    }, 3600);\n}, false);\n</script>'
                                )
                            ),
                            t.contentDocument.close(),
                            setTimeout(function () {
                              t.contentWindow.postMessage(a(e), "*");
                            }, 200);
                        })(t);
                        break;
                      case "html":
                        !(function (e) {
                          var t = Ot(e),
                            n =
                              '<html><head><link rel="stylesheet" type="text/css" href="'
                                .concat(
                                  e.options.cdn,
                                  '/dist/index.css"/>\n<script src="'
                                )
                                .concat(e.options.cdn, "/dist/js/i18n/")
                                .concat(
                                  e.options.lang,
                                  '.js"></script>\n<script src="'
                                )
                                .concat(
                                  e.options.cdn,
                                  '/dist/method.min.js"></script></head>\n<body><div class="vditor-reset" id="preview">'
                                )
                                .concat(
                                  t,
                                  "</div>\n<script>\n    const previewElement = document.getElementById('preview')\n    Vditor.setContentTheme('"
                                )
                                .concat(e.options.preview.theme.current, "', '")
                                .concat(
                                  e.options.preview.theme.path,
                                  "');\n    Vditor.codeRender(previewElement);\n    Vditor.highlightRender("
                                )
                                .concat(
                                  JSON.stringify(e.options.preview.hljs),
                                  ", previewElement, '"
                                )
                                .concat(
                                  e.options.cdn,
                                  "');\n    Vditor.mathRender(previewElement, {\n        cdn: '"
                                )
                                .concat(e.options.cdn, "',\n        math: ")
                                .concat(
                                  JSON.stringify(e.options.preview.math),
                                  ",\n    });\n    Vditor.mermaidRender(previewElement, '"
                                )
                                .concat(e.options.cdn, "', '")
                                .concat(
                                  e.options.theme,
                                  "');\n    Vditor.markmapRender(previewElement, '"
                                )
                                .concat(e.options.cdn, "', '")
                                .concat(
                                  e.options.theme,
                                  "');\n    Vditor.flowchartRender(previewElement, '"
                                )
                                .concat(
                                  e.options.cdn,
                                  "');\n    Vditor.graphvizRender(previewElement, '"
                                )
                                .concat(
                                  e.options.cdn,
                                  "');\n    Vditor.chartRender(previewElement, '"
                                )
                                .concat(e.options.cdn, "', '")
                                .concat(
                                  e.options.theme,
                                  "');\n    Vditor.mindmapRender(previewElement, '"
                                )
                                .concat(e.options.cdn, "', '")
                                .concat(
                                  e.options.theme,
                                  "');\n    Vditor.abcRender(previewElement, '"
                                )
                                .concat(e.options.cdn, "');\n    ")
                                .concat(
                                  e.options.preview.render.media.enable
                                    ? "Vditor.mediaRender(previewElement);"
                                    : "",
                                  '\n    Vditor.speechRender(previewElement);\n</script>\n<script src="'
                                )
                                .concat(e.options.cdn, "/dist/js/icons/")
                                .concat(
                                  e.options.icon,
                                  '.js"></script></body></html>'
                                );
                          sn(e, n, t.substr(0, 10) + ".html");
                        })(t);
                    }
                    g(t, ["subToolbar"]),
                      e.preventDefault(),
                      e.stopPropagation();
                  }
                }),
                r.element.appendChild(o),
                v(t, o, i, n.level),
                r
              );
            }
            return ln(t, e), t;
          })(ve),
          dn = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          un = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this;
              return r._bindEvent(t, n), r;
            }
            return (
              dn(t, e),
              (t.prototype._bindEvent = function (e, t) {
                this.element.children[0].addEventListener(
                  (0, c.Le)(),
                  function (n) {
                    n.preventDefault(),
                      e.element.className.includes("vditor--fullscreen")
                        ? (t.level || (this.innerHTML = t.icon),
                          (e.element.style.zIndex = ""),
                          (document.body.style.overflow = ""),
                          e.element.classList.remove("vditor--fullscreen"),
                          Object.keys(e.toolbar.elements).forEach(function (t) {
                            var n = e.toolbar.elements[t].firstChild;
                            n &&
                              ((n.className = n.className.replace(
                                "__s",
                                "__n"
                              )),
                              e.options.toolbar.forEach(function (e) {
                                "string" != typeof e &&
                                  e.tipPosition &&
                                  e.name === n.dataset.type &&
                                  (n.className =
                                    "vditor-tooltipped vditor-tooltipped__".concat(
                                      e.tipPosition
                                    ));
                              }));
                          }),
                          e.counter &&
                            (e.counter.element.className =
                              e.counter.element.className.replace(
                                "__s",
                                "__n"
                              )))
                        : (t.level ||
                            (this.innerHTML =
                              '<svg><use xlink:href="#vditor-icon-contract"></use></svg>'),
                          (e.element.style.zIndex =
                            e.options.fullscreen.index.toString()),
                          (document.body.style.overflow = "hidden"),
                          e.element.classList.add("vditor--fullscreen"),
                          Object.keys(e.toolbar.elements).forEach(function (t) {
                            var n = e.toolbar.elements[t].firstChild;
                            n &&
                              (n.className = n.className.replace("__n", "__s"));
                          }),
                          e.counter &&
                            (e.counter.element.className =
                              e.counter.element.className.replace(
                                "__n",
                                "__s"
                              ))),
                      e.devtools && e.devtools.renderEchart(e),
                      t.click && t.click(n, e),
                      W(e),
                      G(e);
                  }
                );
              }),
              t
            );
          })(ve),
          pn = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          mn = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this,
                i = document.createElement("div");
              return (
                (i.className = "vditor-hint vditor-panel--arrow"),
                (i.innerHTML = '<button data-tag="h1" data-value="# ">'
                  .concat(window.VditorI18n.heading1, " ")
                  .concat(
                    (0, c.ns)("&lt;⌥⌘1>"),
                    '</button>\n<button data-tag="h2" data-value="## ">'
                  )
                  .concat(window.VditorI18n.heading2, " &lt;")
                  .concat(
                    (0, c.ns)("⌥⌘2"),
                    '></button>\n<button data-tag="h3" data-value="### ">'
                  )
                  .concat(window.VditorI18n.heading3, " &lt;")
                  .concat(
                    (0, c.ns)("⌥⌘3"),
                    '></button>\n<button data-tag="h4" data-value="#### ">'
                  )
                  .concat(window.VditorI18n.heading4, " &lt;")
                  .concat(
                    (0, c.ns)("⌥⌘4"),
                    '></button>\n<button data-tag="h5" data-value="##### ">'
                  )
                  .concat(window.VditorI18n.heading5, " &lt;")
                  .concat(
                    (0, c.ns)("⌥⌘5"),
                    '></button>\n<button data-tag="h6" data-value="###### ">'
                  )
                  .concat(window.VditorI18n.heading6, " &lt;")
                  .concat((0, c.ns)("⌥⌘6"), "></button>")),
                r.element.appendChild(i),
                r._bindEvent(t, i),
                r
              );
            }
            return (
              pn(t, e),
              (t.prototype._bindEvent = function (e, t) {
                var n = this.element.children[0];
                n.addEventListener((0, c.Le)(), function (r) {
                  r.preventDefault(),
                    clearTimeout(e.wysiwyg.afterRenderTimeoutId),
                    clearTimeout(e.ir.processTimeoutId),
                    clearTimeout(e.sv.processTimeoutId),
                    n.classList.contains(i.g.CLASS_MENU_DISABLED) ||
                      (n.blur(),
                      n.classList.contains("vditor-menu--current")
                        ? ("wysiwyg" === e.currentMode
                            ? (ne(e), X(e))
                            : "ir" === e.currentMode && xt(e, ""),
                          n.classList.remove("vditor-menu--current"))
                        : (g(e, ["subToolbar"]), (t.style.display = "block")));
                });
                for (var r = 0; r < 6; r++)
                  t.children
                    .item(r)
                    .addEventListener((0, c.Le)(), function (r) {
                      r.preventDefault(),
                        "wysiwyg" === e.currentMode
                          ? (te(e, r.target.getAttribute("data-tag")),
                            X(e),
                            n.classList.add("vditor-menu--current"))
                          : "ir" === e.currentMode
                          ? (xt(e, r.target.getAttribute("data-value")),
                            n.classList.add("vditor-menu--current"))
                          : Pe(e, r.target.getAttribute("data-value")),
                        (t.style.display = "none");
                    });
              }),
              t
            );
          })(ve),
          fn = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          hn = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this;
              return (
                r.element.children[0].addEventListener(
                  (0, c.Le)(),
                  function (e) {
                    e.preventDefault(),
                      t.tip.show(
                        '<div style="margin-bottom:14px;font-size: 14px;line-height: 22px;min-width:300px;max-width: 360px;display: flex;">\n<div style="margin-top: 14px;flex: 1">\n    <div>Markdown 使用指南</div>\n    <ul style="list-style: none">\n        <li><a href="https://ld246.com/article/1583308420519" target="_blank">语法速查手册</a></li>\n        <li><a href="https://ld246.com/article/1583129520165" target="_blank">基础语法</a></li>\n        <li><a href="https://ld246.com/article/1583305480675" target="_blank">扩展语法</a></li>\n        <li><a href="https://ld246.com/article/1582778815353" target="_blank">键盘快捷键</a></li>\n    </ul>\n</div>\n<div style="margin-top: 14px;flex: 1">\n    <div>Vditor 支持</div>\n    <ul style="list-style: none">\n        <li><a href="https://github.com/Vanessa219/vditor/issues" target="_blank">Issues</a></li>\n        <li><a href="https://ld246.com/tag/vditor" target="_blank">官方讨论区</a></li>\n        <li><a href="https://ld246.com/article/1549638745630" target="_blank">开发手册</a></li>\n        <li><a href="https://ld246.com/guide/markdown" target="_blank">演示地址</a></li>\n    </ul>\n</div></div>',
                        0
                      );
                  }
                ),
                r
              );
            }
            return fn(t, e), t;
          })(ve),
          gn = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          vn = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this;
              return (
                r.element.children[0].addEventListener(
                  (0, c.Le)(),
                  function (e) {
                    if (
                      (e.preventDefault(),
                      !r.element.firstElementChild.classList.contains(
                        i.g.CLASS_MENU_DISABLED
                      ) && "sv" !== t.currentMode)
                    ) {
                      var n = (0, N.zh)(t),
                        o = (0, b.lG)(n.startContainer, "LI");
                      o && rt(t, o, n);
                    }
                  }
                ),
                r
              );
            }
            return gn(t, e), t;
          })(ve),
          bn = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          yn = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this;
              return (
                r.element.children[0].addEventListener(
                  (0, c.Le)(),
                  function (e) {
                    e.preventDefault(),
                      t.tip.show(
                        '<div style="max-width: 520px; font-size: 14px;line-height: 22px;margin-bottom: 14px;">\n<p style="text-align: center;margin: 14px 0">\n    <em>下一代的 Markdown 编辑器，为未来而构建</em>\n</p>\n<div style="display: flex;margin-bottom: 14px;flex-wrap: wrap;align-items: center">\n    <img src="https://unpkg.com/vditor/dist/images/logo.png" style="margin: 0 auto;height: 68px"/>\n    <div>&nbsp;&nbsp;</div>\n    <div style="flex: 1;min-width: 250px">\n        Vditor 是一款浏览器端的 Markdown 编辑器，支持所见即所得、即时渲染（类似 Typora）和分屏预览模式。\n        它使用 TypeScript 实现，支持原生 JavaScript 以及 Vue、React、Angular 和 Svelte 等框架。\n    </div>\n</div>\n<div style="display: flex;flex-wrap: wrap;">\n    <ul style="list-style: none;flex: 1;min-width:148px">\n        <li>\n        项目地址：<a href="https://b3log.org/vditor" target="_blank">b3log.org/vditor</a>\n        </li>\n        <li>\n        开源协议：MIT\n        </li>\n    </ul>\n    <ul style="list-style: none;margin-right: 18px">\n        <li>\n        组件版本：Vditor v'
                          .concat(i.H, " / Lute v")
                          .concat(
                            Lute.Version,
                            '\n        </li>\n        <li>\n        赞助捐赠：<a href="https://ld246.com/sponsor" target="_blank">https://ld246.com/sponsor</a>\n        </li>\n    </ul>\n</div>\n</div>'
                          ),
                        0
                      );
                  }
                ),
                r
              );
            }
            return bn(t, e), t;
          })(ve),
          wn = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          _n = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this;
              return (
                r.element.children[0].addEventListener(
                  (0, c.Le)(),
                  function (e) {
                    e.preventDefault(),
                      r.element.firstElementChild.classList.contains(
                        i.g.CLASS_MENU_DISABLED
                      ) ||
                        "sv" === t.currentMode ||
                        Je(t, "afterend");
                  }
                ),
                r
              );
            }
            return wn(t, e), t;
          })(ve),
          kn = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          En = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this;
              return (
                r.element.children[0].addEventListener(
                  (0, c.Le)(),
                  function (e) {
                    e.preventDefault(),
                      r.element.firstElementChild.classList.contains(
                        i.g.CLASS_MENU_DISABLED
                      ) ||
                        "sv" === t.currentMode ||
                        Je(t, "beforebegin");
                  }
                ),
                r
              );
            }
            return kn(t, e), t;
          })(ve),
          Sn = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          Ln = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this;
              return (
                r.element.children[0].addEventListener(
                  (0, c.Le)(),
                  function (e) {
                    if (
                      (e.preventDefault(),
                      !r.element.firstElementChild.classList.contains(
                        i.g.CLASS_MENU_DISABLED
                      ) && "sv" !== t.currentMode)
                    ) {
                      var n = (0, N.zh)(t),
                        o = (0, b.lG)(n.startContainer, "LI");
                      o && it(t, o, n, o.parentElement);
                    }
                  }
                ),
                r
              );
            }
            return Sn(t, e), t;
          })(ve),
          Cn = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          xn = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this;
              return (
                t.options.outline &&
                  r.element.firstElementChild.classList.add(
                    "vditor-menu--current"
                  ),
                r.element.children[0].addEventListener(
                  (0, c.Le)(),
                  function (e) {
                    e.preventDefault(),
                      t.toolbar.elements.outline.firstElementChild.classList.contains(
                        i.g.CLASS_MENU_DISABLED
                      ) ||
                        ((t.options.outline.enable =
                          !r.element.firstElementChild.classList.contains(
                            "vditor-menu--current"
                          )),
                        t.outline.toggle(t, t.options.outline.enable));
                  }
                ),
                r
              );
            }
            return Cn(t, e), t;
          })(ve),
          Mn = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          Tn = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this;
              return r._bindEvent(t), r;
            }
            return (
              Mn(t, e),
              (t.prototype._bindEvent = function (e) {
                var t = this;
                this.element.children[0].addEventListener(
                  (0, c.Le)(),
                  function (n) {
                    n.preventDefault();
                    var r = t.element.firstElementChild;
                    if (!r.classList.contains(i.g.CLASS_MENU_DISABLED)) {
                      var o = i.g.EDIT_TOOLBARS.concat([
                        "both",
                        "edit-mode",
                        "devtools",
                      ]);
                      r.classList.contains("vditor-menu--current")
                        ? (r.classList.remove("vditor-menu--current"),
                          "sv" === e.currentMode
                            ? ((e.sv.element.style.display = "block"),
                              "both" === e.options.preview.mode
                                ? (e.preview.element.style.display = "block")
                                : (e.preview.element.style.display = "none"))
                            : ((e[
                                e.currentMode
                              ].element.parentElement.style.display = "block"),
                              (e.preview.element.style.display = "none")),
                          p(e.toolbar.elements, o),
                          e.outline.render(e))
                        : (m(e.toolbar.elements, o),
                          (e.preview.element.style.display = "block"),
                          "sv" === e.currentMode
                            ? (e.sv.element.style.display = "none")
                            : (e[
                                e.currentMode
                              ].element.parentElement.style.display = "none"),
                          e.preview.render(e),
                          r.classList.add("vditor-menu--current"),
                          g(e, ["subToolbar", "hint", "popover"]),
                          setTimeout(function () {
                            e.outline.render(e);
                          }, e.options.preview.delay + 10)),
                        W(e);
                    }
                  }
                );
              }),
              t
            );
          })(ve),
          An = (function () {
            function e(e) {
              var t;
              if (
                ((this.SAMPLE_RATE = 5e3),
                (this.isRecording = !1),
                (this.readyFlag = !1),
                (this.leftChannel = []),
                (this.rightChannel = []),
                (this.recordingLength = 0),
                "undefined" != typeof AudioContext)
              )
                t = new AudioContext();
              else {
                if (!webkitAudioContext) return;
                t = new webkitAudioContext();
              }
              this.DEFAULT_SAMPLE_RATE = t.sampleRate;
              var n = t.createGain();
              t.createMediaStreamSource(e).connect(n),
                (this.recorder = t.createScriptProcessor(2048, 2, 1)),
                (this.recorder.onaudioprocess = null),
                n.connect(this.recorder),
                this.recorder.connect(t.destination),
                (this.readyFlag = !0);
            }
            return (
              (e.prototype.cloneChannelData = function (e, t) {
                this.leftChannel.push(new Float32Array(e)),
                  this.rightChannel.push(new Float32Array(t)),
                  (this.recordingLength += 2048);
              }),
              (e.prototype.startRecordingNewWavFile = function () {
                this.readyFlag &&
                  ((this.isRecording = !0),
                  (this.leftChannel.length = this.rightChannel.length = 0),
                  (this.recordingLength = 0));
              }),
              (e.prototype.stopRecording = function () {
                this.isRecording = !1;
              }),
              (e.prototype.buildWavFileBlob = function () {
                for (
                  var e = this.mergeBuffers(this.leftChannel),
                    t = this.mergeBuffers(this.rightChannel),
                    n = new Float32Array(e.length),
                    r = 0;
                  r < e.length;
                  ++r
                )
                  n[r] = 0.5 * (e[r] + t[r]);
                this.DEFAULT_SAMPLE_RATE > this.SAMPLE_RATE &&
                  (n = this.downSampleBuffer(n, this.SAMPLE_RATE));
                var i = 44 + 2 * n.length,
                  o = new ArrayBuffer(i),
                  a = new DataView(o);
                this.writeUTFBytes(a, 0, "RIFF"),
                  a.setUint32(4, i, !0),
                  this.writeUTFBytes(a, 8, "WAVE"),
                  this.writeUTFBytes(a, 12, "fmt "),
                  a.setUint32(16, 16, !0),
                  a.setUint16(20, 1, !0),
                  a.setUint16(22, 1, !0),
                  a.setUint32(24, this.SAMPLE_RATE, !0),
                  a.setUint32(28, 2 * this.SAMPLE_RATE, !0),
                  a.setUint16(32, 2, !0),
                  a.setUint16(34, 16, !0);
                var s = 2 * n.length;
                this.writeUTFBytes(a, 36, "data"), a.setUint32(40, s, !0);
                for (var l = n.length, c = 44, d = 0; d < l; d++)
                  a.setInt16(c, 32767 * n[d], !0), (c += 2);
                return new Blob([a], { type: "audio/wav" });
              }),
              (e.prototype.downSampleBuffer = function (e, t) {
                if (t === this.DEFAULT_SAMPLE_RATE) return e;
                if (t > this.DEFAULT_SAMPLE_RATE) return e;
                for (
                  var n = this.DEFAULT_SAMPLE_RATE / t,
                    r = Math.round(e.length / n),
                    i = new Float32Array(r),
                    o = 0,
                    a = 0;
                  o < i.length;

                ) {
                  for (
                    var s = Math.round((o + 1) * n), l = 0, c = 0, d = a;
                    d < s && d < e.length;
                    d++
                  )
                    (l += e[d]), c++;
                  (i[o] = l / c), o++, (a = s);
                }
                return i;
              }),
              (e.prototype.mergeBuffers = function (e) {
                for (
                  var t = new Float32Array(this.recordingLength),
                    n = 0,
                    r = e.length,
                    i = 0;
                  i < r;
                  ++i
                ) {
                  var o = e[i];
                  t.set(o, n), (n += o.length);
                }
                return t;
              }),
              (e.prototype.writeUTFBytes = function (e, t, n) {
                for (var r = n.length, i = 0; i < r; i++)
                  e.setUint8(t + i, n.charCodeAt(i));
              }),
              e
            );
          })(),
          Hn = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          Nn = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this;
              return r._bindEvent(t), r;
            }
            return (
              Hn(t, e),
              (t.prototype._bindEvent = function (e) {
                var t,
                  n = this;
                this.element.children[0].addEventListener(
                  (0, c.Le)(),
                  function (r) {
                    if (
                      (r.preventDefault(),
                      !n.element.firstElementChild.classList.contains(
                        i.g.CLASS_MENU_DISABLED
                      ))
                    ) {
                      var o = e[e.currentMode].element;
                      if (t)
                        if (t.isRecording) {
                          t.stopRecording(), e.tip.hide();
                          var a = new File(
                            [t.buildWavFileBlob()],
                            "record".concat(new Date().getTime(), ".wav"),
                            { type: "video/webm" }
                          );
                          Ue(e, [a]),
                            n.element.children[0].classList.remove(
                              "vditor-menu--current"
                            );
                        } else
                          e.tip.show(window.VditorI18n.recording),
                            o.setAttribute("contenteditable", "false"),
                            t.startRecordingNewWavFile(),
                            n.element.children[0].classList.add(
                              "vditor-menu--current"
                            );
                      else
                        navigator.mediaDevices
                          .getUserMedia({ audio: !0 })
                          .then(function (r) {
                            ((t = new An(r)).recorder.onaudioprocess =
                              function (e) {
                                if (t.isRecording) {
                                  var n = e.inputBuffer.getChannelData(0),
                                    r = e.inputBuffer.getChannelData(1);
                                  t.cloneChannelData(n, r);
                                }
                              }),
                              t.startRecordingNewWavFile(),
                              e.tip.show(window.VditorI18n.recording),
                              o.setAttribute("contenteditable", "false"),
                              n.element.children[0].classList.add(
                                "vditor-menu--current"
                              );
                          })
                          .catch(function () {
                            e.tip.show(window.VditorI18n["record-tip"]);
                          });
                    }
                  }
                );
              }),
              t
            );
          })(ve),
          jn = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          On = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this;
              return (
                m({ redo: r.element }, ["redo"]),
                r.element.children[0].addEventListener(
                  (0, c.Le)(),
                  function (e) {
                    e.preventDefault(),
                      r.element.firstElementChild.classList.contains(
                        i.g.CLASS_MENU_DISABLED
                      ) || t.undo.redo(t);
                  }
                ),
                r
              );
            }
            return jn(t, e), t;
          })(ve),
          Dn = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          Pn = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this;
              return (
                m({ undo: r.element }, ["undo"]),
                r.element.children[0].addEventListener(
                  (0, c.Le)(),
                  function (e) {
                    e.preventDefault(),
                      r.element.firstElementChild.classList.contains(
                        i.g.CLASS_MENU_DISABLED
                      ) || t.undo.undo(t);
                  }
                ),
                r
              );
            }
            return Dn(t, e), t;
          })(ve),
          In = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
          Rn = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this,
                i = '<input type="file"';
              return (
                t.options.upload.multiple && (i += ' multiple="multiple"'),
                t.options.upload.accept &&
                  (i += ' accept="'.concat(t.options.upload.accept, '"')),
                (r.element.children[0].innerHTML = ""
                  .concat(
                    n.icon ||
                      '<svg><use xlink:href="#vditor-icon-upload"></use></svg>'
                  )
                  .concat(i, ">")),
                r._bindEvent(t),
                r
              );
            }
            return (
              In(t, e),
              (t.prototype._bindEvent = function (e) {
                var t = this;
                this.element.children[0].addEventListener(
                  (0, c.Le)(),
                  function (e) {
                    if (
                      t.element.firstElementChild.classList.contains(
                        i.g.CLASS_MENU_DISABLED
                      )
                    )
                      return e.stopPropagation(), void e.preventDefault();
                  }
                ),
                  this.element
                    .querySelector("input")
                    .addEventListener("change", function (n) {
                      if (
                        t.element.firstElementChild.classList.contains(
                          i.g.CLASS_MENU_DISABLED
                        )
                      )
                        return n.stopPropagation(), void n.preventDefault();
                      0 !== n.target.files.length &&
                        Ue(e, n.target.files, n.target);
                    });
              }),
              t
            );
          })(ve),
          Bn = (function () {
            function e(e) {
              var t = this,
                n = e.options;
              (this.elements = {}),
                (this.element = document.createElement("div")),
                (this.element.className = "vditor-toolbar"),
                n.toolbar.forEach(function (n, r) {
                  var i = t.genItem(e, n, r);
                  if ((t.element.appendChild(i), n.toolbar)) {
                    var o = document.createElement("div");
                    (o.className = "vditor-hint vditor-panel--arrow"),
                      o.addEventListener((0, c.Le)(), function (e) {
                        o.style.display = "none";
                      }),
                      n.toolbar.forEach(function (n, i) {
                        (n.level = 2), o.appendChild(t.genItem(e, n, r + i));
                      }),
                      i.appendChild(o),
                      v(e, o, i.children[0]);
                  }
                }),
                e.options.toolbarConfig.hide &&
                  this.element.classList.add("vditor-toolbar--hide"),
                e.options.toolbarConfig.pin &&
                  this.element.classList.add("vditor-toolbar--pin"),
                e.options.counter.enable &&
                  ((e.counter = new Yt(e)),
                  this.element.appendChild(e.counter.element));
            }
            return (
              (e.prototype.updateConfig = function (e, t) {
                (e.options.toolbarConfig = Object.assign(
                  { hide: !1, pin: !1 },
                  t
                )),
                  e.options.toolbarConfig.hide
                    ? this.element.classList.add("vditor-toolbar--hide")
                    : this.element.classList.remove("vditor-toolbar--hide"),
                  e.options.toolbarConfig.pin
                    ? this.element.classList.add("vditor-toolbar--pin")
                    : this.element.classList.remove("vditor-toolbar--pin");
              }),
              (e.prototype.genItem = function (e, t, n) {
                var r;
                switch (t.name) {
                  case "bold":
                  case "italic":
                  case "more":
                  case "strike":
                  case "line":
                  case "quote":
                  case "list":
                  case "ordered-list":
                  case "check":
                  case "code":
                  case "inline-code":
                  case "link":
                  case "table":
                    r = new ve(e, t);
                    break;
                  case "emoji":
                    r = new an(e, t);
                    break;
                  case "headings":
                    r = new mn(e, t);
                    break;
                  case "|":
                    r = new rn();
                    break;
                  case "br":
                    r = new Kt();
                    break;
                  case "undo":
                    r = new Pn(e, t);
                    break;
                  case "redo":
                    r = new On(e, t);
                    break;
                  case "help":
                    r = new hn(e, t);
                    break;
                  case "both":
                    r = new Gt(e, t);
                    break;
                  case "preview":
                    r = new Tn(e, t);
                    break;
                  case "fullscreen":
                    r = new un(e, t);
                    break;
                  case "upload":
                    r = new Rn(e, t);
                    break;
                  case "record":
                    r = new Nn(e, t);
                    break;
                  case "info":
                    r = new yn(e, t);
                    break;
                  case "edit-mode":
                    r = new we(e, t);
                    break;
                  case "devtools":
                    r = new nn(e, t);
                    break;
                  case "outdent":
                    r = new Ln(e, t);
                    break;
                  case "indent":
                    r = new vn(e, t);
                    break;
                  case "outline":
                    r = new xn(e, t);
                    break;
                  case "insert-after":
                    r = new _n(e, t);
                    break;
                  case "insert-before":
                    r = new En(e, t);
                    break;
                  case "code-theme":
                    r = new Zt(e, t);
                    break;
                  case "content-theme":
                    r = new Xt(e, t);
                    break;
                  case "export":
                    r = new cn(e, t);
                    break;
                  default:
                    r = new en(e, t);
                }
                if (r) {
                  var i = t.name;
                  return (
                    ("br" !== i && "|" !== i) || (i += n),
                    (this.elements[i] = r.element),
                    r.element
                  );
                }
              }),
              e
            );
          })(),
          zn = n(85),
          qn = (function () {
            function e() {
              (this.stackSize = 50), this.resetStack(), (this.dmp = new zn());
            }
            return (
              (e.prototype.clearStack = function (e) {
                this.resetStack(), this.resetIcon(e);
              }),
              (e.prototype.resetIcon = function (e) {
                e.toolbar &&
                  (this[e.currentMode].undoStack.length > 1
                    ? p(e.toolbar.elements, ["undo"])
                    : m(e.toolbar.elements, ["undo"]),
                  0 !== this[e.currentMode].redoStack.length
                    ? p(e.toolbar.elements, ["redo"])
                    : m(e.toolbar.elements, ["redo"]));
              }),
              (e.prototype.undo = function (e) {
                if (
                  "false" !==
                    e[e.currentMode].element.getAttribute("contenteditable") &&
                  !(this[e.currentMode].undoStack.length < 2)
                ) {
                  var t = this[e.currentMode].undoStack.pop();
                  t &&
                    (this[e.currentMode].redoStack.push(t),
                    this.renderDiff(t, e),
                    (this[e.currentMode].hasUndo = !0),
                    g(e, ["hint"]));
                }
              }),
              (e.prototype.redo = function (e) {
                if (
                  "false" !==
                  e[e.currentMode].element.getAttribute("contenteditable")
                ) {
                  var t = this[e.currentMode].redoStack.pop();
                  t &&
                    (this[e.currentMode].undoStack.push(t),
                    this.renderDiff(t, e, !0));
                }
              }),
              (e.prototype.recordFirstPosition = function (e, t) {
                if (
                  0 !== getSelection().rangeCount &&
                  !(
                    1 !== this[e.currentMode].undoStack.length ||
                    0 === this[e.currentMode].undoStack[0].length ||
                    this[e.currentMode].redoStack.length > 0 ||
                    ((0, c.vU)() && "Backspace" === t.key) ||
                    (0, c.G6)()
                  )
                ) {
                  var n = this.addCaret(e);
                  n
                    .replace("<wbr>", "")
                    .replace(" vditor-ir__node--expand", "") ===
                    this[e.currentMode].undoStack[0][0].diffs[0][1].replace(
                      "<wbr>",
                      ""
                    ) &&
                    ((this[e.currentMode].undoStack[0][0].diffs[0][1] = n),
                    (this[e.currentMode].lastText = n));
                }
              }),
              (e.prototype.addToUndoStack = function (e) {
                var t = this.addCaret(e, !0),
                  n = this.dmp.diff_main(t, this[e.currentMode].lastText, !0),
                  r = this.dmp.patch_make(t, this[e.currentMode].lastText, n);
                (0 === r.length && this[e.currentMode].undoStack.length > 0) ||
                  ((this[e.currentMode].lastText = t),
                  this[e.currentMode].undoStack.push(r),
                  this[e.currentMode].undoStack.length > this.stackSize &&
                    this[e.currentMode].undoStack.shift(),
                  this[e.currentMode].hasUndo &&
                    ((this[e.currentMode].redoStack = []),
                    (this[e.currentMode].hasUndo = !1),
                    m(e.toolbar.elements, ["redo"])),
                  this[e.currentMode].undoStack.length > 1 &&
                    p(e.toolbar.elements, ["undo"]));
              }),
              (e.prototype.renderDiff = function (e, t, n) {
                var r;
                if ((void 0 === n && (n = !1), n)) {
                  var i = this.dmp.patch_deepCopy(e).reverse();
                  i.forEach(function (e) {
                    e.diffs.forEach(function (e) {
                      e[0] = -e[0];
                    });
                  }),
                    (r = this.dmp.patch_apply(
                      i,
                      this[t.currentMode].lastText
                    )[0]);
                } else
                  r = this.dmp.patch_apply(e, this[t.currentMode].lastText)[0];
                if (
                  ((this[t.currentMode].lastText = r),
                  (t[t.currentMode].element.innerHTML = r),
                  "sv" !== t.currentMode &&
                    t[t.currentMode].element
                      .querySelectorAll(
                        ".vditor-".concat(
                          t.currentMode,
                          "__preview[data-render='2']"
                        )
                      )
                      .forEach(function (e) {
                        H(e, t);
                      }),
                  t[t.currentMode].element.querySelector("wbr"))
                )
                  (0, N.ib)(
                    t[t.currentMode].element,
                    t[t.currentMode].element.ownerDocument.createRange()
                  ),
                    Me(t);
                else {
                  var o = getSelection().getRangeAt(0);
                  o.setEndBefore(t[t.currentMode].element), o.collapse(!1);
                }
                j(t),
                  lt(t, {
                    enableAddUndoStack: !1,
                    enableHint: !1,
                    enableInput: !0,
                  }),
                  fe(t),
                  t[t.currentMode].element
                    .querySelectorAll(
                      ".vditor-".concat(
                        t.currentMode,
                        "__preview[data-render='2']"
                      )
                    )
                    .forEach(function (e) {
                      H(e, t);
                    }),
                  this[t.currentMode].undoStack.length > 1
                    ? p(t.toolbar.elements, ["undo"])
                    : m(t.toolbar.elements, ["undo"]),
                  0 !== this[t.currentMode].redoStack.length
                    ? p(t.toolbar.elements, ["redo"])
                    : m(t.toolbar.elements, ["redo"]);
              }),
              (e.prototype.resetStack = function () {
                (this.ir = {
                  hasUndo: !1,
                  lastText: "",
                  redoStack: [],
                  undoStack: [],
                }),
                  (this.sv = {
                    hasUndo: !1,
                    lastText: "",
                    redoStack: [],
                    undoStack: [],
                  }),
                  (this.wysiwyg = {
                    hasUndo: !1,
                    lastText: "",
                    redoStack: [],
                    undoStack: [],
                  });
              }),
              (e.prototype.addCaret = function (e, t) {
                var n;
                if (
                  (void 0 === t && (t = !1),
                  0 !== getSelection().rangeCount &&
                    !e[e.currentMode].element.querySelector("wbr"))
                ) {
                  var r = getSelection().getRangeAt(0);
                  if (e[e.currentMode].element.contains(r.startContainer)) {
                    n = r.cloneRange();
                    var i = document.createElement("span");
                    (i.className = "vditor-wbr"), r.insertNode(i);
                  }
                }
                e.ir.element
                  .cloneNode(!0)
                  .querySelectorAll(
                    ".vditor-".concat(
                      e.currentMode,
                      "__preview[data-render='1']"
                    )
                  )
                  .forEach(function (e) {
                    e.firstElementChild &&
                      (e.firstElementChild.classList.contains(
                        "language-echarts"
                      ) ||
                      e.firstElementChild.classList.contains(
                        "language-plantuml"
                      ) ||
                      e.firstElementChild.classList.contains("language-mindmap")
                        ? (e.firstElementChild.removeAttribute(
                            "_echarts_instance_"
                          ),
                          e.firstElementChild.removeAttribute("data-processed"),
                          (e.firstElementChild.innerHTML =
                            e.previousElementSibling.firstElementChild.innerHTML),
                          e.setAttribute("data-render", "2"))
                        : e.firstElementChild.classList.contains(
                            "language-math"
                          ) &&
                          (e.setAttribute("data-render", "2"),
                          (e.firstElementChild.textContent =
                            e.firstElementChild.getAttribute("data-math")),
                          e.firstElementChild.removeAttribute("data-math")));
                  });
                var o = e[e.currentMode].element.innerHTML;
                return (
                  e[e.currentMode].element
                    .querySelectorAll(".vditor-wbr")
                    .forEach(function (e) {
                      e.remove();
                    }),
                  t && n && (0, N.Hc)(n),
                  o.replace('<span class="vditor-wbr"></span>', "<wbr>")
                );
              }),
              e
            );
          })(),
          Vn = n(2),
          Un = (function () {
            function e(e) {
              (this.defaultOptions = {
                rtl: !1,
                after: void 0,
                cache: { enable: !0 },
                cdn: i.g.CDN,
                classes: { preview: "" },
                comment: { enable: !1 },
                counter: { enable: !1, type: "markdown" },
                customRenders: [],
                debugger: !1,
                fullscreen: { index: 90 },
                height: "auto",
                hint: {
                  delay: 200,
                  emoji: {
                    "+1": "👍",
                    "-1": "👎",
                    confused: "😕",
                    eyes: "👀️",
                    heart: "❤️",
                    rocket: "🚀️",
                    smile: "😄",
                    tada: "🎉️",
                  },
                  emojiPath: "".concat(i.g.CDN, "/dist/images/emoji"),
                  extend: [],
                  parse: !0,
                },
                icon: "ant",
                lang: "zh_CN",
                mode: "ir",
                outline: { enable: !1, position: "left" },
                placeholder: "",
                preview: {
                  actions: [
                    "desktop",
                    "tablet",
                    "mobile",
                    "mp-wechat",
                    "zhihu",
                  ],
                  delay: 1e3,
                  hljs: i.g.HLJS_OPTIONS,
                  markdown: i.g.MARKDOWN_OPTIONS,
                  math: i.g.MATH_OPTIONS,
                  maxWidth: 800,
                  mode: "both",
                  theme: i.g.THEME_OPTIONS,
                  render: { media: { enable: !0 } },
                },
                link: { isOpen: !0 },
                image: { isPreview: !0 },
                resize: { enable: !1, position: "bottom" },
                theme: "classic",
                toolbar: [
                  "emoji",
                  "headings",
                  "bold",
                  "italic",
                  "strike",
                  "link",
                  "|",
                  "list",
                  "ordered-list",
                  "check",
                  "outdent",
                  "indent",
                  "|",
                  "quote",
                  "line",
                  "code",
                  "inline-code",
                  "insert-before",
                  "insert-after",
                  "|",
                  "upload",
                  "record",
                  "table",
                  "|",
                  "undo",
                  "redo",
                  "|",
                  "fullscreen",
                  "edit-mode",
                  {
                    name: "more",
                    toolbar: [
                      "both",
                      "code-theme",
                      "content-theme",
                      "export",
                      "outline",
                      "preview",
                      "devtools",
                      "info",
                      "help",
                    ],
                  },
                ],
                toolbarConfig: { hide: !1, pin: !1 },
                typewriterMode: !1,
                undoDelay: 800,
                upload: {
                  extraData: {},
                  fieldName: "file[]",
                  filename: function (e) {
                    return e.replace(/\W/g, "");
                  },
                  linkToImgUrl: "",
                  max: 10485760,
                  multiple: !0,
                  url: "",
                  withCredentials: !1,
                },
                value: "",
                width: "auto",
              }),
                (this.options = e);
            }
            return (
              (e.prototype.merge = function () {
                var e, t, n, r, i, o, a, s, l;
                this.options &&
                  (this.options.toolbar
                    ? (this.options.toolbar = this.mergeToolbar(
                        this.options.toolbar
                      ))
                    : (this.options.toolbar = this.mergeToolbar(
                        this.defaultOptions.toolbar
                      )),
                  (null ===
                    (t =
                      null === (e = this.options.preview) || void 0 === e
                        ? void 0
                        : e.theme) || void 0 === t
                    ? void 0
                    : t.list) &&
                    (this.defaultOptions.preview.theme.list =
                      this.options.preview.theme.list),
                  (null ===
                    (i =
                      null ===
                        (r =
                          null === (n = this.options.preview) || void 0 === n
                            ? void 0
                            : n.render) || void 0 === r
                        ? void 0
                        : r.media) || void 0 === i
                    ? void 0
                    : i.enable) &&
                    (this.defaultOptions.preview.render.media.enable =
                      this.options.preview.render.media.enable),
                  (null === (o = this.options.hint) || void 0 === o
                    ? void 0
                    : o.emoji) &&
                    (this.defaultOptions.hint.emoji = this.options.hint.emoji),
                  this.options.comment &&
                    (this.defaultOptions.comment = this.options.comment),
                  this.options.cdn &&
                    ((null ===
                      (s =
                        null === (a = this.options.preview) || void 0 === a
                          ? void 0
                          : a.theme) || void 0 === s
                      ? void 0
                      : s.path) ||
                      (this.defaultOptions.preview.theme.path = "".concat(
                        this.options.cdn,
                        "/dist/css/content-theme"
                      )),
                    (null === (l = this.options.hint) || void 0 === l
                      ? void 0
                      : l.emojiPath) ||
                      (this.defaultOptions.hint.emojiPath = "".concat(
                        this.options.cdn,
                        "/dist/images/emoji"
                      ))));
                var c = (0, Vn.T)(this.defaultOptions, this.options);
                if (c.cache.enable && !c.cache.id)
                  throw new Error(
                    "need options.cache.id, see https://ld246.com/article/1549638745630#options"
                  );
                return c;
              }),
              (e.prototype.mergeToolbar = function (e) {
                var t = this,
                  n = [
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-export"></use></svg>',
                      name: "export",
                      tipPosition: "ne",
                    },
                    {
                      hotkey: "⌘E",
                      icon: '<svg><use xlink:href="#vditor-icon-emoji"></use></svg>',
                      name: "emoji",
                      tipPosition: "ne",
                    },
                    {
                      hotkey: "⌘H",
                      icon: '<svg><use xlink:href="#vditor-icon-headings"></use></svg>',
                      name: "headings",
                      tipPosition: "ne",
                    },
                    {
                      hotkey: "⌘B",
                      icon: '<svg><use xlink:href="#vditor-icon-bold"></use></svg>',
                      name: "bold",
                      prefix: "**",
                      suffix: "**",
                      tipPosition: "ne",
                    },
                    {
                      hotkey: "⌘I",
                      icon: '<svg><use xlink:href="#vditor-icon-italic"></use></svg>',
                      name: "italic",
                      prefix: "*",
                      suffix: "*",
                      tipPosition: "ne",
                    },
                    {
                      hotkey: "⌘D",
                      icon: '<svg><use xlink:href="#vditor-icon-strike"></use></svg>',
                      name: "strike",
                      prefix: "~~",
                      suffix: "~~",
                      tipPosition: "ne",
                    },
                    {
                      hotkey: "⌘K",
                      icon: '<svg><use xlink:href="#vditor-icon-link"></use></svg>',
                      name: "link",
                      prefix: "[",
                      suffix: "](https://)",
                      tipPosition: "n",
                    },
                    { name: "|" },
                    {
                      hotkey: "⌘L",
                      icon: '<svg><use xlink:href="#vditor-icon-list"></use></svg>',
                      name: "list",
                      prefix: "* ",
                      tipPosition: "n",
                    },
                    {
                      hotkey: "⌘O",
                      icon: '<svg><use xlink:href="#vditor-icon-ordered-list"></use></svg>',
                      name: "ordered-list",
                      prefix: "1. ",
                      tipPosition: "n",
                    },
                    {
                      hotkey: "⌘J",
                      icon: '<svg><use xlink:href="#vditor-icon-check"></use></svg>',
                      name: "check",
                      prefix: "* [ ] ",
                      tipPosition: "n",
                    },
                    {
                      hotkey: "⇧⌘I",
                      icon: '<svg><use xlink:href="#vditor-icon-outdent"></use></svg>',
                      name: "outdent",
                      tipPosition: "n",
                    },
                    {
                      hotkey: "⇧⌘O",
                      icon: '<svg><use xlink:href="#vditor-icon-indent"></use></svg>',
                      name: "indent",
                      tipPosition: "n",
                    },
                    { name: "|" },
                    {
                      hotkey: "⌘;",
                      icon: '<svg><use xlink:href="#vditor-icon-quote"></use></svg>',
                      name: "quote",
                      prefix: "> ",
                      tipPosition: "n",
                    },
                    {
                      hotkey: "⇧⌘H",
                      icon: '<svg><use xlink:href="#vditor-icon-line"></use></svg>',
                      name: "line",
                      prefix: "---",
                      tipPosition: "n",
                    },
                    {
                      hotkey: "⌘U",
                      icon: '<svg><use xlink:href="#vditor-icon-code"></use></svg>',
                      name: "code",
                      prefix: "```",
                      suffix: "\n```",
                      tipPosition: "n",
                    },
                    {
                      hotkey: "⌘G",
                      icon: '<svg><use xlink:href="#vditor-icon-inline-code"></use></svg>',
                      name: "inline-code",
                      prefix: "`",
                      suffix: "`",
                      tipPosition: "n",
                    },
                    {
                      hotkey: "⇧⌘B",
                      icon: '<svg><use xlink:href="#vditor-icon-before"></use></svg>',
                      name: "insert-before",
                      tipPosition: "n",
                    },
                    {
                      hotkey: "⇧⌘E",
                      icon: '<svg><use xlink:href="#vditor-icon-after"></use></svg>',
                      name: "insert-after",
                      tipPosition: "n",
                    },
                    { name: "|" },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-upload"></use></svg>',
                      name: "upload",
                      tipPosition: "n",
                    },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-record"></use></svg>',
                      name: "record",
                      tipPosition: "n",
                    },
                    {
                      hotkey: "⌘M",
                      icon: '<svg><use xlink:href="#vditor-icon-table"></use></svg>',
                      name: "table",
                      prefix: "| col1",
                      suffix:
                        " | col2 | col3 |\n| --- | --- | --- |\n|  |  |  |\n|  |  |  |",
                      tipPosition: "n",
                    },
                    { name: "|" },
                    {
                      hotkey: "⌘Z",
                      icon: '<svg><use xlink:href="#vditor-icon-undo"></use></svg>',
                      name: "undo",
                      tipPosition: "nw",
                    },
                    {
                      hotkey: "⌘Y",
                      icon: '<svg><use xlink:href="#vditor-icon-redo"></use></svg>',
                      name: "redo",
                      tipPosition: "nw",
                    },
                    { name: "|" },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-more"></use></svg>',
                      name: "more",
                      tipPosition: "e",
                    },
                    {
                      hotkey: "⌘'",
                      icon: '<svg><use xlink:href="#vditor-icon-fullscreen"></use></svg>',
                      name: "fullscreen",
                      tipPosition: "nw",
                    },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-edit"></use></svg>',
                      name: "edit-mode",
                      tipPosition: "nw",
                    },
                    {
                      hotkey: "⌘P",
                      icon: '<svg><use xlink:href="#vditor-icon-both"></use></svg>',
                      name: "both",
                      tipPosition: "nw",
                    },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-preview"></use></svg>',
                      name: "preview",
                      tipPosition: "nw",
                    },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-align-center"></use></svg>',
                      name: "outline",
                      tipPosition: "nw",
                    },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-theme"></use></svg>',
                      name: "content-theme",
                      tipPosition: "nw",
                    },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-code-theme"></use></svg>',
                      name: "code-theme",
                      tipPosition: "nw",
                    },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-bug"></use></svg>',
                      name: "devtools",
                      tipPosition: "nw",
                    },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-info"></use></svg>',
                      name: "info",
                      tipPosition: "nw",
                    },
                    {
                      icon: '<svg><use xlink:href="#vditor-icon-help"></use></svg>',
                      name: "help",
                      tipPosition: "nw",
                    },
                    { name: "br" },
                  ],
                  r = [];
                return (
                  e.forEach(function (e) {
                    var i = e;
                    n.forEach(function (t) {
                      "string" == typeof e && t.name === e && (i = t),
                        "object" == typeof e &&
                          t.name === e.name &&
                          (i = Object.assign({}, t, e));
                    }),
                      e.toolbar && (i.toolbar = t.mergeToolbar(e.toolbar)),
                      r.push(i);
                  }),
                  r
                );
              }),
              e
            );
          })(),
          Wn = (function () {
            function e(e) {
              var t = this;
              (this.composingLock = !1), (this.commentIds = []);
              var n = document.createElement("div");
              (n.className = "vditor-wysiwyg"),
                (n.innerHTML = '<pre class="vditor-reset" placeholder="'
                  .concat(
                    e.options.placeholder,
                    '"\n contenteditable="true" spellcheck="false"></pre>\n<div class="vditor-panel vditor-panel--none"></div>\n<div class="vditor-panel vditor-panel--none">\n    <button type="button" aria-label="'
                  )
                  .concat(
                    window.VditorI18n.comment,
                    '" class="vditor-icon vditor-tooltipped vditor-tooltipped__n">\n        <svg><use xlink:href="#vditor-icon-comment"></use></svg>\n    </button>\n</div>'
                  )),
                (this.element = n.firstElementChild),
                (this.popover = n.firstElementChild.nextElementSibling),
                (this.selectPopover = n.lastElementChild),
                this.bindEvent(e),
                ke(e, this.element),
                Ee(e, this.element),
                Se(e, this.element),
                Te(e, this.element),
                Ae(e, this.element),
                Le(e, this.element),
                Ce(e, this.element, this.copy),
                xe(e, this.element, this.copy),
                e.options.comment.enable &&
                  (this.selectPopover.querySelector("button").onclick =
                    function () {
                      var n,
                        r,
                        o = Lute.NewNodeID(),
                        a = getSelection().getRangeAt(0),
                        s = a.cloneRange(),
                        l = a.extractContents(),
                        c = !1,
                        d = !1;
                      l.childNodes.forEach(function (e, t) {
                        var i = !1;
                        if (
                          (3 === e.nodeType
                            ? (i = !0)
                            : e.classList.contains("vditor-comment")
                            ? e.classList.contains("vditor-comment") &&
                              e.setAttribute(
                                "data-cmtids",
                                e.getAttribute("data-cmtids") + " " + o
                              )
                            : (i = !0),
                          i)
                        )
                          if (
                            3 !== e.nodeType &&
                            "0" === e.getAttribute("data-block") &&
                            0 === t &&
                            s.startOffset > 0
                          )
                            (e.innerHTML =
                              '<span class="vditor-comment" data-cmtids="'
                                .concat(o, '">')
                                .concat(e.innerHTML, "</span>")),
                              (n = e);
                          else if (
                            3 !== e.nodeType &&
                            "0" === e.getAttribute("data-block") &&
                            t === l.childNodes.length - 1 &&
                            s.endOffset < s.endContainer.textContent.length
                          )
                            (e.innerHTML =
                              '<span class="vditor-comment" data-cmtids="'
                                .concat(o, '">')
                                .concat(e.innerHTML, "</span>")),
                              (r = e);
                          else if (
                            3 !== e.nodeType &&
                            "0" === e.getAttribute("data-block")
                          )
                            0 === t
                              ? (c = !0)
                              : t === l.childNodes.length - 1 && (d = !0),
                              (e.innerHTML =
                                '<span class="vditor-comment" data-cmtids="'
                                  .concat(o, '">')
                                  .concat(e.innerHTML, "</span>"));
                          else {
                            var a = document.createElement("span");
                            a.classList.add("vditor-comment"),
                              a.setAttribute("data-cmtids", o),
                              e.parentNode.insertBefore(a, e),
                              a.appendChild(e);
                          }
                      });
                      var u = (0, b.F9)(s.startContainer);
                      u &&
                        (n
                          ? (u.insertAdjacentHTML("beforeend", n.innerHTML),
                            n.remove())
                          : "" === u.textContent.trim().replace(i.g.ZWSP, "") &&
                            c &&
                            u.remove());
                      var p = (0, b.F9)(s.endContainer);
                      p &&
                        (r
                          ? (p.insertAdjacentHTML("afterbegin", r.innerHTML),
                            r.remove())
                          : "" === p.textContent.trim().replace(i.g.ZWSP, "") &&
                            d &&
                            p.remove()),
                        a.insertNode(l),
                        e.options.comment.add(
                          o,
                          a.toString(),
                          t.getComments(e, !0)
                        ),
                        X(e, {
                          enableAddUndoStack: !0,
                          enableHint: !1,
                          enableInput: !1,
                        }),
                        t.hideComment();
                    });
            }
            return (
              (e.prototype.getComments = function (e, t) {
                var n = this;
                if (
                  (void 0 === t && (t = !1),
                  "wysiwyg" !== e.currentMode || !e.options.comment.enable)
                )
                  return [];
                (this.commentIds = []),
                  this.element
                    .querySelectorAll(".vditor-comment")
                    .forEach(function (e) {
                      n.commentIds = n.commentIds.concat(
                        e.getAttribute("data-cmtids").split(" ")
                      );
                    }),
                  (this.commentIds = Array.from(new Set(this.commentIds)));
                var r = [];
                return t
                  ? (this.commentIds.forEach(function (e) {
                      r.push({
                        id: e,
                        top: n.element.querySelector(
                          '.vditor-comment[data-cmtids="'.concat(e, '"]')
                        ).offsetTop,
                      });
                    }),
                    r)
                  : void 0;
              }),
              (e.prototype.triggerRemoveComment = function (e) {
                var t, n, r;
                if (
                  "wysiwyg" === e.currentMode &&
                  e.options.comment.enable &&
                  e.wysiwyg.commentIds.length > 0
                ) {
                  var i = JSON.parse(JSON.stringify(this.commentIds));
                  this.getComments(e);
                  var o =
                    ((t = i),
                    (n = this.commentIds),
                    (r = new Set(n)),
                    t.filter(function (e) {
                      return !r.has(e);
                    }));
                  o.length > 0 && e.options.comment.remove(o);
                }
              }),
              (e.prototype.showComment = function () {
                var e = (0, N.Ny)(this.element);
                this.selectPopover.setAttribute(
                  "style",
                  "left:"
                    .concat(e.left, "px;display:block;top:")
                    .concat(Math.max(-8, e.top - 21), "px")
                );
              }),
              (e.prototype.hideComment = function () {
                this.selectPopover.setAttribute("style", "display:none");
              }),
              (e.prototype.unbindListener = function () {
                window.removeEventListener("scroll", this.scrollListener);
              }),
              (e.prototype.copy = function (e, t) {
                var n = getSelection().getRangeAt(0);
                if ("" !== n.toString()) {
                  e.stopPropagation(), e.preventDefault();
                  var r = (0, b.lG)(n.startContainer, "CODE"),
                    i = (0, b.lG)(n.endContainer, "CODE");
                  if (r && i && i.isSameNode(r)) {
                    var o = "";
                    return (
                      (o =
                        "PRE" === r.parentElement.tagName
                          ? n.toString()
                          : "`" + n.toString() + "`"),
                      e.clipboardData.setData("text/plain", o),
                      void e.clipboardData.setData("text/html", "")
                    );
                  }
                  var a = (0, b.lG)(n.startContainer, "A"),
                    s = (0, b.lG)(n.endContainer, "A");
                  if (a && s && s.isSameNode(a)) {
                    var l = a.getAttribute("title") || "";
                    return (
                      l && (l = ' "'.concat(l, '"')),
                      e.clipboardData.setData(
                        "text/plain",
                        "["
                          .concat(n.toString(), "](")
                          .concat(a.getAttribute("href"))
                          .concat(l, ")")
                      ),
                      void e.clipboardData.setData("text/html", "")
                    );
                  }
                  var c = document.createElement("div");
                  c.appendChild(n.cloneContents()),
                    e.clipboardData.setData(
                      "text/plain",
                      t.lute.VditorDOM2Md(c.innerHTML).trim()
                    ),
                    e.clipboardData.setData("text/html", "");
                }
              }),
              (e.prototype.bindEvent = function (e) {
                var t = this;
                this.unbindListener(),
                  window.addEventListener(
                    "scroll",
                    (this.scrollListener = function () {
                      if (
                        (g(e, ["hint"]),
                        "block" === t.popover.style.display &&
                          "block" === t.selectPopover.style.display)
                      ) {
                        var n = parseInt(
                          t.popover.getAttribute("data-top"),
                          10
                        );
                        if ("auto" === e.options.height) {
                          if (e.options.toolbarConfig.pin) {
                            var r =
                              Math.max(
                                n,
                                window.scrollY - e.element.offsetTop - 8
                              ) + "px";
                            "block" === t.popover.style.display &&
                              (t.popover.style.top = r),
                              "block" === t.selectPopover.style.display &&
                                (t.selectPopover.style.top = r);
                          }
                        } else if (
                          e.options.toolbarConfig.pin &&
                          0 === e.toolbar.element.getBoundingClientRect().top
                        ) {
                          var i =
                            Math.max(
                              window.scrollY - e.element.offsetTop - 8,
                              Math.min(
                                n - e.wysiwyg.element.scrollTop,
                                t.element.clientHeight - 21
                              )
                            ) + "px";
                          "block" === t.popover.style.display &&
                            (t.popover.style.top = i),
                            "block" === t.selectPopover.style.display &&
                              (t.selectPopover.style.top = i);
                        }
                      }
                    })
                  ),
                  this.element.addEventListener("scroll", function () {
                    if (
                      (g(e, ["hint"]),
                      e.options.comment &&
                        e.options.comment.enable &&
                        e.options.comment.scroll &&
                        e.options.comment.scroll(e.wysiwyg.element.scrollTop),
                      "block" === t.popover.style.display)
                    ) {
                      var n =
                          parseInt(t.popover.getAttribute("data-top"), 10) -
                          e.wysiwyg.element.scrollTop,
                        r = -8;
                      e.options.toolbarConfig.pin &&
                        0 === e.toolbar.element.getBoundingClientRect().top &&
                        (r = window.scrollY - e.element.offsetTop + r);
                      var i =
                        Math.max(r, Math.min(n, t.element.clientHeight - 21)) +
                        "px";
                      (t.popover.style.top = i),
                        (t.selectPopover.style.top = i);
                    }
                  }),
                  this.element.addEventListener("paste", function (t) {
                    St(e, t, {
                      pasteCode: function (t) {
                        var n = (0, N.zh)(e),
                          r = document.createElement("template");
                        (r.innerHTML = t),
                          n.insertNode(r.content.cloneNode(!0));
                        var i = (0, b.a1)(n.startContainer, "data-block", "0");
                        i
                          ? (i.outerHTML = e.lute.SpinVditorDOM(i.outerHTML))
                          : (e.wysiwyg.element.innerHTML = e.lute.SpinVditorDOM(
                              e.wysiwyg.element.innerHTML
                            )),
                          (0, N.ib)(e.wysiwyg.element, n);
                      },
                    });
                  }),
                  this.element.addEventListener(
                    "compositionstart",
                    function () {
                      t.composingLock = !0;
                    }
                  ),
                  this.element.addEventListener("compositionend", function (n) {
                    var r = (0, y.W)(
                      getSelection().getRangeAt(0).startContainer
                    );
                    r && "" === r.textContent
                      ? j(e)
                      : ((0, c.vU)() ||
                          We(e, getSelection().getRangeAt(0).cloneRange(), n),
                        (t.composingLock = !1));
                  }),
                  this.element.addEventListener("input", function (n) {
                    if (
                      "deleteByDrag" !== n.inputType &&
                      "insertFromDrop" !== n.inputType
                    ) {
                      if (t.preventInput)
                        return (t.preventInput = !1), void X(e);
                      if (
                        t.composingLock ||
                        "‘" === n.data ||
                        "“" === n.data ||
                        "《" === n.data
                      )
                        X(e);
                      else {
                        var r = getSelection().getRangeAt(0),
                          i = (0, b.F9)(r.startContainer);
                        if (
                          (i || (ee(e, r), (i = (0, b.F9)(r.startContainer))),
                          i)
                        ) {
                          for (
                            var o = (0, N.im)(i, e.wysiwyg.element, r).start,
                              s = !0,
                              l = o - 1;
                            l > i.textContent.substr(0, o).lastIndexOf("\n");
                            l--
                          )
                            if (
                              " " !== i.textContent.charAt(l) &&
                              "\t" !== i.textContent.charAt(l)
                            ) {
                              s = !1;
                              break;
                            }
                          0 === o && (s = !1);
                          var c = !0;
                          for (l = o - 1; l < i.textContent.length; l++)
                            if (
                              " " !== i.textContent.charAt(l) &&
                              "\n" !== i.textContent.charAt(l)
                            ) {
                              c = !1;
                              break;
                            }
                          var d = (0, y.W)(
                            getSelection().getRangeAt(0).startContainer
                          );
                          d && "" === d.textContent && (j(e), d.remove()),
                            (s &&
                              "code-block" !== i.getAttribute("data-type")) ||
                            c ||
                            st(i.innerHTML) ||
                            (at(i.innerHTML) && i.previousElementSibling)
                              ? "function" == typeof e.options.input &&
                                e.options.input(a(e))
                              : ("insertParagraph" === n.inputType &&
                                  "<p><br></p><p><br></p>" ===
                                    t.element.innerHTML &&
                                  i.previousElementSibling.remove(),
                                We(e, r, n));
                        }
                      }
                    }
                  }),
                  this.element.addEventListener("click", function (n) {
                    if ("INPUT" === n.target.tagName) {
                      var r = n.target;
                      return (
                        r.checked
                          ? r.setAttribute("checked", "checked")
                          : r.removeAttribute("checked"),
                        (t.preventInput = !0),
                        void X(e)
                      );
                    }
                    if (
                      "IMG" !== n.target.tagName ||
                      n.target.parentElement.classList.contains(
                        "vditor-wysiwyg__preview"
                      )
                    ) {
                      var o = (0, b.lG)(n.target, "A");
                      if (o)
                        return (
                          e.options.link.click
                            ? e.options.link.click(o)
                            : e.options.link.isOpen &&
                              window.open(o.getAttribute("href")),
                          void n.preventDefault()
                        );
                      var s = (0, N.zh)(e);
                      if (
                        n.target.isEqualNode(t.element) &&
                        t.element.lastElementChild &&
                        s.collapsed
                      ) {
                        var l =
                          t.element.lastElementChild.getBoundingClientRect();
                        n.y > l.top + l.height &&
                          ("P" === t.element.lastElementChild.tagName &&
                          "" ===
                            t.element.lastElementChild.textContent
                              .trim()
                              .replace(i.g.ZWSP, "")
                            ? (s.selectNodeContents(t.element.lastElementChild),
                              s.collapse(!1))
                            : (t.element.insertAdjacentHTML(
                                "beforeend",
                                '<p data-block="0">'.concat(
                                  i.g.ZWSP,
                                  "<wbr></p>"
                                )
                              ),
                              (0, N.ib)(t.element, s)));
                      }
                      oe(e);
                      var c = (0, b.fb)(n.target, "vditor-wysiwyg__preview");
                      c ||
                        (c = (0, b.fb)(
                          (0, N.zh)(e).startContainer,
                          "vditor-wysiwyg__preview"
                        )),
                        c && re(c, e),
                        O(n, e);
                    } else
                      "link-ref" === n.target.getAttribute("data-type")
                        ? se(e, n.target)
                        : (function (e, t) {
                            var n = e.target;
                            t.wysiwyg.popover.innerHTML = "";
                            var r = function () {
                                n.setAttribute("src", o.value),
                                  n.setAttribute("alt", l.value),
                                  n.setAttribute("title", d.value),
                                  "function" == typeof t.options.input &&
                                    t.options.input(a(t));
                              },
                              i = document.createElement("span");
                            i.setAttribute(
                              "aria-label",
                              window.VditorI18n.imageURL
                            ),
                              (i.className =
                                "vditor-tooltipped vditor-tooltipped__n");
                            var o = document.createElement("input");
                            i.appendChild(o),
                              (o.className = "vditor-input"),
                              o.setAttribute(
                                "placeholder",
                                window.VditorI18n.imageURL
                              ),
                              (o.value = n.getAttribute("src") || ""),
                              (o.oninput = function () {
                                r();
                              }),
                              (o.onkeydown = function (e) {
                                ie(t, e);
                              });
                            var s = document.createElement("span");
                            s.setAttribute(
                              "aria-label",
                              window.VditorI18n.alternateText
                            ),
                              (s.className =
                                "vditor-tooltipped vditor-tooltipped__n");
                            var l = document.createElement("input");
                            s.appendChild(l),
                              (l.className = "vditor-input"),
                              l.setAttribute(
                                "placeholder",
                                window.VditorI18n.alternateText
                              ),
                              (l.style.width = "52px"),
                              (l.value = n.getAttribute("alt") || ""),
                              (l.oninput = function () {
                                r();
                              }),
                              (l.onkeydown = function (e) {
                                ie(t, e);
                              });
                            var c = document.createElement("span");
                            c.setAttribute(
                              "aria-label",
                              window.VditorI18n.title
                            ),
                              (c.className =
                                "vditor-tooltipped vditor-tooltipped__n");
                            var d = document.createElement("input");
                            c.appendChild(d),
                              (d.className = "vditor-input"),
                              d.setAttribute(
                                "placeholder",
                                window.VditorI18n.title
                              ),
                              (d.value = n.getAttribute("title") || ""),
                              (d.oninput = function () {
                                r();
                              }),
                              (d.onkeydown = function (e) {
                                ie(t, e);
                              }),
                              de(n, t),
                              t.wysiwyg.popover.insertAdjacentElement(
                                "beforeend",
                                i
                              ),
                              t.wysiwyg.popover.insertAdjacentElement(
                                "beforeend",
                                s
                              ),
                              t.wysiwyg.popover.insertAdjacentElement(
                                "beforeend",
                                c
                              ),
                              ae(t, n);
                          })(n, e);
                  }),
                  this.element.addEventListener("keyup", function (t) {
                    if (!t.isComposing && !(0, c.yl)(t)) {
                      "Enter" === t.key && Me(e),
                        ("Backspace" !== t.key && "Delete" !== t.key) ||
                          "" === e.wysiwyg.element.innerHTML ||
                          1 !== e.wysiwyg.element.childNodes.length ||
                          !e.wysiwyg.element.firstElementChild ||
                          "P" !== e.wysiwyg.element.firstElementChild.tagName ||
                          0 !==
                            e.wysiwyg.element.firstElementChild
                              .childElementCount ||
                          ("" !== e.wysiwyg.element.textContent &&
                            "\n" !== e.wysiwyg.element.textContent) ||
                          (e.wysiwyg.element.innerHTML = "");
                      var n = (0, N.zh)(e);
                      if (
                        ("Backspace" === t.key &&
                          (0, c.vU)() &&
                          "\n" === n.startContainer.textContent &&
                          1 === n.startOffset &&
                          (n.startContainer.textContent = ""),
                        ee(e, n),
                        oe(e),
                        "ArrowDown" === t.key ||
                          "ArrowRight" === t.key ||
                          "Backspace" === t.key ||
                          "ArrowLeft" === t.key ||
                          "ArrowUp" === t.key)
                      ) {
                        ("ArrowLeft" !== t.key && "ArrowRight" !== t.key) ||
                          e.hint.render(e);
                        var r = (0, b.fb)(
                          n.startContainer,
                          "vditor-wysiwyg__preview"
                        );
                        if (
                          (!r &&
                            3 !== n.startContainer.nodeType &&
                            n.startOffset > 0 &&
                            (o = n.startContainer).classList.contains(
                              "vditor-wysiwyg__block"
                            ) &&
                            (r = o.lastElementChild),
                          r)
                        )
                          if (
                            "none" !== r.previousElementSibling.style.display
                          ) {
                            var i = r.previousElementSibling;
                            if (
                              ("PRE" === i.tagName && (i = i.firstElementChild),
                              "ArrowDown" === t.key || "ArrowRight" === t.key)
                            ) {
                              var o,
                                a = (function (e) {
                                  for (var t = e; t && !t.nextSibling; )
                                    t = t.parentElement;
                                  return t.nextSibling;
                                })((o = r.parentElement));
                              if (a && 3 !== a.nodeType) {
                                var s = a.querySelector(
                                  ".vditor-wysiwyg__preview"
                                );
                                if (s) return void re(s, e);
                              }
                              if (3 === a.nodeType) {
                                for (
                                  ;
                                  0 === a.textContent.length && a.nextSibling;

                                )
                                  a = a.nextSibling;
                                n.setStart(a, 1);
                              } else n.setStart(a.firstChild, 0);
                            } else n.selectNodeContents(i), n.collapse(!1);
                          } else
                            "ArrowDown" === t.key || "ArrowRight" === t.key
                              ? re(r, e)
                              : re(r, e, !1);
                      }
                    }
                  });
              }),
              e
            );
          })(),
          Gn = (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })();
        const Kn = (function (e) {
          function t(t, n) {
            var r = e.call(this) || this;
            if (((r.version = i.H), "string" == typeof t)) {
              if (
                (n
                  ? n.cache
                    ? n.cache.id || (n.cache.id = "vditor".concat(t))
                    : (n.cache = { id: "vditor".concat(t) })
                  : (n = { cache: { id: "vditor".concat(t) } }),
                !document.getElementById(t))
              )
                return (
                  r.showErrorTip("Failed to get element by id: ".concat(t)), r
                );
              t = document.getElementById(t);
            }
            var o = new Un(n).merge();
            if (o.i18n) (window.VditorI18n = o.i18n), r.init(t, o);
            else {
              if (
                ![
                  "en_US",
                  "fr_FR",
                  "pt_BR",
                  "ja_JP",
                  "ko_KR",
                  "ru_RU",
                  "sv_SE",
                  "zh_CN",
                  "zh_TW",
                ].includes(o.lang)
              )
                throw new Error(
                  "options.lang error, see https://ld246.com/article/1549638745630#options"
                );
              var a = "vditorI18nScript",
                l = a + o.lang;
              document
                .querySelectorAll('head script[id^="'.concat(a, '"]'))
                .forEach(function (e) {
                  e.id !== l && document.head.removeChild(e);
                }),
                (0, s.G)(
                  "".concat(o.cdn, "/dist/js/i18n/").concat(o.lang, ".js"),
                  l
                )
                  .then(function () {
                    r.init(t, o);
                  })
                  .catch(function (e) {
                    r.showErrorTip(
                      "GET "
                        .concat(o.cdn, "/dist/js/i18n/")
                        .concat(o.lang, ".js net::ERR_ABORTED 404 (Not Found)")
                    );
                  });
            }
            return r;
          }
          return (
            Gn(t, e),
            (t.prototype.showErrorTip = function (e) {
              var t = new Vt();
              document.body.appendChild(t.element), t.show(e, 0);
            }),
            (t.prototype.updateToolbarConfig = function (e) {
              this.vditor.toolbar.updateConfig(this.vditor, e);
            }),
            (t.prototype.setTheme = function (e, t, n, r) {
              (this.vditor.options.theme = e),
                U(this.vditor),
                t &&
                  ((this.vditor.options.preview.theme.current = t),
                  (0, V.Z)(t, r || this.vditor.options.preview.theme.path)),
                n &&
                  ((this.vditor.options.preview.hljs.style = n),
                  (0, Ft.Y)(n, this.vditor.options.cdn));
            }),
            (t.prototype.getValue = function () {
              return a(this.vditor);
            }),
            (t.prototype.getCurrentMode = function () {
              return this.vditor.currentMode;
            }),
            (t.prototype.focus = function () {
              "sv" === this.vditor.currentMode
                ? this.vditor.sv.element.focus()
                : "wysiwyg" === this.vditor.currentMode
                ? this.vditor.wysiwyg.element.focus()
                : "ir" === this.vditor.currentMode &&
                  this.vditor.ir.element.focus();
            }),
            (t.prototype.blur = function () {
              "sv" === this.vditor.currentMode
                ? this.vditor.sv.element.blur()
                : "wysiwyg" === this.vditor.currentMode
                ? this.vditor.wysiwyg.element.blur()
                : "ir" === this.vditor.currentMode &&
                  this.vditor.ir.element.blur();
            }),
            (t.prototype.disabled = function () {
              g(this.vditor, ["subToolbar", "hint", "popover"]),
                m(
                  this.vditor.toolbar.elements,
                  i.g.EDIT_TOOLBARS.concat([
                    "undo",
                    "redo",
                    "fullscreen",
                    "edit-mode",
                  ])
                ),
                this.vditor[this.vditor.currentMode].element.setAttribute(
                  "contenteditable",
                  "false"
                );
            }),
            (t.prototype.enable = function () {
              p(
                this.vditor.toolbar.elements,
                i.g.EDIT_TOOLBARS.concat([
                  "undo",
                  "redo",
                  "fullscreen",
                  "edit-mode",
                ])
              ),
                this.vditor.undo.resetIcon(this.vditor),
                this.vditor[this.vditor.currentMode].element.setAttribute(
                  "contenteditable",
                  "true"
                );
            }),
            (t.prototype.getSelection = function () {
              return "wysiwyg" === this.vditor.currentMode
                ? _e(this.vditor.wysiwyg.element)
                : "sv" === this.vditor.currentMode
                ? _e(this.vditor.sv.element)
                : "ir" === this.vditor.currentMode
                ? _e(this.vditor.ir.element)
                : void 0;
            }),
            (t.prototype.renderPreview = function (e) {
              this.vditor.preview.render(this.vditor, e);
            }),
            (t.prototype.getCursorPosition = function () {
              return (0, N.Ny)(this.vditor[this.vditor.currentMode].element);
            }),
            (t.prototype.isUploading = function () {
              return this.vditor.upload.isUploading;
            }),
            (t.prototype.clearCache = function () {
              localStorage.removeItem(this.vditor.options.cache.id);
            }),
            (t.prototype.disabledCache = function () {
              this.vditor.options.cache.enable = !1;
            }),
            (t.prototype.enableCache = function () {
              if (!this.vditor.options.cache.id)
                throw new Error(
                  "need options.cache.id, see https://ld246.com/article/1549638745630#options"
                );
              this.vditor.options.cache.enable = !0;
            }),
            (t.prototype.html2md = function (e) {
              return this.vditor.lute.HTML2Md(e);
            }),
            (t.prototype.exportJSON = function (e) {
              return this.vditor.lute.RenderJSON(e);
            }),
            (t.prototype.getHTML = function () {
              return Ot(this.vditor);
            }),
            (t.prototype.tip = function (e, t) {
              this.vditor.tip.show(e, t);
            }),
            (t.prototype.setPreviewMode = function (e) {
              Ut(e, this.vditor);
            }),
            (t.prototype.deleteValue = function () {
              window.getSelection().isCollapsed ||
                document.execCommand("delete", !1);
            }),
            (t.prototype.updateValue = function (e) {
              document.execCommand("insertHTML", !1, e);
            }),
            (t.prototype.insertValue = function (e, t) {
              void 0 === t && (t = !0);
              var n = (0, N.zh)(this.vditor);
              n.collapse(!0);
              var r = document.createElement("template");
              (r.innerHTML = e),
                n.insertNode(r.content.cloneNode(!0)),
                n.collapse(!1),
                "sv" === this.vditor.currentMode
                  ? ((this.vditor.sv.preventInput = !0), t && q(this.vditor))
                  : "wysiwyg" === this.vditor.currentMode
                  ? t && We(this.vditor, getSelection().getRangeAt(0))
                  : "ir" === this.vditor.currentMode &&
                    ((this.vditor.ir.preventInput = !0),
                    t && P(this.vditor, getSelection().getRangeAt(0), !0));
            }),
            (t.prototype.setValue = function (e, t) {
              var n = this;
              void 0 === t && (t = !1),
                "sv" === this.vditor.currentMode
                  ? ((this.vditor.sv.element.innerHTML =
                      "<div data-block='0'>".concat(
                        this.vditor.lute.SpinVditorSVDOM(e),
                        "</div>"
                      )),
                    De(this.vditor, {
                      enableAddUndoStack: !0,
                      enableHint: !1,
                      enableInput: !1,
                    }))
                  : "wysiwyg" === this.vditor.currentMode
                  ? he(this.vditor, e, {
                      enableAddUndoStack: !0,
                      enableHint: !1,
                      enableInput: !1,
                    })
                  : ((this.vditor.ir.element.innerHTML =
                      this.vditor.lute.Md2VditorIRDOM(e)),
                    this.vditor.ir.element
                      .querySelectorAll(".vditor-ir__preview[data-render='2']")
                      .forEach(function (e) {
                        H(e, n.vditor);
                      }),
                    Ct(this.vditor, {
                      enableAddUndoStack: !0,
                      enableHint: !1,
                      enableInput: !1,
                    })),
                this.vditor.outline.render(this.vditor),
                e ||
                  (g(this.vditor, ["emoji", "headings", "submenu", "hint"]),
                  this.vditor.wysiwyg.popover &&
                    (this.vditor.wysiwyg.popover.style.display = "none"),
                  this.clearCache()),
                t && this.clearStack();
            }),
            (t.prototype.clearStack = function () {
              this.vditor.undo.clearStack(this.vditor),
                this.vditor.undo.addToUndoStack(this.vditor);
            }),
            (t.prototype.destroy = function () {
              (this.vditor.element.innerHTML = this.vditor.originalInnerHTML),
                this.vditor.element.classList.remove("vditor"),
                this.vditor.element.removeAttribute("style");
              var e = document.getElementById("vditorIconScript");
              e && e.remove(),
                this.clearCache(),
                K(),
                this.vditor.wysiwyg.unbindListener();
            }),
            (t.prototype.getCommentIds = function () {
              return "wysiwyg" !== this.vditor.currentMode
                ? []
                : this.vditor.wysiwyg.getComments(this.vditor, !0);
            }),
            (t.prototype.hlCommentIds = function (e) {
              if ("wysiwyg" === this.vditor.currentMode) {
                var t = function (t) {
                  t.classList.remove("vditor-comment--hover"),
                    e.forEach(function (e) {
                      t.getAttribute("data-cmtids").indexOf(e) > -1 &&
                        t.classList.add("vditor-comment--hover");
                    });
                };
                this.vditor.wysiwyg.element
                  .querySelectorAll(".vditor-comment")
                  .forEach(function (e) {
                    t(e);
                  }),
                  "none" !== this.vditor.preview.element.style.display &&
                    this.vditor.preview.element
                      .querySelectorAll(".vditor-comment")
                      .forEach(function (e) {
                        t(e);
                      });
              }
            }),
            (t.prototype.unHlCommentIds = function (e) {
              if ("wysiwyg" === this.vditor.currentMode) {
                var t = function (t) {
                  e.forEach(function (e) {
                    t.getAttribute("data-cmtids").indexOf(e) > -1 &&
                      t.classList.remove("vditor-comment--hover");
                  });
                };
                this.vditor.wysiwyg.element
                  .querySelectorAll(".vditor-comment")
                  .forEach(function (e) {
                    t(e);
                  }),
                  "none" !== this.vditor.preview.element.style.display &&
                    this.vditor.preview.element
                      .querySelectorAll(".vditor-comment")
                      .forEach(function (e) {
                        t(e);
                      });
              }
            }),
            (t.prototype.removeCommentIds = function (e) {
              var t = this;
              if ("wysiwyg" === this.vditor.currentMode) {
                var n = function (e, n) {
                  var r = e.getAttribute("data-cmtids").split(" ");
                  r.find(function (e, t) {
                    if (e === n) return r.splice(t, 1), !0;
                  }),
                    0 === r.length
                      ? ((e.outerHTML = e.innerHTML),
                        (0, N.zh)(t.vditor).collapse(!0))
                      : e.setAttribute("data-cmtids", r.join(" "));
                };
                e.forEach(function (e) {
                  t.vditor.wysiwyg.element
                    .querySelectorAll(".vditor-comment")
                    .forEach(function (t) {
                      n(t, e);
                    }),
                    "none" !== t.vditor.preview.element.style.display &&
                      t.vditor.preview.element
                        .querySelectorAll(".vditor-comment")
                        .forEach(function (t) {
                          n(t, e);
                        });
                }),
                  X(this.vditor, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1,
                  });
              }
            }),
            (t.prototype.init = function (e, t) {
              var n = this;
              (this.vditor = {
                currentMode: t.mode,
                element: e,
                hint: new Nt(t.hint.extend),
                lute: void 0,
                options: t,
                originalInnerHTML: e.innerHTML,
                outline: new It(window.VditorI18n.outline),
                tip: new Vt(),
              }),
                (this.vditor.sv = new qt(this.vditor)),
                (this.vditor.undo = new qn()),
                (this.vditor.wysiwyg = new Wn(this.vditor)),
                (this.vditor.ir = new jt(this.vditor)),
                (this.vditor.toolbar = new Bn(this.vditor)),
                t.resize.enable && (this.vditor.resize = new zt(this.vditor)),
                this.vditor.toolbar.elements.devtools &&
                  (this.vditor.devtools = new l()),
                (t.upload.url || t.upload.handler) &&
                  (this.vditor.upload = new Ve()),
                (0, s.G)(
                  t._lutePath || "".concat(t.cdn, "/dist/js/lute/lute.min.js"),
                  "vditorLuteScript"
                ).then(function () {
                  (n.vditor.lute = (0, Dt.X)({
                    autoSpace: n.vditor.options.preview.markdown.autoSpace,
                    gfmAutoLink: n.vditor.options.preview.markdown.gfmAutoLink,
                    codeBlockPreview:
                      n.vditor.options.preview.markdown.codeBlockPreview,
                    emojiSite: n.vditor.options.hint.emojiPath,
                    emojis: n.vditor.options.hint.emoji,
                    fixTermTypo: n.vditor.options.preview.markdown.fixTermTypo,
                    footnotes: n.vditor.options.preview.markdown.footnotes,
                    headingAnchor: !1,
                    inlineMathDigit: n.vditor.options.preview.math.inlineDigit,
                    linkBase: n.vditor.options.preview.markdown.linkBase,
                    linkPrefix: n.vditor.options.preview.markdown.linkPrefix,
                    listStyle: n.vditor.options.preview.markdown.listStyle,
                    mark: n.vditor.options.preview.markdown.mark,
                    mathBlockPreview:
                      n.vditor.options.preview.markdown.mathBlockPreview,
                    paragraphBeginningSpace:
                      n.vditor.options.preview.markdown.paragraphBeginningSpace,
                    sanitize: n.vditor.options.preview.markdown.sanitize,
                    toc: n.vditor.options.preview.markdown.toc,
                  })),
                    (n.vditor.preview = new Bt(n.vditor)),
                    (function (e) {
                      (e.element.innerHTML = ""),
                        e.element.classList.add("vditor"),
                        e.options.rtl && e.element.setAttribute("dir", "rtl"),
                        U(e),
                        (0, V.Z)(
                          e.options.preview.theme.current,
                          e.options.preview.theme.path
                        ),
                        "number" == typeof e.options.height
                          ? (e.element.style.height = e.options.height + "px")
                          : (e.element.style.height = e.options.height),
                        "number" == typeof e.options.minHeight &&
                          (e.element.style.minHeight =
                            e.options.minHeight + "px"),
                        "number" == typeof e.options.width
                          ? (e.element.style.width = e.options.width + "px")
                          : (e.element.style.width = e.options.width),
                        e.element.appendChild(e.toolbar.element);
                      var t = document.createElement("div");
                      if (
                        ((t.className = "vditor-content"),
                        "left" === e.options.outline.position &&
                          t.appendChild(e.outline.element),
                        t.appendChild(e.wysiwyg.element.parentElement),
                        t.appendChild(e.sv.element),
                        t.appendChild(e.ir.element.parentElement),
                        t.appendChild(e.preview.element),
                        e.toolbar.elements.devtools &&
                          t.appendChild(e.devtools.element),
                        "right" === e.options.outline.position &&
                          (e.outline.element.classList.add(
                            "vditor-outline--right"
                          ),
                          t.appendChild(e.outline.element)),
                        e.upload && t.appendChild(e.upload.element),
                        e.options.resize.enable &&
                          t.appendChild(e.resize.element),
                        t.appendChild(e.hint.element),
                        t.appendChild(e.tip.element),
                        e.element.appendChild(t),
                        t.addEventListener("click", function () {
                          g(e, ["subToolbar"]);
                        }),
                        e.toolbar.elements.export &&
                          e.element.insertAdjacentHTML(
                            "beforeend",
                            '<iframe id="vditorExportIframe" style="width: 100%;height: 0;border: 0"></iframe>'
                          ),
                        ye(e, e.options.mode, Z(e)),
                        document.execCommand(
                          "DefaultParagraphSeparator",
                          !1,
                          "p"
                        ),
                        navigator.userAgent.indexOf("iPhone") > -1 &&
                          void 0 !== window.visualViewport)
                      ) {
                        var n = !1,
                          r = function (t) {
                            n ||
                              ((n = !0),
                              requestAnimationFrame(function () {
                                n = !1;
                                var t = e.toolbar.element;
                                (t.style.transform = "none"),
                                  t.getBoundingClientRect().top < 0 &&
                                    (t.style.transform = "translate(0, ".concat(
                                      -t.getBoundingClientRect().top,
                                      "px)"
                                    ));
                              }));
                          };
                        window.visualViewport.addEventListener("scroll", r),
                          window.visualViewport.addEventListener("resize", r);
                      }
                    })(n.vditor),
                    t.after && t.after(),
                    t.icon &&
                      (0, s.J)(
                        ""
                          .concat(t.cdn, "/dist/js/icons/")
                          .concat(t.icon, ".js"),
                        "vditorIconScript"
                      );
                });
            }),
            t
          );
        })(t.default);
      })(),
      (r = r.default)
    );
  })();
const S = t((E.exports = k())),
  L = n({
    inheritAttrs: !1,
    props: {
      height: { type: Number, default: 360 },
      value: { type: String, default: "" },
    },
    emits: ["change", "get", "update:value"],
    setup(e, { attrs: t, emit: n }) {
      const d = r(null),
        u = r(null),
        p = r(!1),
        m = w(),
        { getDarkMode: f } = i(),
        h = r(e.value || "");
      o(
        [() => f.value, () => p.value],
        ([e, t]) => {
          if (!t) return;
          const n = "dark" === e ? "dark" : "classic";
          g.getVditor()?.setTheme(n);
        },
        { immediate: !0, flush: "post" }
      ),
        o(
          () => e.value,
          (e) => {
            e !== h.value && g.getVditor()?.setValue(e), (h.value = e);
          },
          { immediate: !0, flush: "post" }
        );
      const g = { getVditor: () => u.value };
      function v() {
        const e = l(u);
        if (e) {
          try {
            e?.destroy?.();
          } catch (t) {}
          (u.value = null), (p.value = !1);
        }
      }
      return (
        _(function () {
          const r = l(d);
          if (!r) return;
          const i = { ...t, ...e },
            o = new S(r, {
              theme: "dark" === f.value ? "dark" : "classic",
              lang: "en_US",
              mode: "sv",
              cache: { enable: !1 },
              fullscreen: { index: 900 },
              preview: { mode: "both", actions: [] },
              input: (e) => {
                (h.value = e), n("update:value", e), n("change", e);
              },
              after: () => {
                c(() => {
                  m?.redoModalHeight?.(),
                    o.setValue(h.value),
                    (u.value = o),
                    (p.value = !0),
                    (document.body.scrollTop = 0),
                    n("get", g);
                });
              },
              blur: () => {},
              ...i,
            });
        }),
        a(v),
        s(v),
        { wrapRef: d, ...g }
      );
    },
  }),
  C = { ref: "wrapRef" };
const x = d(L, [
    [
      "render",
      function (e, t, n, r, i, o) {
        return u(), p("div", C, null, 512);
      },
    ],
  ]),
  M = d(
    n({
      inheritAttrs: !1,
      __name: "MyMarkDown",
      props: {
        height: { default: 360 },
        value: { default: "" },
        disabled: { type: Boolean, default: !1 },
        mode: { default: "ir" },
        outline: { type: [String, Boolean], default: "left" },
        options: {},
      },
      emits: ["change", "get", "update:value"],
      setup(e, { emit: t }) {
        const n = e,
          d = t,
          v = m(),
          b = r(null),
          y = r(null),
          w = r(!1),
          k = r(n.value || ""),
          E = f({ getVditor: () => y.value }),
          { getDarkMode: L } = i();
        function C() {
          c(() => {
            E.getVditor()?.setTheme(
              L.value === g.DARK ? "dark" : "classic",
              L.value === g.DARK ? "dark" : "light",
              L.value === g.DARK ? "monokai" : "monokailight"
            );
          });
        }
        function x() {
          c(() => {
            const e = E.getVditor();
            e && (n.disabled ? e.disabled() : e.enable());
          });
        }
        function M() {
          const e = l(y);
          if (e) {
            try {
              e?.destroy?.();
            } catch {}
            (y.value = null), (w.value = !1);
          }
        }
        return (
          o(L, C),
          o(() => n.disabled, x),
          o(
            () => n.value,
            (e) => {
              e !== k.value && E && E.getVditor()?.setValue(e), (k.value = e);
            },
            { immediate: !0, flush: "post" }
          ),
          _(function () {
            const e = l(b);
            if (!e) return;
            const t = { ...v, ...h(n, "options") },
              r = new S(e, {
                theme: L.value === g.DARK ? "dark" : "classic",
                lang: "en_US",
                placeholder: n.disabled ? "" : "Start to write here✏️",
                toolbar: [],
                fullscreen: { index: 900 },
                input: (e) => {
                  (k.value = e), d("update:value", e), d("change", e);
                },
                after: () => {
                  c(() => {
                    r.setValue(k.value),
                      (y.value = r),
                      (w.value = !0),
                      d("get", E),
                      C(),
                      x();
                  });
                },
                blur: () => {
                  l(y)?.setValue(n.value);
                },
                ...t,
                outline: n.outline
                  ? { enable: !0, position: n.outline }
                  : void 0,
                cache: { enable: !1 },
                ...n.options,
              });
          }),
          a(M),
          s(M),
          (e, t) => (
            u(),
            p(
              "div",
              { ref_key: "wrapRef", ref: b, class: "my-markdown" },
              null,
              512
            )
          )
        );
      },
    }),
    [["__scopeId", "data-v-a2449946"]]
  );
var T,
  A = { exports: {} };
(T = A),
  function () {
    function e(e) {
      var t = {
        omitExtraWLInCodeBlocks: {
          defaultValue: !1,
          describe: "Omit the default extra whiteline added to code blocks",
          type: "boolean",
        },
        noHeaderId: {
          defaultValue: !1,
          describe: "Turn on/off generated header id",
          type: "boolean",
        },
        prefixHeaderId: {
          defaultValue: !1,
          describe:
            "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
          type: "string",
        },
        rawPrefixHeaderId: {
          defaultValue: !1,
          describe:
            'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
          type: "boolean",
        },
        ghCompatibleHeaderId: {
          defaultValue: !1,
          describe:
            "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
          type: "boolean",
        },
        rawHeaderId: {
          defaultValue: !1,
          describe:
            "Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",
          type: "boolean",
        },
        headerLevelStart: {
          defaultValue: !1,
          describe: "The header blocks level start",
          type: "integer",
        },
        parseImgDimensions: {
          defaultValue: !1,
          describe: "Turn on/off image dimension parsing",
          type: "boolean",
        },
        simplifiedAutoLink: {
          defaultValue: !1,
          describe: "Turn on/off GFM autolink style",
          type: "boolean",
        },
        excludeTrailingPunctuationFromURLs: {
          defaultValue: !1,
          describe:
            "Excludes trailing punctuation from links generated with autoLinking",
          type: "boolean",
        },
        literalMidWordUnderscores: {
          defaultValue: !1,
          describe: "Parse midword underscores as literal underscores",
          type: "boolean",
        },
        literalMidWordAsterisks: {
          defaultValue: !1,
          describe: "Parse midword asterisks as literal asterisks",
          type: "boolean",
        },
        strikethrough: {
          defaultValue: !1,
          describe: "Turn on/off strikethrough support",
          type: "boolean",
        },
        tables: {
          defaultValue: !1,
          describe: "Turn on/off tables support",
          type: "boolean",
        },
        tablesHeaderId: {
          defaultValue: !1,
          describe: "Add an id to table headers",
          type: "boolean",
        },
        ghCodeBlocks: {
          defaultValue: !0,
          describe: "Turn on/off GFM fenced code blocks support",
          type: "boolean",
        },
        tasklists: {
          defaultValue: !1,
          describe: "Turn on/off GFM tasklist support",
          type: "boolean",
        },
        smoothLivePreview: {
          defaultValue: !1,
          describe:
            "Prevents weird effects in live previews due to incomplete input",
          type: "boolean",
        },
        smartIndentationFix: {
          defaultValue: !1,
          describe: "Tries to smartly fix indentation in es6 strings",
          type: "boolean",
        },
        disableForced4SpacesIndentedSublists: {
          defaultValue: !1,
          describe:
            "Disables the requirement of indenting nested sublists by 4 spaces",
          type: "boolean",
        },
        simpleLineBreaks: {
          defaultValue: !1,
          describe: "Parses simple line breaks as <br> (GFM Style)",
          type: "boolean",
        },
        requireSpaceBeforeHeadingText: {
          defaultValue: !1,
          describe:
            "Makes adding a space between `#` and the header text mandatory (GFM Style)",
          type: "boolean",
        },
        ghMentions: {
          defaultValue: !1,
          describe: "Enables github @mentions",
          type: "boolean",
        },
        ghMentionsLink: {
          defaultValue: "https://github.com/{u}",
          describe:
            "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
          type: "string",
        },
        encodeEmails: {
          defaultValue: !0,
          describe:
            "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
          type: "boolean",
        },
        openLinksInNewWindow: {
          defaultValue: !1,
          describe: "Open all links in new windows",
          type: "boolean",
        },
        backslashEscapesHTMLTags: {
          defaultValue: !1,
          describe: "Support for HTML Tag escaping. ex: <div>foo</div>",
          type: "boolean",
        },
        emoji: {
          defaultValue: !1,
          describe: "Enable emoji support. Ex: `this is a :smile: emoji`",
          type: "boolean",
        },
        underline: {
          defaultValue: !1,
          describe:
            "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
          type: "boolean",
        },
        ellipsis: {
          defaultValue: !0,
          describe: "Replaces three dots with the ellipsis unicode character",
          type: "boolean",
        },
        completeHTMLDocument: {
          defaultValue: !1,
          describe:
            "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
          type: "boolean",
        },
        metadata: {
          defaultValue: !1,
          describe:
            "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
          type: "boolean",
        },
        splitAdjacentBlockquotes: {
          defaultValue: !1,
          describe: "Split adjacent blockquote blocks",
          type: "boolean",
        },
      };
      if (!1 === e) return JSON.parse(JSON.stringify(t));
      var n = {};
      for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r].defaultValue);
      return n;
    }
    var t = {},
      n = {},
      r = {},
      i = e(!0),
      o = "vanilla",
      a = {
        github: {
          omitExtraWLInCodeBlocks: !0,
          simplifiedAutoLink: !0,
          excludeTrailingPunctuationFromURLs: !0,
          literalMidWordUnderscores: !0,
          strikethrough: !0,
          tables: !0,
          tablesHeaderId: !0,
          ghCodeBlocks: !0,
          tasklists: !0,
          disableForced4SpacesIndentedSublists: !0,
          simpleLineBreaks: !0,
          requireSpaceBeforeHeadingText: !0,
          ghCompatibleHeaderId: !0,
          ghMentions: !0,
          backslashEscapesHTMLTags: !0,
          emoji: !0,
          splitAdjacentBlockquotes: !0,
        },
        original: { noHeaderId: !0, ghCodeBlocks: !1 },
        ghost: {
          omitExtraWLInCodeBlocks: !0,
          parseImgDimensions: !0,
          simplifiedAutoLink: !0,
          excludeTrailingPunctuationFromURLs: !0,
          literalMidWordUnderscores: !0,
          strikethrough: !0,
          tables: !0,
          tablesHeaderId: !0,
          ghCodeBlocks: !0,
          tasklists: !0,
          smoothLivePreview: !0,
          simpleLineBreaks: !0,
          requireSpaceBeforeHeadingText: !0,
          ghMentions: !1,
          encodeEmails: !0,
        },
        vanilla: e(!0),
        allOn: (function () {
          var t = e(!0),
            n = {};
          for (var r in t) t.hasOwnProperty(r) && (n[r] = !0);
          return n;
        })(),
      };
    function s(e, n) {
      var r = n
          ? "Error in " + n + " extension->"
          : "Error in unnamed extension",
        i = { valid: !0, error: "" };
      t.helper.isArray(e) || (e = [e]);
      for (var o = 0; o < e.length; ++o) {
        var a = r + " sub-extension " + o + ": ",
          s = e[o];
        if ("object" != typeof s)
          return (
            (i.valid = !1),
            (i.error = a + "must be an object, but " + typeof s + " given"),
            i
          );
        if (!t.helper.isString(s.type))
          return (
            (i.valid = !1),
            (i.error =
              a +
              'property "type" must be a string, but ' +
              typeof s.type +
              " given"),
            i
          );
        var l = (s.type = s.type.toLowerCase());
        if (
          ("language" === l && (l = s.type = "lang"),
          "html" === l && (l = s.type = "output"),
          "lang" !== l && "output" !== l && "listener" !== l)
        )
          return (
            (i.valid = !1),
            (i.error =
              a +
              "type " +
              l +
              ' is not recognized. Valid values: "lang/language", "output/html" or "listener"'),
            i
          );
        if ("listener" === l) {
          if (t.helper.isUndefined(s.listeners))
            return (
              (i.valid = !1),
              (i.error =
                a +
                '. Extensions of type "listener" must have a property called "listeners"'),
              i
            );
        } else if (
          t.helper.isUndefined(s.filter) &&
          t.helper.isUndefined(s.regex)
        )
          return (
            (i.valid = !1),
            (i.error =
              a +
              l +
              ' extensions must define either a "regex" property or a "filter" method'),
            i
          );
        if (s.listeners) {
          if ("object" != typeof s.listeners)
            return (
              (i.valid = !1),
              (i.error =
                a +
                '"listeners" property must be an object but ' +
                typeof s.listeners +
                " given"),
              i
            );
          for (var c in s.listeners)
            if (
              s.listeners.hasOwnProperty(c) &&
              "function" != typeof s.listeners[c]
            )
              return (
                (i.valid = !1),
                (i.error =
                  a +
                  '"listeners" property must be an hash of [event name]: [callback]. listeners.' +
                  c +
                  " must be a function but " +
                  typeof s.listeners[c] +
                  " given"),
                i
              );
        }
        if (s.filter) {
          if ("function" != typeof s.filter)
            return (
              (i.valid = !1),
              (i.error =
                a +
                '"filter" must be a function, but ' +
                typeof s.filter +
                " given"),
              i
            );
        } else if (s.regex) {
          if (
            (t.helper.isString(s.regex) && (s.regex = new RegExp(s.regex, "g")),
            !(s.regex instanceof RegExp))
          )
            return (
              (i.valid = !1),
              (i.error =
                a +
                '"regex" property must either be a string or a RegExp object, but ' +
                typeof s.regex +
                " given"),
              i
            );
          if (t.helper.isUndefined(s.replace))
            return (
              (i.valid = !1),
              (i.error =
                a +
                '"regex" extensions must implement a replace string or function'),
              i
            );
        }
      }
      return i;
    }
    function l(e, t) {
      return "¨E" + t.charCodeAt(0) + "E";
    }
    (t.helper = {}),
      (t.extensions = {}),
      (t.setOption = function (e, t) {
        return (i[e] = t), this;
      }),
      (t.getOption = function (e) {
        return i[e];
      }),
      (t.getOptions = function () {
        return i;
      }),
      (t.resetOptions = function () {
        i = e(!0);
      }),
      (t.setFlavor = function (e) {
        if (!a.hasOwnProperty(e)) throw Error(e + " flavor was not found");
        t.resetOptions();
        var n = a[e];
        for (var r in ((o = e), n)) n.hasOwnProperty(r) && (i[r] = n[r]);
      }),
      (t.getFlavor = function () {
        return o;
      }),
      (t.getFlavorOptions = function (e) {
        if (a.hasOwnProperty(e)) return a[e];
      }),
      (t.getDefaultOptions = function (t) {
        return e(t);
      }),
      (t.subParser = function (e, r) {
        if (t.helper.isString(e)) {
          if (void 0 === r) {
            if (n.hasOwnProperty(e)) return n[e];
            throw Error("SubParser named " + e + " not registered!");
          }
          n[e] = r;
        }
      }),
      (t.extension = function (e, n) {
        if (!t.helper.isString(e))
          throw Error("Extension 'name' must be a string");
        if (((e = t.helper.stdExtName(e)), t.helper.isUndefined(n))) {
          if (!r.hasOwnProperty(e))
            throw Error("Extension named " + e + " is not registered!");
          return r[e];
        }
        "function" == typeof n && (n = n()), t.helper.isArray(n) || (n = [n]);
        var i = s(n, e);
        if (!i.valid) throw Error(i.error);
        r[e] = n;
      }),
      (t.getAllExtensions = function () {
        return r;
      }),
      (t.removeExtension = function (e) {
        delete r[e];
      }),
      (t.resetExtensions = function () {
        r = {};
      }),
      (t.validateExtension = function (e) {
        return !!s(e, null).valid;
      }),
      t.hasOwnProperty("helper") || (t.helper = {}),
      (t.helper.isString = function (e) {
        return "string" == typeof e || e instanceof String;
      }),
      (t.helper.isFunction = function (e) {
        return e && "[object Function]" === {}.toString.call(e);
      }),
      (t.helper.isArray = function (e) {
        return Array.isArray(e);
      }),
      (t.helper.isUndefined = function (e) {
        return void 0 === e;
      }),
      (t.helper.forEach = function (e, n) {
        if (t.helper.isUndefined(e)) throw new Error("obj param is required");
        if (t.helper.isUndefined(n))
          throw new Error("callback param is required");
        if (!t.helper.isFunction(n))
          throw new Error("callback param must be a function/closure");
        if ("function" == typeof e.forEach) e.forEach(n);
        else if (t.helper.isArray(e))
          for (var r = 0; r < e.length; r++) n(e[r], r, e);
        else {
          if ("object" != typeof e)
            throw new Error(
              "obj does not seem to be an array or an iterable object"
            );
          for (var i in e) e.hasOwnProperty(i) && n(e[i], i, e);
        }
      }),
      (t.helper.stdExtName = function (e) {
        return e
          .replace(/[_?*+\/\\.^-]/g, "")
          .replace(/\s/g, "")
          .toLowerCase();
      }),
      (t.helper.escapeCharactersCallback = l),
      (t.helper.escapeCharacters = function (e, t, n) {
        var r = "([" + t.replace(/([\[\]\\])/g, "\\$1") + "])";
        n && (r = "\\\\" + r);
        var i = new RegExp(r, "g");
        return (e = e.replace(i, l));
      }),
      (t.helper.unescapeHTMLEntities = function (e) {
        return e
          .replace(/&quot;/g, '"')
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&amp;/g, "&");
      });
    var c = function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        l,
        c = r || "",
        d = c.indexOf("g") > -1,
        u = new RegExp(t + "|" + n, "g" + c.replace(/g/g, "")),
        p = new RegExp(t, c.replace(/g/g, "")),
        m = [];
      do {
        for (i = 0; (a = u.exec(e)); )
          if (p.test(a[0])) i++ || (s = (o = u.lastIndex) - a[0].length);
          else if (i && !--i) {
            l = a.index + a[0].length;
            var f = {
              left: { start: s, end: o },
              match: { start: o, end: a.index },
              right: { start: a.index, end: l },
              wholeMatch: { start: s, end: l },
            };
            if ((m.push(f), !d)) return m;
          }
      } while (i && (u.lastIndex = o));
      return m;
    };
    (t.helper.matchRecursiveRegExp = function (e, t, n, r) {
      for (var i = c(e, t, n, r), o = [], a = 0; a < i.length; ++a)
        o.push([
          e.slice(i[a].wholeMatch.start, i[a].wholeMatch.end),
          e.slice(i[a].match.start, i[a].match.end),
          e.slice(i[a].left.start, i[a].left.end),
          e.slice(i[a].right.start, i[a].right.end),
        ]);
      return o;
    }),
      (t.helper.replaceRecursiveRegExp = function (e, n, r, i, o) {
        if (!t.helper.isFunction(n)) {
          var a = n;
          n = function () {
            return a;
          };
        }
        var s = c(e, r, i, o),
          l = e,
          d = s.length;
        if (d > 0) {
          var u = [];
          0 !== s[0].wholeMatch.start &&
            u.push(e.slice(0, s[0].wholeMatch.start));
          for (var p = 0; p < d; ++p)
            u.push(
              n(
                e.slice(s[p].wholeMatch.start, s[p].wholeMatch.end),
                e.slice(s[p].match.start, s[p].match.end),
                e.slice(s[p].left.start, s[p].left.end),
                e.slice(s[p].right.start, s[p].right.end)
              )
            ),
              p < d - 1 &&
                u.push(e.slice(s[p].wholeMatch.end, s[p + 1].wholeMatch.start));
          s[d - 1].wholeMatch.end < e.length &&
            u.push(e.slice(s[d - 1].wholeMatch.end)),
            (l = u.join(""));
        }
        return l;
      }),
      (t.helper.regexIndexOf = function (e, n, r) {
        if (!t.helper.isString(e))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        if (n instanceof RegExp == 0)
          throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        var i = e.substring(r || 0).search(n);
        return i >= 0 ? i + (r || 0) : i;
      }),
      (t.helper.splitAtIndex = function (e, n) {
        if (!t.helper.isString(e))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        return [e.substring(0, n), e.substring(n)];
      }),
      (t.helper.encodeEmailAddress = function (e) {
        var t = [
          function (e) {
            return "&#" + e.charCodeAt(0) + ";";
          },
          function (e) {
            return "&#x" + e.charCodeAt(0).toString(16) + ";";
          },
          function (e) {
            return e;
          },
        ];
        return (e = e.replace(/./g, function (e) {
          if ("@" === e) e = t[Math.floor(2 * Math.random())](e);
          else {
            var n = Math.random();
            e = n > 0.9 ? t[2](e) : n > 0.45 ? t[1](e) : t[0](e);
          }
          return e;
        }));
      }),
      (t.helper.padEnd = function (e, t, n) {
        return (
          (t |= 0),
          (n = String(n || " ")),
          e.length > t
            ? String(e)
            : ((t -= e.length) > n.length && (n += n.repeat(t / n.length)),
              String(e) + n.slice(0, t))
        );
      }),
      "undefined" == typeof console &&
        (console = {
          warn: function (e) {
            alert(e);
          },
          log: function (e) {
            alert(e);
          },
          error: function (e) {
            throw e;
          },
        }),
      (t.helper.regexes = { asteriskDashAndColon: /([*_:~])/g }),
      (t.helper.emojis = {
        "+1": "👍",
        "-1": "👎",
        100: "💯",
        1234: "🔢",
        "1st_place_medal": "🥇",
        "2nd_place_medal": "🥈",
        "3rd_place_medal": "🥉",
        "8ball": "🎱",
        a: "🅰️",
        ab: "🆎",
        abc: "🔤",
        abcd: "🔡",
        accept: "🉑",
        aerial_tramway: "🚡",
        airplane: "✈️",
        alarm_clock: "⏰",
        alembic: "⚗️",
        alien: "👽",
        ambulance: "🚑",
        amphora: "🏺",
        anchor: "⚓️",
        angel: "👼",
        anger: "💢",
        angry: "😠",
        anguished: "😧",
        ant: "🐜",
        apple: "🍎",
        aquarius: "♒️",
        aries: "♈️",
        arrow_backward: "◀️",
        arrow_double_down: "⏬",
        arrow_double_up: "⏫",
        arrow_down: "⬇️",
        arrow_down_small: "🔽",
        arrow_forward: "▶️",
        arrow_heading_down: "⤵️",
        arrow_heading_up: "⤴️",
        arrow_left: "⬅️",
        arrow_lower_left: "↙️",
        arrow_lower_right: "↘️",
        arrow_right: "➡️",
        arrow_right_hook: "↪️",
        arrow_up: "⬆️",
        arrow_up_down: "↕️",
        arrow_up_small: "🔼",
        arrow_upper_left: "↖️",
        arrow_upper_right: "↗️",
        arrows_clockwise: "🔃",
        arrows_counterclockwise: "🔄",
        art: "🎨",
        articulated_lorry: "🚛",
        artificial_satellite: "🛰",
        astonished: "😲",
        athletic_shoe: "👟",
        atm: "🏧",
        atom_symbol: "⚛️",
        avocado: "🥑",
        b: "🅱️",
        baby: "👶",
        baby_bottle: "🍼",
        baby_chick: "🐤",
        baby_symbol: "🚼",
        back: "🔙",
        bacon: "🥓",
        badminton: "🏸",
        baggage_claim: "🛄",
        baguette_bread: "🥖",
        balance_scale: "⚖️",
        balloon: "🎈",
        ballot_box: "🗳",
        ballot_box_with_check: "☑️",
        bamboo: "🎍",
        banana: "🍌",
        bangbang: "‼️",
        bank: "🏦",
        bar_chart: "📊",
        barber: "💈",
        baseball: "⚾️",
        basketball: "🏀",
        basketball_man: "⛹️",
        basketball_woman: "⛹️&zwj;♀️",
        bat: "🦇",
        bath: "🛀",
        bathtub: "🛁",
        battery: "🔋",
        beach_umbrella: "🏖",
        bear: "🐻",
        bed: "🛏",
        bee: "🐝",
        beer: "🍺",
        beers: "🍻",
        beetle: "🐞",
        beginner: "🔰",
        bell: "🔔",
        bellhop_bell: "🛎",
        bento: "🍱",
        biking_man: "🚴",
        bike: "🚲",
        biking_woman: "🚴&zwj;♀️",
        bikini: "👙",
        biohazard: "☣️",
        bird: "🐦",
        birthday: "🎂",
        black_circle: "⚫️",
        black_flag: "🏴",
        black_heart: "🖤",
        black_joker: "🃏",
        black_large_square: "⬛️",
        black_medium_small_square: "◾️",
        black_medium_square: "◼️",
        black_nib: "✒️",
        black_small_square: "▪️",
        black_square_button: "🔲",
        blonde_man: "👱",
        blonde_woman: "👱&zwj;♀️",
        blossom: "🌼",
        blowfish: "🐡",
        blue_book: "📘",
        blue_car: "🚙",
        blue_heart: "💙",
        blush: "😊",
        boar: "🐗",
        boat: "⛵️",
        bomb: "💣",
        book: "📖",
        bookmark: "🔖",
        bookmark_tabs: "📑",
        books: "📚",
        boom: "💥",
        boot: "👢",
        bouquet: "💐",
        bowing_man: "🙇",
        bow_and_arrow: "🏹",
        bowing_woman: "🙇&zwj;♀️",
        bowling: "🎳",
        boxing_glove: "🥊",
        boy: "👦",
        bread: "🍞",
        bride_with_veil: "👰",
        bridge_at_night: "🌉",
        briefcase: "💼",
        broken_heart: "💔",
        bug: "🐛",
        building_construction: "🏗",
        bulb: "💡",
        bullettrain_front: "🚅",
        bullettrain_side: "🚄",
        burrito: "🌯",
        bus: "🚌",
        business_suit_levitating: "🕴",
        busstop: "🚏",
        bust_in_silhouette: "👤",
        busts_in_silhouette: "👥",
        butterfly: "🦋",
        cactus: "🌵",
        cake: "🍰",
        calendar: "📆",
        call_me_hand: "🤙",
        calling: "📲",
        camel: "🐫",
        camera: "📷",
        camera_flash: "📸",
        camping: "🏕",
        cancer: "♋️",
        candle: "🕯",
        candy: "🍬",
        canoe: "🛶",
        capital_abcd: "🔠",
        capricorn: "♑️",
        car: "🚗",
        card_file_box: "🗃",
        card_index: "📇",
        card_index_dividers: "🗂",
        carousel_horse: "🎠",
        carrot: "🥕",
        cat: "🐱",
        cat2: "🐈",
        cd: "💿",
        chains: "⛓",
        champagne: "🍾",
        chart: "💹",
        chart_with_downwards_trend: "📉",
        chart_with_upwards_trend: "📈",
        checkered_flag: "🏁",
        cheese: "🧀",
        cherries: "🍒",
        cherry_blossom: "🌸",
        chestnut: "🌰",
        chicken: "🐔",
        children_crossing: "🚸",
        chipmunk: "🐿",
        chocolate_bar: "🍫",
        christmas_tree: "🎄",
        church: "⛪️",
        cinema: "🎦",
        circus_tent: "🎪",
        city_sunrise: "🌇",
        city_sunset: "🌆",
        cityscape: "🏙",
        cl: "🆑",
        clamp: "🗜",
        clap: "👏",
        clapper: "🎬",
        classical_building: "🏛",
        clinking_glasses: "🥂",
        clipboard: "📋",
        clock1: "🕐",
        clock10: "🕙",
        clock1030: "🕥",
        clock11: "🕚",
        clock1130: "🕦",
        clock12: "🕛",
        clock1230: "🕧",
        clock130: "🕜",
        clock2: "🕑",
        clock230: "🕝",
        clock3: "🕒",
        clock330: "🕞",
        clock4: "🕓",
        clock430: "🕟",
        clock5: "🕔",
        clock530: "🕠",
        clock6: "🕕",
        clock630: "🕡",
        clock7: "🕖",
        clock730: "🕢",
        clock8: "🕗",
        clock830: "🕣",
        clock9: "🕘",
        clock930: "🕤",
        closed_book: "📕",
        closed_lock_with_key: "🔐",
        closed_umbrella: "🌂",
        cloud: "☁️",
        cloud_with_lightning: "🌩",
        cloud_with_lightning_and_rain: "⛈",
        cloud_with_rain: "🌧",
        cloud_with_snow: "🌨",
        clown_face: "🤡",
        clubs: "♣️",
        cocktail: "🍸",
        coffee: "☕️",
        coffin: "⚰️",
        cold_sweat: "😰",
        comet: "☄️",
        computer: "💻",
        computer_mouse: "🖱",
        confetti_ball: "🎊",
        confounded: "😖",
        confused: "😕",
        congratulations: "㊗️",
        construction: "🚧",
        construction_worker_man: "👷",
        construction_worker_woman: "👷&zwj;♀️",
        control_knobs: "🎛",
        convenience_store: "🏪",
        cookie: "🍪",
        cool: "🆒",
        policeman: "👮",
        copyright: "©️",
        corn: "🌽",
        couch_and_lamp: "🛋",
        couple: "👫",
        couple_with_heart_woman_man: "💑",
        couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
        couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
        couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
        couplekiss_man_woman: "💏",
        couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
        cow: "🐮",
        cow2: "🐄",
        cowboy_hat_face: "🤠",
        crab: "🦀",
        crayon: "🖍",
        credit_card: "💳",
        crescent_moon: "🌙",
        cricket: "🏏",
        crocodile: "🐊",
        croissant: "🥐",
        crossed_fingers: "🤞",
        crossed_flags: "🎌",
        crossed_swords: "⚔️",
        crown: "👑",
        cry: "😢",
        crying_cat_face: "😿",
        crystal_ball: "🔮",
        cucumber: "🥒",
        cupid: "💘",
        curly_loop: "➰",
        currency_exchange: "💱",
        curry: "🍛",
        custard: "🍮",
        customs: "🛃",
        cyclone: "🌀",
        dagger: "🗡",
        dancer: "💃",
        dancing_women: "👯",
        dancing_men: "👯&zwj;♂️",
        dango: "🍡",
        dark_sunglasses: "🕶",
        dart: "🎯",
        dash: "💨",
        date: "📅",
        deciduous_tree: "🌳",
        deer: "🦌",
        department_store: "🏬",
        derelict_house: "🏚",
        desert: "🏜",
        desert_island: "🏝",
        desktop_computer: "🖥",
        male_detective: "🕵️",
        diamond_shape_with_a_dot_inside: "💠",
        diamonds: "♦️",
        disappointed: "😞",
        disappointed_relieved: "😥",
        dizzy: "💫",
        dizzy_face: "😵",
        do_not_litter: "🚯",
        dog: "🐶",
        dog2: "🐕",
        dollar: "💵",
        dolls: "🎎",
        dolphin: "🐬",
        door: "🚪",
        doughnut: "🍩",
        dove: "🕊",
        dragon: "🐉",
        dragon_face: "🐲",
        dress: "👗",
        dromedary_camel: "🐪",
        drooling_face: "🤤",
        droplet: "💧",
        drum: "🥁",
        duck: "🦆",
        dvd: "📀",
        "e-mail": "📧",
        eagle: "🦅",
        ear: "👂",
        ear_of_rice: "🌾",
        earth_africa: "🌍",
        earth_americas: "🌎",
        earth_asia: "🌏",
        egg: "🥚",
        eggplant: "🍆",
        eight_pointed_black_star: "✴️",
        eight_spoked_asterisk: "✳️",
        electric_plug: "🔌",
        elephant: "🐘",
        email: "✉️",
        end: "🔚",
        envelope_with_arrow: "📩",
        euro: "💶",
        european_castle: "🏰",
        european_post_office: "🏤",
        evergreen_tree: "🌲",
        exclamation: "❗️",
        expressionless: "😑",
        eye: "👁",
        eye_speech_bubble: "👁&zwj;🗨",
        eyeglasses: "👓",
        eyes: "👀",
        face_with_head_bandage: "🤕",
        face_with_thermometer: "🤒",
        fist_oncoming: "👊",
        factory: "🏭",
        fallen_leaf: "🍂",
        family_man_woman_boy: "👪",
        family_man_boy: "👨&zwj;👦",
        family_man_boy_boy: "👨&zwj;👦&zwj;👦",
        family_man_girl: "👨&zwj;👧",
        family_man_girl_boy: "👨&zwj;👧&zwj;👦",
        family_man_girl_girl: "👨&zwj;👧&zwj;👧",
        family_man_man_boy: "👨&zwj;👨&zwj;👦",
        family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
        family_man_man_girl: "👨&zwj;👨&zwj;👧",
        family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
        family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
        family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
        family_man_woman_girl: "👨&zwj;👩&zwj;👧",
        family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
        family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
        family_woman_boy: "👩&zwj;👦",
        family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
        family_woman_girl: "👩&zwj;👧",
        family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
        family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
        family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
        family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
        family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
        family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
        family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
        fast_forward: "⏩",
        fax: "📠",
        fearful: "😨",
        feet: "🐾",
        female_detective: "🕵️&zwj;♀️",
        ferris_wheel: "🎡",
        ferry: "⛴",
        field_hockey: "🏑",
        file_cabinet: "🗄",
        file_folder: "📁",
        film_projector: "📽",
        film_strip: "🎞",
        fire: "🔥",
        fire_engine: "🚒",
        fireworks: "🎆",
        first_quarter_moon: "🌓",
        first_quarter_moon_with_face: "🌛",
        fish: "🐟",
        fish_cake: "🍥",
        fishing_pole_and_fish: "🎣",
        fist_raised: "✊",
        fist_left: "🤛",
        fist_right: "🤜",
        flags: "🎏",
        flashlight: "🔦",
        fleur_de_lis: "⚜️",
        flight_arrival: "🛬",
        flight_departure: "🛫",
        floppy_disk: "💾",
        flower_playing_cards: "🎴",
        flushed: "😳",
        fog: "🌫",
        foggy: "🌁",
        football: "🏈",
        footprints: "👣",
        fork_and_knife: "🍴",
        fountain: "⛲️",
        fountain_pen: "🖋",
        four_leaf_clover: "🍀",
        fox_face: "🦊",
        framed_picture: "🖼",
        free: "🆓",
        fried_egg: "🍳",
        fried_shrimp: "🍤",
        fries: "🍟",
        frog: "🐸",
        frowning: "😦",
        frowning_face: "☹️",
        frowning_man: "🙍&zwj;♂️",
        frowning_woman: "🙍",
        middle_finger: "🖕",
        fuelpump: "⛽️",
        full_moon: "🌕",
        full_moon_with_face: "🌝",
        funeral_urn: "⚱️",
        game_die: "🎲",
        gear: "⚙️",
        gem: "💎",
        gemini: "♊️",
        ghost: "👻",
        gift: "🎁",
        gift_heart: "💝",
        girl: "👧",
        globe_with_meridians: "🌐",
        goal_net: "🥅",
        goat: "🐐",
        golf: "⛳️",
        golfing_man: "🏌️",
        golfing_woman: "🏌️&zwj;♀️",
        gorilla: "🦍",
        grapes: "🍇",
        green_apple: "🍏",
        green_book: "📗",
        green_heart: "💚",
        green_salad: "🥗",
        grey_exclamation: "❕",
        grey_question: "❔",
        grimacing: "😬",
        grin: "😁",
        grinning: "😀",
        guardsman: "💂",
        guardswoman: "💂&zwj;♀️",
        guitar: "🎸",
        gun: "🔫",
        haircut_woman: "💇",
        haircut_man: "💇&zwj;♂️",
        hamburger: "🍔",
        hammer: "🔨",
        hammer_and_pick: "⚒",
        hammer_and_wrench: "🛠",
        hamster: "🐹",
        hand: "✋",
        handbag: "👜",
        handshake: "🤝",
        hankey: "💩",
        hatched_chick: "🐥",
        hatching_chick: "🐣",
        headphones: "🎧",
        hear_no_evil: "🙉",
        heart: "❤️",
        heart_decoration: "💟",
        heart_eyes: "😍",
        heart_eyes_cat: "😻",
        heartbeat: "💓",
        heartpulse: "💗",
        hearts: "♥️",
        heavy_check_mark: "✔️",
        heavy_division_sign: "➗",
        heavy_dollar_sign: "💲",
        heavy_heart_exclamation: "❣️",
        heavy_minus_sign: "➖",
        heavy_multiplication_x: "✖️",
        heavy_plus_sign: "➕",
        helicopter: "🚁",
        herb: "🌿",
        hibiscus: "🌺",
        high_brightness: "🔆",
        high_heel: "👠",
        hocho: "🔪",
        hole: "🕳",
        honey_pot: "🍯",
        horse: "🐴",
        horse_racing: "🏇",
        hospital: "🏥",
        hot_pepper: "🌶",
        hotdog: "🌭",
        hotel: "🏨",
        hotsprings: "♨️",
        hourglass: "⌛️",
        hourglass_flowing_sand: "⏳",
        house: "🏠",
        house_with_garden: "🏡",
        houses: "🏘",
        hugs: "🤗",
        hushed: "😯",
        ice_cream: "🍨",
        ice_hockey: "🏒",
        ice_skate: "⛸",
        icecream: "🍦",
        id: "🆔",
        ideograph_advantage: "🉐",
        imp: "👿",
        inbox_tray: "📥",
        incoming_envelope: "📨",
        tipping_hand_woman: "💁",
        information_source: "ℹ️",
        innocent: "😇",
        interrobang: "⁉️",
        iphone: "📱",
        izakaya_lantern: "🏮",
        jack_o_lantern: "🎃",
        japan: "🗾",
        japanese_castle: "🏯",
        japanese_goblin: "👺",
        japanese_ogre: "👹",
        jeans: "👖",
        joy: "😂",
        joy_cat: "😹",
        joystick: "🕹",
        kaaba: "🕋",
        key: "🔑",
        keyboard: "⌨️",
        keycap_ten: "🔟",
        kick_scooter: "🛴",
        kimono: "👘",
        kiss: "💋",
        kissing: "😗",
        kissing_cat: "😽",
        kissing_closed_eyes: "😚",
        kissing_heart: "😘",
        kissing_smiling_eyes: "😙",
        kiwi_fruit: "🥝",
        koala: "🐨",
        koko: "🈁",
        label: "🏷",
        large_blue_circle: "🔵",
        large_blue_diamond: "🔷",
        large_orange_diamond: "🔶",
        last_quarter_moon: "🌗",
        last_quarter_moon_with_face: "🌜",
        latin_cross: "✝️",
        laughing: "😆",
        leaves: "🍃",
        ledger: "📒",
        left_luggage: "🛅",
        left_right_arrow: "↔️",
        leftwards_arrow_with_hook: "↩️",
        lemon: "🍋",
        leo: "♌️",
        leopard: "🐆",
        level_slider: "🎚",
        libra: "♎️",
        light_rail: "🚈",
        link: "🔗",
        lion: "🦁",
        lips: "👄",
        lipstick: "💄",
        lizard: "🦎",
        lock: "🔒",
        lock_with_ink_pen: "🔏",
        lollipop: "🍭",
        loop: "➿",
        loud_sound: "🔊",
        loudspeaker: "📢",
        love_hotel: "🏩",
        love_letter: "💌",
        low_brightness: "🔅",
        lying_face: "🤥",
        m: "Ⓜ️",
        mag: "🔍",
        mag_right: "🔎",
        mahjong: "🀄️",
        mailbox: "📫",
        mailbox_closed: "📪",
        mailbox_with_mail: "📬",
        mailbox_with_no_mail: "📭",
        man: "👨",
        man_artist: "👨&zwj;🎨",
        man_astronaut: "👨&zwj;🚀",
        man_cartwheeling: "🤸&zwj;♂️",
        man_cook: "👨&zwj;🍳",
        man_dancing: "🕺",
        man_facepalming: "🤦&zwj;♂️",
        man_factory_worker: "👨&zwj;🏭",
        man_farmer: "👨&zwj;🌾",
        man_firefighter: "👨&zwj;🚒",
        man_health_worker: "👨&zwj;⚕️",
        man_in_tuxedo: "🤵",
        man_judge: "👨&zwj;⚖️",
        man_juggling: "🤹&zwj;♂️",
        man_mechanic: "👨&zwj;🔧",
        man_office_worker: "👨&zwj;💼",
        man_pilot: "👨&zwj;✈️",
        man_playing_handball: "🤾&zwj;♂️",
        man_playing_water_polo: "🤽&zwj;♂️",
        man_scientist: "👨&zwj;🔬",
        man_shrugging: "🤷&zwj;♂️",
        man_singer: "👨&zwj;🎤",
        man_student: "👨&zwj;🎓",
        man_teacher: "👨&zwj;🏫",
        man_technologist: "👨&zwj;💻",
        man_with_gua_pi_mao: "👲",
        man_with_turban: "👳",
        tangerine: "🍊",
        mans_shoe: "👞",
        mantelpiece_clock: "🕰",
        maple_leaf: "🍁",
        martial_arts_uniform: "🥋",
        mask: "😷",
        massage_woman: "💆",
        massage_man: "💆&zwj;♂️",
        meat_on_bone: "🍖",
        medal_military: "🎖",
        medal_sports: "🏅",
        mega: "📣",
        melon: "🍈",
        memo: "📝",
        men_wrestling: "🤼&zwj;♂️",
        menorah: "🕎",
        mens: "🚹",
        metal: "🤘",
        metro: "🚇",
        microphone: "🎤",
        microscope: "🔬",
        milk_glass: "🥛",
        milky_way: "🌌",
        minibus: "🚐",
        minidisc: "💽",
        mobile_phone_off: "📴",
        money_mouth_face: "🤑",
        money_with_wings: "💸",
        moneybag: "💰",
        monkey: "🐒",
        monkey_face: "🐵",
        monorail: "🚝",
        moon: "🌔",
        mortar_board: "🎓",
        mosque: "🕌",
        motor_boat: "🛥",
        motor_scooter: "🛵",
        motorcycle: "🏍",
        motorway: "🛣",
        mount_fuji: "🗻",
        mountain: "⛰",
        mountain_biking_man: "🚵",
        mountain_biking_woman: "🚵&zwj;♀️",
        mountain_cableway: "🚠",
        mountain_railway: "🚞",
        mountain_snow: "🏔",
        mouse: "🐭",
        mouse2: "🐁",
        movie_camera: "🎥",
        moyai: "🗿",
        mrs_claus: "🤶",
        muscle: "💪",
        mushroom: "🍄",
        musical_keyboard: "🎹",
        musical_note: "🎵",
        musical_score: "🎼",
        mute: "🔇",
        nail_care: "💅",
        name_badge: "📛",
        national_park: "🏞",
        nauseated_face: "🤢",
        necktie: "👔",
        negative_squared_cross_mark: "❎",
        nerd_face: "🤓",
        neutral_face: "😐",
        new: "🆕",
        new_moon: "🌑",
        new_moon_with_face: "🌚",
        newspaper: "📰",
        newspaper_roll: "🗞",
        next_track_button: "⏭",
        ng: "🆖",
        no_good_man: "🙅&zwj;♂️",
        no_good_woman: "🙅",
        night_with_stars: "🌃",
        no_bell: "🔕",
        no_bicycles: "🚳",
        no_entry: "⛔️",
        no_entry_sign: "🚫",
        no_mobile_phones: "📵",
        no_mouth: "😶",
        no_pedestrians: "🚷",
        no_smoking: "🚭",
        "non-potable_water": "🚱",
        nose: "👃",
        notebook: "📓",
        notebook_with_decorative_cover: "📔",
        notes: "🎶",
        nut_and_bolt: "🔩",
        o: "⭕️",
        o2: "🅾️",
        ocean: "🌊",
        octopus: "🐙",
        oden: "🍢",
        office: "🏢",
        oil_drum: "🛢",
        ok: "🆗",
        ok_hand: "👌",
        ok_man: "🙆&zwj;♂️",
        ok_woman: "🙆",
        old_key: "🗝",
        older_man: "👴",
        older_woman: "👵",
        om: "🕉",
        on: "🔛",
        oncoming_automobile: "🚘",
        oncoming_bus: "🚍",
        oncoming_police_car: "🚔",
        oncoming_taxi: "🚖",
        open_file_folder: "📂",
        open_hands: "👐",
        open_mouth: "😮",
        open_umbrella: "☂️",
        ophiuchus: "⛎",
        orange_book: "📙",
        orthodox_cross: "☦️",
        outbox_tray: "📤",
        owl: "🦉",
        ox: "🐂",
        package: "📦",
        page_facing_up: "📄",
        page_with_curl: "📃",
        pager: "📟",
        paintbrush: "🖌",
        palm_tree: "🌴",
        pancakes: "🥞",
        panda_face: "🐼",
        paperclip: "📎",
        paperclips: "🖇",
        parasol_on_ground: "⛱",
        parking: "🅿️",
        part_alternation_mark: "〽️",
        partly_sunny: "⛅️",
        passenger_ship: "🛳",
        passport_control: "🛂",
        pause_button: "⏸",
        peace_symbol: "☮️",
        peach: "🍑",
        peanuts: "🥜",
        pear: "🍐",
        pen: "🖊",
        pencil2: "✏️",
        penguin: "🐧",
        pensive: "😔",
        performing_arts: "🎭",
        persevere: "😣",
        person_fencing: "🤺",
        pouting_woman: "🙎",
        phone: "☎️",
        pick: "⛏",
        pig: "🐷",
        pig2: "🐖",
        pig_nose: "🐽",
        pill: "💊",
        pineapple: "🍍",
        ping_pong: "🏓",
        pisces: "♓️",
        pizza: "🍕",
        place_of_worship: "🛐",
        plate_with_cutlery: "🍽",
        play_or_pause_button: "⏯",
        point_down: "👇",
        point_left: "👈",
        point_right: "👉",
        point_up: "☝️",
        point_up_2: "👆",
        police_car: "🚓",
        policewoman: "👮&zwj;♀️",
        poodle: "🐩",
        popcorn: "🍿",
        post_office: "🏣",
        postal_horn: "📯",
        postbox: "📮",
        potable_water: "🚰",
        potato: "🥔",
        pouch: "👝",
        poultry_leg: "🍗",
        pound: "💷",
        rage: "😡",
        pouting_cat: "😾",
        pouting_man: "🙎&zwj;♂️",
        pray: "🙏",
        prayer_beads: "📿",
        pregnant_woman: "🤰",
        previous_track_button: "⏮",
        prince: "🤴",
        princess: "👸",
        printer: "🖨",
        purple_heart: "💜",
        purse: "👛",
        pushpin: "📌",
        put_litter_in_its_place: "🚮",
        question: "❓",
        rabbit: "🐰",
        rabbit2: "🐇",
        racehorse: "🐎",
        racing_car: "🏎",
        radio: "📻",
        radio_button: "🔘",
        radioactive: "☢️",
        railway_car: "🚃",
        railway_track: "🛤",
        rainbow: "🌈",
        rainbow_flag: "🏳️&zwj;🌈",
        raised_back_of_hand: "🤚",
        raised_hand_with_fingers_splayed: "🖐",
        raised_hands: "🙌",
        raising_hand_woman: "🙋",
        raising_hand_man: "🙋&zwj;♂️",
        ram: "🐏",
        ramen: "🍜",
        rat: "🐀",
        record_button: "⏺",
        recycle: "♻️",
        red_circle: "🔴",
        registered: "®️",
        relaxed: "☺️",
        relieved: "😌",
        reminder_ribbon: "🎗",
        repeat: "🔁",
        repeat_one: "🔂",
        rescue_worker_helmet: "⛑",
        restroom: "🚻",
        revolving_hearts: "💞",
        rewind: "⏪",
        rhinoceros: "🦏",
        ribbon: "🎀",
        rice: "🍚",
        rice_ball: "🍙",
        rice_cracker: "🍘",
        rice_scene: "🎑",
        right_anger_bubble: "🗯",
        ring: "💍",
        robot: "🤖",
        rocket: "🚀",
        rofl: "🤣",
        roll_eyes: "🙄",
        roller_coaster: "🎢",
        rooster: "🐓",
        rose: "🌹",
        rosette: "🏵",
        rotating_light: "🚨",
        round_pushpin: "📍",
        rowing_man: "🚣",
        rowing_woman: "🚣&zwj;♀️",
        rugby_football: "🏉",
        running_man: "🏃",
        running_shirt_with_sash: "🎽",
        running_woman: "🏃&zwj;♀️",
        sa: "🈂️",
        sagittarius: "♐️",
        sake: "🍶",
        sandal: "👡",
        santa: "🎅",
        satellite: "📡",
        saxophone: "🎷",
        school: "🏫",
        school_satchel: "🎒",
        scissors: "✂️",
        scorpion: "🦂",
        scorpius: "♏️",
        scream: "😱",
        scream_cat: "🙀",
        scroll: "📜",
        seat: "💺",
        secret: "㊙️",
        see_no_evil: "🙈",
        seedling: "🌱",
        selfie: "🤳",
        shallow_pan_of_food: "🥘",
        shamrock: "☘️",
        shark: "🦈",
        shaved_ice: "🍧",
        sheep: "🐑",
        shell: "🐚",
        shield: "🛡",
        shinto_shrine: "⛩",
        ship: "🚢",
        shirt: "👕",
        shopping: "🛍",
        shopping_cart: "🛒",
        shower: "🚿",
        shrimp: "🦐",
        signal_strength: "📶",
        six_pointed_star: "🔯",
        ski: "🎿",
        skier: "⛷",
        skull: "💀",
        skull_and_crossbones: "☠️",
        sleeping: "😴",
        sleeping_bed: "🛌",
        sleepy: "😪",
        slightly_frowning_face: "🙁",
        slightly_smiling_face: "🙂",
        slot_machine: "🎰",
        small_airplane: "🛩",
        small_blue_diamond: "🔹",
        small_orange_diamond: "🔸",
        small_red_triangle: "🔺",
        small_red_triangle_down: "🔻",
        smile: "😄",
        smile_cat: "😸",
        smiley: "😃",
        smiley_cat: "😺",
        smiling_imp: "😈",
        smirk: "😏",
        smirk_cat: "😼",
        smoking: "🚬",
        snail: "🐌",
        snake: "🐍",
        sneezing_face: "🤧",
        snowboarder: "🏂",
        snowflake: "❄️",
        snowman: "⛄️",
        snowman_with_snow: "☃️",
        sob: "😭",
        soccer: "⚽️",
        soon: "🔜",
        sos: "🆘",
        sound: "🔉",
        space_invader: "👾",
        spades: "♠️",
        spaghetti: "🍝",
        sparkle: "❇️",
        sparkler: "🎇",
        sparkles: "✨",
        sparkling_heart: "💖",
        speak_no_evil: "🙊",
        speaker: "🔈",
        speaking_head: "🗣",
        speech_balloon: "💬",
        speedboat: "🚤",
        spider: "🕷",
        spider_web: "🕸",
        spiral_calendar: "🗓",
        spiral_notepad: "🗒",
        spoon: "🥄",
        squid: "🦑",
        stadium: "🏟",
        star: "⭐️",
        star2: "🌟",
        star_and_crescent: "☪️",
        star_of_david: "✡️",
        stars: "🌠",
        station: "🚉",
        statue_of_liberty: "🗽",
        steam_locomotive: "🚂",
        stew: "🍲",
        stop_button: "⏹",
        stop_sign: "🛑",
        stopwatch: "⏱",
        straight_ruler: "📏",
        strawberry: "🍓",
        stuck_out_tongue: "😛",
        stuck_out_tongue_closed_eyes: "😝",
        stuck_out_tongue_winking_eye: "😜",
        studio_microphone: "🎙",
        stuffed_flatbread: "🥙",
        sun_behind_large_cloud: "🌥",
        sun_behind_rain_cloud: "🌦",
        sun_behind_small_cloud: "🌤",
        sun_with_face: "🌞",
        sunflower: "🌻",
        sunglasses: "😎",
        sunny: "☀️",
        sunrise: "🌅",
        sunrise_over_mountains: "🌄",
        surfing_man: "🏄",
        surfing_woman: "🏄&zwj;♀️",
        sushi: "🍣",
        suspension_railway: "🚟",
        sweat: "😓",
        sweat_drops: "💦",
        sweat_smile: "😅",
        sweet_potato: "🍠",
        swimming_man: "🏊",
        swimming_woman: "🏊&zwj;♀️",
        symbols: "🔣",
        synagogue: "🕍",
        syringe: "💉",
        taco: "🌮",
        tada: "🎉",
        tanabata_tree: "🎋",
        taurus: "♉️",
        taxi: "🚕",
        tea: "🍵",
        telephone_receiver: "📞",
        telescope: "🔭",
        tennis: "🎾",
        tent: "⛺️",
        thermometer: "🌡",
        thinking: "🤔",
        thought_balloon: "💭",
        ticket: "🎫",
        tickets: "🎟",
        tiger: "🐯",
        tiger2: "🐅",
        timer_clock: "⏲",
        tipping_hand_man: "💁&zwj;♂️",
        tired_face: "😫",
        tm: "™️",
        toilet: "🚽",
        tokyo_tower: "🗼",
        tomato: "🍅",
        tongue: "👅",
        top: "🔝",
        tophat: "🎩",
        tornado: "🌪",
        trackball: "🖲",
        tractor: "🚜",
        traffic_light: "🚥",
        train: "🚋",
        train2: "🚆",
        tram: "🚊",
        triangular_flag_on_post: "🚩",
        triangular_ruler: "📐",
        trident: "🔱",
        triumph: "😤",
        trolleybus: "🚎",
        trophy: "🏆",
        tropical_drink: "🍹",
        tropical_fish: "🐠",
        truck: "🚚",
        trumpet: "🎺",
        tulip: "🌷",
        tumbler_glass: "🥃",
        turkey: "🦃",
        turtle: "🐢",
        tv: "📺",
        twisted_rightwards_arrows: "🔀",
        two_hearts: "💕",
        two_men_holding_hands: "👬",
        two_women_holding_hands: "👭",
        u5272: "🈹",
        u5408: "🈴",
        u55b6: "🈺",
        u6307: "🈯️",
        u6708: "🈷️",
        u6709: "🈶",
        u6e80: "🈵",
        u7121: "🈚️",
        u7533: "🈸",
        u7981: "🈲",
        u7a7a: "🈳",
        umbrella: "☔️",
        unamused: "😒",
        underage: "🔞",
        unicorn: "🦄",
        unlock: "🔓",
        up: "🆙",
        upside_down_face: "🙃",
        v: "✌️",
        vertical_traffic_light: "🚦",
        vhs: "📼",
        vibration_mode: "📳",
        video_camera: "📹",
        video_game: "🎮",
        violin: "🎻",
        virgo: "♍️",
        volcano: "🌋",
        volleyball: "🏐",
        vs: "🆚",
        vulcan_salute: "🖖",
        walking_man: "🚶",
        walking_woman: "🚶&zwj;♀️",
        waning_crescent_moon: "🌘",
        waning_gibbous_moon: "🌖",
        warning: "⚠️",
        wastebasket: "🗑",
        watch: "⌚️",
        water_buffalo: "🐃",
        watermelon: "🍉",
        wave: "👋",
        wavy_dash: "〰️",
        waxing_crescent_moon: "🌒",
        wc: "🚾",
        weary: "😩",
        wedding: "💒",
        weight_lifting_man: "🏋️",
        weight_lifting_woman: "🏋️&zwj;♀️",
        whale: "🐳",
        whale2: "🐋",
        wheel_of_dharma: "☸️",
        wheelchair: "♿️",
        white_check_mark: "✅",
        white_circle: "⚪️",
        white_flag: "🏳️",
        white_flower: "💮",
        white_large_square: "⬜️",
        white_medium_small_square: "◽️",
        white_medium_square: "◻️",
        white_small_square: "▫️",
        white_square_button: "🔳",
        wilted_flower: "🥀",
        wind_chime: "🎐",
        wind_face: "🌬",
        wine_glass: "🍷",
        wink: "😉",
        wolf: "🐺",
        woman: "👩",
        woman_artist: "👩&zwj;🎨",
        woman_astronaut: "👩&zwj;🚀",
        woman_cartwheeling: "🤸&zwj;♀️",
        woman_cook: "👩&zwj;🍳",
        woman_facepalming: "🤦&zwj;♀️",
        woman_factory_worker: "👩&zwj;🏭",
        woman_farmer: "👩&zwj;🌾",
        woman_firefighter: "👩&zwj;🚒",
        woman_health_worker: "👩&zwj;⚕️",
        woman_judge: "👩&zwj;⚖️",
        woman_juggling: "🤹&zwj;♀️",
        woman_mechanic: "👩&zwj;🔧",
        woman_office_worker: "👩&zwj;💼",
        woman_pilot: "👩&zwj;✈️",
        woman_playing_handball: "🤾&zwj;♀️",
        woman_playing_water_polo: "🤽&zwj;♀️",
        woman_scientist: "👩&zwj;🔬",
        woman_shrugging: "🤷&zwj;♀️",
        woman_singer: "👩&zwj;🎤",
        woman_student: "👩&zwj;🎓",
        woman_teacher: "👩&zwj;🏫",
        woman_technologist: "👩&zwj;💻",
        woman_with_turban: "👳&zwj;♀️",
        womans_clothes: "👚",
        womans_hat: "👒",
        women_wrestling: "🤼&zwj;♀️",
        womens: "🚺",
        world_map: "🗺",
        worried: "😟",
        wrench: "🔧",
        writing_hand: "✍️",
        x: "❌",
        yellow_heart: "💛",
        yen: "💴",
        yin_yang: "☯️",
        yum: "😋",
        zap: "⚡️",
        zipper_mouth_face: "🤐",
        zzz: "💤",
        octocat:
          '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
        showdown:
          "<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>",
      }),
      (t.Converter = function (e) {
        var n = {},
          l = [],
          c = [],
          d = {},
          u = o,
          p = { parsed: {}, raw: "", format: "" };
        function m(e, n) {
          if (((n = n || null), t.helper.isString(e))) {
            if (((n = e = t.helper.stdExtName(e)), t.extensions[e]))
              return void (function (e, n) {
                "function" == typeof e && (e = e(new t.Converter())),
                  t.helper.isArray(e) || (e = [e]);
                var r = s(e, n);
                if (!r.valid) throw Error(r.error);
                for (var i = 0; i < e.length; ++i)
                  switch (e[i].type) {
                    case "lang":
                      l.push(e[i]);
                      break;
                    case "output":
                      c.push(e[i]);
                      break;
                    default:
                      throw Error(
                        "Extension loader error: Type unrecognized!!!"
                      );
                  }
              })(t.extensions[e], e);
            if (t.helper.isUndefined(r[e]))
              throw Error(
                'Extension "' +
                  e +
                  '" could not be loaded. It was either not found or is not a valid extension.'
              );
            e = r[e];
          }
          "function" == typeof e && (e = e()), t.helper.isArray(e) || (e = [e]);
          var i = s(e, n);
          if (!i.valid) throw Error(i.error);
          for (var o = 0; o < e.length; ++o) {
            switch (e[o].type) {
              case "lang":
                l.push(e[o]);
                break;
              case "output":
                c.push(e[o]);
            }
            if (e[o].hasOwnProperty("listeners"))
              for (var a in e[o].listeners)
                e[o].listeners.hasOwnProperty(a) && f(a, e[o].listeners[a]);
          }
        }
        function f(e, n) {
          if (!t.helper.isString(e))
            throw Error(
              "Invalid argument in converter.listen() method: name must be a string, but " +
                typeof e +
                " given"
            );
          if ("function" != typeof n)
            throw Error(
              "Invalid argument in converter.listen() method: callback must be a function, but " +
                typeof n +
                " given"
            );
          d.hasOwnProperty(e) || (d[e] = []), d[e].push(n);
        }
        !(function () {
          for (var r in ((e = e || {}), i))
            i.hasOwnProperty(r) && (n[r] = i[r]);
          if ("object" != typeof e)
            throw Error(
              "Converter expects the passed parameter to be an object, but " +
                typeof e +
                " was passed instead."
            );
          for (var o in e) e.hasOwnProperty(o) && (n[o] = e[o]);
          n.extensions && t.helper.forEach(n.extensions, m);
        })(),
          (this._dispatch = function (e, t, n, r) {
            if (d.hasOwnProperty(e))
              for (var i = 0; i < d[e].length; ++i) {
                var o = d[e][i](e, t, this, n, r);
                o && void 0 !== o && (t = o);
              }
            return t;
          }),
          (this.listen = function (e, t) {
            return f(e, t), this;
          }),
          (this.makeHtml = function (e) {
            if (!e) return e;
            var r = {
              gHtmlBlocks: [],
              gHtmlMdBlocks: [],
              gHtmlSpans: [],
              gUrls: {},
              gTitles: {},
              gDimensions: {},
              gListLevel: 0,
              hashLinkCounts: {},
              langExtensions: l,
              outputModifiers: c,
              converter: this,
              ghCodeBlocks: [],
              metadata: { parsed: {}, raw: "", format: "" },
            };
            return (
              (e = (e = (e = (e = (e = e.replace(/¨/g, "¨T")).replace(
                /\$/g,
                "¨D"
              )).replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).replace(
                /\u00A0/g,
                "&nbsp;"
              )),
              n.smartIndentationFix &&
                (e = (function (e) {
                  var t = e.match(/^\s*/)[0].length,
                    n = new RegExp("^\\s{0," + t + "}", "gm");
                  return e.replace(n, "");
                })(e)),
              (e = "\n\n" + e + "\n\n"),
              (e = (e = t.subParser("detab")(e, n, r)).replace(
                /^[ \t]+$/gm,
                ""
              )),
              t.helper.forEach(l, function (i) {
                e = t.subParser("runExtension")(i, e, n, r);
              }),
              (e = t.subParser("metadata")(e, n, r)),
              (e = t.subParser("hashPreCodeTags")(e, n, r)),
              (e = t.subParser("githubCodeBlocks")(e, n, r)),
              (e = t.subParser("hashHTMLBlocks")(e, n, r)),
              (e = t.subParser("hashCodeTags")(e, n, r)),
              (e = t.subParser("stripLinkDefinitions")(e, n, r)),
              (e = t.subParser("blockGamut")(e, n, r)),
              (e = t.subParser("unhashHTMLSpans")(e, n, r)),
              (e = (e = (e = t.subParser("unescapeSpecialChars")(
                e,
                n,
                r
              )).replace(/¨D/g, "$$")).replace(/¨T/g, "¨")),
              (e = t.subParser("completeHTMLDocument")(e, n, r)),
              t.helper.forEach(c, function (i) {
                e = t.subParser("runExtension")(i, e, n, r);
              }),
              (p = r.metadata),
              e
            );
          }),
          (this.makeMarkdown = this.makeMd =
            function (e, n) {
              if (
                ((e = (e = (e = e.replace(/\r\n/g, "\n")).replace(
                  /\r/g,
                  "\n"
                )).replace(/>[ \t]+</, ">¨NBSP;<")),
                !n)
              ) {
                if (!window || !window.document)
                  throw new Error(
                    "HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM"
                  );
                n = window.document;
              }
              var r = n.createElement("div");
              r.innerHTML = e;
              var i = {
                preList: (function (e) {
                  for (
                    var n = e.querySelectorAll("pre"), r = [], i = 0;
                    i < n.length;
                    ++i
                  )
                    if (
                      1 === n[i].childElementCount &&
                      "code" === n[i].firstChild.tagName.toLowerCase()
                    ) {
                      var o = n[i].firstChild.innerHTML.trim(),
                        a = n[i].firstChild.getAttribute("data-language") || "";
                      if ("" === a)
                        for (
                          var s = n[i].firstChild.className.split(" "), l = 0;
                          l < s.length;
                          ++l
                        ) {
                          var c = s[l].match(/^language-(.+)$/);
                          if (null !== c) {
                            a = c[1];
                            break;
                          }
                        }
                      (o = t.helper.unescapeHTMLEntities(o)),
                        r.push(o),
                        (n[i].outerHTML =
                          '<precode language="' +
                          a +
                          '" precodenum="' +
                          i.toString() +
                          '"></precode>');
                    } else
                      r.push(n[i].innerHTML),
                        (n[i].innerHTML = ""),
                        n[i].setAttribute("prenum", i.toString());
                  return r;
                })(r),
              };
              !(function e(t) {
                for (var n = 0; n < t.childNodes.length; ++n) {
                  var r = t.childNodes[n];
                  3 === r.nodeType
                    ? /\S/.test(r.nodeValue) || /^[ ]+$/.test(r.nodeValue)
                      ? ((r.nodeValue = r.nodeValue.split("\n").join(" ")),
                        (r.nodeValue = r.nodeValue.replace(/(\s)+/g, "$1")))
                      : (t.removeChild(r), --n)
                    : 1 === r.nodeType && e(r);
                }
              })(r);
              for (var o = r.childNodes, a = "", s = 0; s < o.length; s++)
                a += t.subParser("makeMarkdown.node")(o[s], i);
              return a;
            }),
          (this.setOption = function (e, t) {
            n[e] = t;
          }),
          (this.getOption = function (e) {
            return n[e];
          }),
          (this.getOptions = function () {
            return n;
          }),
          (this.addExtension = function (e, t) {
            m(e, (t = t || null));
          }),
          (this.useExtension = function (e) {
            m(e);
          }),
          (this.setFlavor = function (e) {
            if (!a.hasOwnProperty(e)) throw Error(e + " flavor was not found");
            var t = a[e];
            for (var r in ((u = e), t)) t.hasOwnProperty(r) && (n[r] = t[r]);
          }),
          (this.getFlavor = function () {
            return u;
          }),
          (this.removeExtension = function (e) {
            t.helper.isArray(e) || (e = [e]);
            for (var n = 0; n < e.length; ++n) {
              for (var r = e[n], i = 0; i < l.length; ++i)
                l[i] === r && l.splice(i, 1);
              for (var o = 0; o < c.length; ++o) c[o] === r && c.splice(o, 1);
            }
          }),
          (this.getAllExtensions = function () {
            return { language: l, output: c };
          }),
          (this.getMetadata = function (e) {
            return e ? p.raw : p.parsed;
          }),
          (this.getMetadataFormat = function () {
            return p.format;
          }),
          (this._setMetadataPair = function (e, t) {
            p.parsed[e] = t;
          }),
          (this._setMetadataFormat = function (e) {
            p.format = e;
          }),
          (this._setMetadataRaw = function (e) {
            p.raw = e;
          });
      }),
      t.subParser("anchors", function (e, n, r) {
        var i = function (e, i, o, a, s, l, c) {
          if (
            (t.helper.isUndefined(c) && (c = ""),
            (o = o.toLowerCase()),
            e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
          )
            a = "";
          else if (!a) {
            if (
              (o || (o = i.toLowerCase().replace(/ ?\n/g, " ")),
              (a = "#" + o),
              t.helper.isUndefined(r.gUrls[o]))
            )
              return e;
            (a = r.gUrls[o]),
              t.helper.isUndefined(r.gTitles[o]) || (c = r.gTitles[o]);
          }
          var d =
            '<a href="' +
            (a = a.replace(
              t.helper.regexes.asteriskDashAndColon,
              t.helper.escapeCharactersCallback
            )) +
            '"';
          return (
            "" !== c &&
              null !== c &&
              (d +=
                ' title="' +
                (c = (c = c.replace(/"/g, "&quot;")).replace(
                  t.helper.regexes.asteriskDashAndColon,
                  t.helper.escapeCharactersCallback
                )) +
                '"'),
            n.openLinksInNewWindow &&
              !/^#/.test(a) &&
              (d += ' rel="noopener noreferrer" target="¨E95Eblank"'),
            (d += ">" + i + "</a>")
          );
        };
        return (
          (e = (e = (e = (e = (e = r.converter._dispatch(
            "anchors.before",
            e,
            n,
            r
          )).replace(
            /\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,
            i
          )).replace(
            /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
            i
          )).replace(
            /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
            i
          )).replace(/\[([^\[\]]+)]()()()()()/g, i)),
          n.ghMentions &&
            (e = e.replace(
              /(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim,
              function (e, r, i, o, a) {
                if ("\\" === i) return r + o;
                if (!t.helper.isString(n.ghMentionsLink))
                  throw new Error("ghMentionsLink option must be a string");
                var s = n.ghMentionsLink.replace(/\{u}/g, a),
                  l = "";
                return (
                  n.openLinksInNewWindow &&
                    (l = ' rel="noopener noreferrer" target="¨E95Eblank"'),
                  r + '<a href="' + s + '"' + l + ">" + o + "</a>"
                );
              }
            )),
          (e = r.converter._dispatch("anchors.after", e, n, r))
        );
      });
    var d =
        /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
      u =
        /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
      p = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
      m =
        /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,
      f = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
      h = function (e) {
        return function (n, r, i, o, a, s, l) {
          var c = (i = i.replace(
              t.helper.regexes.asteriskDashAndColon,
              t.helper.escapeCharactersCallback
            )),
            d = "",
            u = "",
            p = r || "",
            m = l || "";
          return (
            /^www\./i.test(i) && (i = i.replace(/^www\./i, "http://www.")),
            e.excludeTrailingPunctuationFromURLs && s && (d = s),
            e.openLinksInNewWindow &&
              (u = ' rel="noopener noreferrer" target="¨E95Eblank"'),
            p + '<a href="' + i + '"' + u + ">" + c + "</a>" + d + m
          );
        };
      },
      g = function (e, n) {
        return function (r, i, o) {
          var a = "mailto:";
          return (
            (i = i || ""),
            (o = t.subParser("unescapeSpecialChars")(o, e, n)),
            e.encodeEmails
              ? ((a = t.helper.encodeEmailAddress(a + o)),
                (o = t.helper.encodeEmailAddress(o)))
              : (a += o),
            i + '<a href="' + a + '">' + o + "</a>"
          );
        };
      };
    t.subParser("autoLinks", function (e, t, n) {
      return (
        (e = (e = (e = n.converter._dispatch(
          "autoLinks.before",
          e,
          t,
          n
        )).replace(p, h(t))).replace(f, g(t, n))),
        (e = n.converter._dispatch("autoLinks.after", e, t, n))
      );
    }),
      t.subParser("simplifiedAutoLinks", function (e, t, n) {
        return t.simplifiedAutoLink
          ? ((e = n.converter._dispatch("simplifiedAutoLinks.before", e, t, n)),
            (e = (e = t.excludeTrailingPunctuationFromURLs
              ? e.replace(u, h(t))
              : e.replace(d, h(t))).replace(m, g(t, n))),
            (e = n.converter._dispatch("simplifiedAutoLinks.after", e, t, n)))
          : e;
      }),
      t.subParser("blockGamut", function (e, n, r) {
        return (
          (e = r.converter._dispatch("blockGamut.before", e, n, r)),
          (e = t.subParser("blockQuotes")(e, n, r)),
          (e = t.subParser("headers")(e, n, r)),
          (e = t.subParser("horizontalRule")(e, n, r)),
          (e = t.subParser("lists")(e, n, r)),
          (e = t.subParser("codeBlocks")(e, n, r)),
          (e = t.subParser("tables")(e, n, r)),
          (e = t.subParser("hashHTMLBlocks")(e, n, r)),
          (e = t.subParser("paragraphs")(e, n, r)),
          (e = r.converter._dispatch("blockGamut.after", e, n, r))
        );
      }),
      t.subParser("blockQuotes", function (e, n, r) {
        (e = r.converter._dispatch("blockQuotes.before", e, n, r)),
          (e += "\n\n");
        var i = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        return (
          n.splitAdjacentBlockquotes && (i = /^ {0,3}>[\s\S]*?(?:\n\n)/gm),
          (e = e.replace(i, function (e) {
            return (
              (e = (e = (e = e.replace(/^[ \t]*>[ \t]?/gm, "")).replace(
                /¨0/g,
                ""
              )).replace(/^[ \t]+$/gm, "")),
              (e = t.subParser("githubCodeBlocks")(e, n, r)),
              (e = (e = (e = t.subParser("blockGamut")(e, n, r)).replace(
                /(^|\n)/g,
                "$1  "
              )).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (e, t) {
                var n = t;
                return (n = (n = n.replace(/^  /gm, "¨0")).replace(/¨0/g, ""));
              })),
              t.subParser("hashBlock")(
                "<blockquote>\n" + e + "\n</blockquote>",
                n,
                r
              )
            );
          })),
          (e = r.converter._dispatch("blockQuotes.after", e, n, r))
        );
      }),
      t.subParser("codeBlocks", function (e, n, r) {
        return (
          (e = r.converter._dispatch("codeBlocks.before", e, n, r)),
          (e = (e = (e += "¨0").replace(
            /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g,
            function (e, i, o) {
              var a = i,
                s = o,
                l = "\n";
              return (
                (a = t.subParser("outdent")(a, n, r)),
                (a = t.subParser("encodeCode")(a, n, r)),
                (a = (a = (a = t.subParser("detab")(a, n, r)).replace(
                  /^\n+/g,
                  ""
                )).replace(/\n+$/g, "")),
                n.omitExtraWLInCodeBlocks && (l = ""),
                (a = "<pre><code>" + a + l + "</code></pre>"),
                t.subParser("hashBlock")(a, n, r) + s
              );
            }
          )).replace(/¨0/, "")),
          (e = r.converter._dispatch("codeBlocks.after", e, n, r))
        );
      }),
      t.subParser("codeSpans", function (e, n, r) {
        return (
          void 0 === (e = r.converter._dispatch("codeSpans.before", e, n, r)) &&
            (e = ""),
          (e = e.replace(
            /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
            function (e, i, o, a) {
              var s = a;
              return (
                (s = (s = s.replace(/^([ \t]*)/g, "")).replace(/[ \t]*$/g, "")),
                (s =
                  i +
                  "<code>" +
                  (s = t.subParser("encodeCode")(s, n, r)) +
                  "</code>"),
                (s = t.subParser("hashHTMLSpans")(s, n, r))
              );
            }
          )),
          (e = r.converter._dispatch("codeSpans.after", e, n, r))
        );
      }),
      t.subParser("completeHTMLDocument", function (e, t, n) {
        if (!t.completeHTMLDocument) return e;
        e = n.converter._dispatch("completeHTMLDocument.before", e, t, n);
        var r = "html",
          i = "<!DOCTYPE HTML>\n",
          o = "",
          a = '<meta charset="utf-8">\n',
          s = "",
          l = "";
        for (var c in (void 0 !== n.metadata.parsed.doctype &&
          ((i = "<!DOCTYPE " + n.metadata.parsed.doctype + ">\n"),
          ("html" !==
            (r = n.metadata.parsed.doctype.toString().toLowerCase()) &&
            "html5" !== r) ||
            (a = '<meta charset="utf-8">')),
        n.metadata.parsed))
          if (n.metadata.parsed.hasOwnProperty(c))
            switch (c.toLowerCase()) {
              case "doctype":
                break;
              case "title":
                o = "<title>" + n.metadata.parsed.title + "</title>\n";
                break;
              case "charset":
                a =
                  "html" === r || "html5" === r
                    ? '<meta charset="' + n.metadata.parsed.charset + '">\n'
                    : '<meta name="charset" content="' +
                      n.metadata.parsed.charset +
                      '">\n';
                break;
              case "language":
              case "lang":
                (s = ' lang="' + n.metadata.parsed[c] + '"'),
                  (l +=
                    '<meta name="' +
                    c +
                    '" content="' +
                    n.metadata.parsed[c] +
                    '">\n');
                break;
              default:
                l +=
                  '<meta name="' +
                  c +
                  '" content="' +
                  n.metadata.parsed[c] +
                  '">\n';
            }
        return (
          (e =
            i +
            "<html" +
            s +
            ">\n<head>\n" +
            o +
            a +
            l +
            "</head>\n<body>\n" +
            e.trim() +
            "\n</body>\n</html>"),
          (e = n.converter._dispatch("completeHTMLDocument.after", e, t, n))
        );
      }),
      t.subParser("detab", function (e, t, n) {
        return (
          (e = (e = (e = (e = (e = (e = n.converter._dispatch(
            "detab.before",
            e,
            t,
            n
          )).replace(/\t(?=\t)/g, "    ")).replace(/\t/g, "¨A¨B")).replace(
            /¨B(.+?)¨A/g,
            function (e, t) {
              for (var n = t, r = 4 - (n.length % 4), i = 0; i < r; i++)
                n += " ";
              return n;
            }
          )).replace(/¨A/g, "    ")).replace(/¨B/g, "")),
          (e = n.converter._dispatch("detab.after", e, t, n))
        );
      }),
      t.subParser("ellipsis", function (e, t, n) {
        return t.ellipsis
          ? ((e = (e = n.converter._dispatch(
              "ellipsis.before",
              e,
              t,
              n
            )).replace(/\.\.\./g, "…")),
            (e = n.converter._dispatch("ellipsis.after", e, t, n)))
          : e;
      }),
      t.subParser("emoji", function (e, n, r) {
        return n.emoji
          ? ((e = (e = r.converter._dispatch("emoji.before", e, n, r)).replace(
              /:([\S]+?):/g,
              function (e, n) {
                return t.helper.emojis.hasOwnProperty(n)
                  ? t.helper.emojis[n]
                  : e;
              }
            )),
            (e = r.converter._dispatch("emoji.after", e, n, r)))
          : e;
      }),
      t.subParser("encodeAmpsAndAngles", function (e, t, n) {
        return (
          (e = (e = (e = (e = (e = n.converter._dispatch(
            "encodeAmpsAndAngles.before",
            e,
            t,
            n
          )).replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;")).replace(
            /<(?![a-z\/?$!])/gi,
            "&lt;"
          )).replace(/</g, "&lt;")).replace(/>/g, "&gt;")),
          (e = n.converter._dispatch("encodeAmpsAndAngles.after", e, t, n))
        );
      }),
      t.subParser("encodeBackslashEscapes", function (e, n, r) {
        return (
          (e = (e = (e = r.converter._dispatch(
            "encodeBackslashEscapes.before",
            e,
            n,
            r
          )).replace(/\\(\\)/g, t.helper.escapeCharactersCallback)).replace(
            /\\([`*_{}\[\]()>#+.!~=|:-])/g,
            t.helper.escapeCharactersCallback
          )),
          (e = r.converter._dispatch("encodeBackslashEscapes.after", e, n, r))
        );
      }),
      t.subParser("encodeCode", function (e, n, r) {
        return (
          (e = (e = r.converter._dispatch("encodeCode.before", e, n, r))
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/([*_{}\[\]\\=~-])/g, t.helper.escapeCharactersCallback)),
          (e = r.converter._dispatch("encodeCode.after", e, n, r))
        );
      }),
      t.subParser("escapeSpecialCharsWithinTagAttributes", function (e, n, r) {
        return (
          (e = (e = (e = r.converter._dispatch(
            "escapeSpecialCharsWithinTagAttributes.before",
            e,
            n,
            r
          )).replace(/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, function (e) {
            return e
              .replace(/(.)<\/?code>(?=.)/g, "$1`")
              .replace(/([\\`*_~=|])/g, t.helper.escapeCharactersCallback);
          })).replace(
            /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi,
            function (e) {
              return e.replace(
                /([\\`*_~=|])/g,
                t.helper.escapeCharactersCallback
              );
            }
          )),
          (e = r.converter._dispatch(
            "escapeSpecialCharsWithinTagAttributes.after",
            e,
            n,
            r
          ))
        );
      }),
      t.subParser("githubCodeBlocks", function (e, n, r) {
        return n.ghCodeBlocks
          ? ((e = r.converter._dispatch("githubCodeBlocks.before", e, n, r)),
            (e = (e = (e += "¨0").replace(
              /(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,
              function (e, i, o, a) {
                var s = n.omitExtraWLInCodeBlocks ? "" : "\n";
                return (
                  (a = t.subParser("encodeCode")(a, n, r)),
                  (a =
                    "<pre><code" +
                    (o ? ' class="' + o + " language-" + o + '"' : "") +
                    ">" +
                    (a = (a = (a = t.subParser("detab")(a, n, r)).replace(
                      /^\n+/g,
                      ""
                    )).replace(/\n+$/g, "")) +
                    s +
                    "</code></pre>"),
                  (a = t.subParser("hashBlock")(a, n, r)),
                  "\n\n¨G" +
                    (r.ghCodeBlocks.push({ text: e, codeblock: a }) - 1) +
                    "G\n\n"
                );
              }
            )).replace(/¨0/, "")),
            r.converter._dispatch("githubCodeBlocks.after", e, n, r))
          : e;
      }),
      t.subParser("hashBlock", function (e, t, n) {
        return (
          (e = (e = n.converter._dispatch("hashBlock.before", e, t, n)).replace(
            /(^\n+|\n+$)/g,
            ""
          )),
          (e = "\n\n¨K" + (n.gHtmlBlocks.push(e) - 1) + "K\n\n"),
          (e = n.converter._dispatch("hashBlock.after", e, t, n))
        );
      }),
      t.subParser("hashCodeTags", function (e, n, r) {
        return (
          (e = r.converter._dispatch("hashCodeTags.before", e, n, r)),
          (e = t.helper.replaceRecursiveRegExp(
            e,
            function (e, i, o, a) {
              var s = o + t.subParser("encodeCode")(i, n, r) + a;
              return "¨C" + (r.gHtmlSpans.push(s) - 1) + "C";
            },
            "<code\\b[^>]*>",
            "</code>",
            "gim"
          )),
          (e = r.converter._dispatch("hashCodeTags.after", e, n, r))
        );
      }),
      t.subParser("hashElement", function (e, t, n) {
        return function (e, t) {
          var r = t;
          return (
            (r = (r = (r = r.replace(/\n\n/g, "\n")).replace(
              /^\n/,
              ""
            )).replace(/\n+$/g, "")),
            (r = "\n\n¨K" + (n.gHtmlBlocks.push(r) - 1) + "K\n\n")
          );
        };
      }),
      t.subParser("hashHTMLBlocks", function (e, n, r) {
        e = r.converter._dispatch("hashHTMLBlocks.before", e, n, r);
        var i = [
            "pre",
            "div",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "blockquote",
            "table",
            "dl",
            "ol",
            "ul",
            "script",
            "noscript",
            "form",
            "fieldset",
            "iframe",
            "math",
            "style",
            "section",
            "header",
            "footer",
            "nav",
            "article",
            "aside",
            "address",
            "audio",
            "canvas",
            "figure",
            "hgroup",
            "output",
            "video",
            "p",
          ],
          o = function (e, t, n, i) {
            var o = e;
            return (
              -1 !== n.search(/\bmarkdown\b/) &&
                (o = n + r.converter.makeHtml(t) + i),
              "\n\n¨K" + (r.gHtmlBlocks.push(o) - 1) + "K\n\n"
            );
          };
        n.backslashEscapesHTMLTags &&
          (e = e.replace(/\\<(\/?[^>]+?)>/g, function (e, t) {
            return "&lt;" + t + "&gt;";
          }));
        for (var a = 0; a < i.length; ++a)
          for (
            var s,
              l = new RegExp("^ {0,3}(<" + i[a] + "\\b[^>]*>)", "im"),
              c = "<" + i[a] + "\\b[^>]*>",
              d = "</" + i[a] + ">";
            -1 !== (s = t.helper.regexIndexOf(e, l));

          ) {
            var u = t.helper.splitAtIndex(e, s),
              p = t.helper.replaceRecursiveRegExp(u[1], o, c, d, "im");
            if (p === u[1]) break;
            e = u[0].concat(p);
          }
        return (
          (e = e.replace(
            /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
            t.subParser("hashElement")(e, n, r)
          )),
          (e = (e = t.helper.replaceRecursiveRegExp(
            e,
            function (e) {
              return "\n\n¨K" + (r.gHtmlBlocks.push(e) - 1) + "K\n\n";
            },
            "^ {0,3}\x3c!--",
            "--\x3e",
            "gm"
          )).replace(
            /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
            t.subParser("hashElement")(e, n, r)
          )),
          (e = r.converter._dispatch("hashHTMLBlocks.after", e, n, r))
        );
      }),
      t.subParser("hashHTMLSpans", function (e, t, n) {
        function r(e) {
          return "¨C" + (n.gHtmlSpans.push(e) - 1) + "C";
        }
        return (
          (e = (e = (e = (e = (e = n.converter._dispatch(
            "hashHTMLSpans.before",
            e,
            t,
            n
          )).replace(/<[^>]+?\/>/gi, function (e) {
            return r(e);
          })).replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (e) {
            return r(e);
          })).replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function (e) {
            return r(e);
          })).replace(/<[^>]+?>/gi, function (e) {
            return r(e);
          })),
          (e = n.converter._dispatch("hashHTMLSpans.after", e, t, n))
        );
      }),
      t.subParser("unhashHTMLSpans", function (e, t, n) {
        e = n.converter._dispatch("unhashHTMLSpans.before", e, t, n);
        for (var r = 0; r < n.gHtmlSpans.length; ++r) {
          for (var i = n.gHtmlSpans[r], o = 0; /¨C(\d+)C/.test(i); ) {
            var a = RegExp.$1;
            if (((i = i.replace("¨C" + a + "C", n.gHtmlSpans[a])), 10 === o))
              break;
            ++o;
          }
          e = e.replace("¨C" + r + "C", i);
        }
        return (e = n.converter._dispatch("unhashHTMLSpans.after", e, t, n));
      }),
      t.subParser("hashPreCodeTags", function (e, n, r) {
        return (
          (e = r.converter._dispatch("hashPreCodeTags.before", e, n, r)),
          (e = t.helper.replaceRecursiveRegExp(
            e,
            function (e, i, o, a) {
              var s = o + t.subParser("encodeCode")(i, n, r) + a;
              return (
                "\n\n¨G" +
                (r.ghCodeBlocks.push({ text: e, codeblock: s }) - 1) +
                "G\n\n"
              );
            },
            "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>",
            "^ {0,3}</code>\\s*</pre>",
            "gim"
          )),
          (e = r.converter._dispatch("hashPreCodeTags.after", e, n, r))
        );
      }),
      t.subParser("headers", function (e, n, r) {
        e = r.converter._dispatch("headers.before", e, n, r);
        var i = isNaN(parseInt(n.headerLevelStart))
            ? 1
            : parseInt(n.headerLevelStart),
          o = n.smoothLivePreview
            ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm
            : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
          a = n.smoothLivePreview
            ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm
            : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        e = (e = e.replace(o, function (e, o) {
          var a = t.subParser("spanGamut")(o, n, r),
            s = n.noHeaderId ? "" : ' id="' + l(o) + '"',
            c = "<h" + i + s + ">" + a + "</h" + i + ">";
          return t.subParser("hashBlock")(c, n, r);
        })).replace(a, function (e, o) {
          var a = t.subParser("spanGamut")(o, n, r),
            s = n.noHeaderId ? "" : ' id="' + l(o) + '"',
            c = i + 1,
            d = "<h" + c + s + ">" + a + "</h" + c + ">";
          return t.subParser("hashBlock")(d, n, r);
        });
        var s = n.requireSpaceBeforeHeadingText
          ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm
          : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        function l(e) {
          var i, o;
          if (n.customizedHeaderId) {
            var a = e.match(/\{([^{]+?)}\s*$/);
            a && a[1] && (e = a[1]);
          }
          return (
            (i = e),
            (o = t.helper.isString(n.prefixHeaderId)
              ? n.prefixHeaderId
              : !0 === n.prefixHeaderId
              ? "section-"
              : ""),
            n.rawPrefixHeaderId || (i = o + i),
            (i = n.ghCompatibleHeaderId
              ? i
                  .replace(/ /g, "-")
                  .replace(/&amp;/g, "")
                  .replace(/¨T/g, "")
                  .replace(/¨D/g, "")
                  .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "")
                  .toLowerCase()
              : n.rawHeaderId
              ? i
                  .replace(/ /g, "-")
                  .replace(/&amp;/g, "&")
                  .replace(/¨T/g, "¨")
                  .replace(/¨D/g, "$")
                  .replace(/["']/g, "-")
                  .toLowerCase()
              : i.replace(/[^\w]/g, "").toLowerCase()),
            n.rawPrefixHeaderId && (i = o + i),
            r.hashLinkCounts[i]
              ? (i = i + "-" + r.hashLinkCounts[i]++)
              : (r.hashLinkCounts[i] = 1),
            i
          );
        }
        return (
          (e = e.replace(s, function (e, o, a) {
            var s = a;
            n.customizedHeaderId && (s = a.replace(/\s?\{([^{]+?)}\s*$/, ""));
            var c = t.subParser("spanGamut")(s, n, r),
              d = n.noHeaderId ? "" : ' id="' + l(a) + '"',
              u = i - 1 + o.length,
              p = "<h" + u + d + ">" + c + "</h" + u + ">";
            return t.subParser("hashBlock")(p, n, r);
          })),
          (e = r.converter._dispatch("headers.after", e, n, r))
        );
      }),
      t.subParser("horizontalRule", function (e, n, r) {
        e = r.converter._dispatch("horizontalRule.before", e, n, r);
        var i = t.subParser("hashBlock")("<hr />", n, r);
        return (
          (e = (e = (e = e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, i)).replace(
            /^ {0,2}( ?\*){3,}[ \t]*$/gm,
            i
          )).replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, i)),
          (e = r.converter._dispatch("horizontalRule.after", e, n, r))
        );
      }),
      t.subParser("images", function (e, n, r) {
        function i(e, n, i, o, a, s, l, c) {
          var d = r.gUrls,
            u = r.gTitles,
            p = r.gDimensions;
          if (
            ((i = i.toLowerCase()),
            c || (c = ""),
            e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
          )
            o = "";
          else if ("" === o || null === o) {
            if (
              (("" !== i && null !== i) ||
                (i = n.toLowerCase().replace(/ ?\n/g, " ")),
              (o = "#" + i),
              t.helper.isUndefined(d[i]))
            )
              return e;
            (o = d[i]),
              t.helper.isUndefined(u[i]) || (c = u[i]),
              t.helper.isUndefined(p[i]) ||
                ((a = p[i].width), (s = p[i].height));
          }
          n = n
            .replace(/"/g, "&quot;")
            .replace(
              t.helper.regexes.asteriskDashAndColon,
              t.helper.escapeCharactersCallback
            );
          var m =
            '<img src="' +
            (o = o.replace(
              t.helper.regexes.asteriskDashAndColon,
              t.helper.escapeCharactersCallback
            )) +
            '" alt="' +
            n +
            '"';
          return (
            c &&
              t.helper.isString(c) &&
              (m +=
                ' title="' +
                (c = c
                  .replace(/"/g, "&quot;")
                  .replace(
                    t.helper.regexes.asteriskDashAndColon,
                    t.helper.escapeCharactersCallback
                  )) +
                '"'),
            a &&
              s &&
              ((m += ' width="' + (a = "*" === a ? "auto" : a) + '"'),
              (m += ' height="' + (s = "*" === s ? "auto" : s) + '"')),
            (m += " />")
          );
        }
        return (
          (e = (e = (e = (e = (e = (e = r.converter._dispatch(
            "images.before",
            e,
            n,
            r
          )).replace(
            /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,
            i
          )).replace(
            /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
            function (e, t, n, r, o, a, s, l) {
              return i(e, t, n, (r = r.replace(/\s/g, "")), o, a, 0, l);
            }
          )).replace(
            /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
            i
          )).replace(
            /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
            i
          )).replace(/!\[([^\[\]]+)]()()()()()/g, i)),
          (e = r.converter._dispatch("images.after", e, n, r))
        );
      }),
      t.subParser("italicsAndBold", function (e, t, n) {
        function r(e, t, n) {
          return t + e + n;
        }
        return (
          (e = n.converter._dispatch("italicsAndBold.before", e, t, n)),
          (e = t.literalMidWordUnderscores
            ? (e = (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function (e, t) {
                return r(t, "<strong><em>", "</em></strong>");
              })).replace(/\b__(\S[\s\S]*?)__\b/g, function (e, t) {
                return r(t, "<strong>", "</strong>");
              })).replace(/\b_(\S[\s\S]*?)_\b/g, function (e, t) {
                return r(t, "<em>", "</em>");
              })
            : (e = (e = e.replace(/___(\S[\s\S]*?)___/g, function (e, t) {
                return /\S$/.test(t)
                  ? r(t, "<strong><em>", "</em></strong>")
                  : e;
              })).replace(/__(\S[\s\S]*?)__/g, function (e, t) {
                return /\S$/.test(t) ? r(t, "<strong>", "</strong>") : e;
              })).replace(/_([^\s_][\s\S]*?)_/g, function (e, t) {
                return /\S$/.test(t) ? r(t, "<em>", "</em>") : e;
              })),
          (e = t.literalMidWordAsterisks
            ? (e = (e = e.replace(
                /([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,
                function (e, t, n) {
                  return r(n, t + "<strong><em>", "</em></strong>");
                }
              )).replace(
                /([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,
                function (e, t, n) {
                  return r(n, t + "<strong>", "</strong>");
                }
              )).replace(
                /([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,
                function (e, t, n) {
                  return r(n, t + "<em>", "</em>");
                }
              )
            : (e = (e = e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function (e, t) {
                return /\S$/.test(t)
                  ? r(t, "<strong><em>", "</em></strong>")
                  : e;
              })).replace(/\*\*(\S[\s\S]*?)\*\*/g, function (e, t) {
                return /\S$/.test(t) ? r(t, "<strong>", "</strong>") : e;
              })).replace(/\*([^\s*][\s\S]*?)\*/g, function (e, t) {
                return /\S$/.test(t) ? r(t, "<em>", "</em>") : e;
              })),
          (e = n.converter._dispatch("italicsAndBold.after", e, t, n))
        );
      }),
      t.subParser("lists", function (e, n, r) {
        function i(e, i) {
          r.gListLevel++, (e = e.replace(/\n{2,}$/, "\n"));
          var o =
              /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
            a = /\n[ \t]*\n(?!¨0)/.test((e += "¨0"));
          return (
            n.disableForced4SpacesIndentedSublists &&
              (o =
                /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),
            (e = (e = e.replace(o, function (e, i, o, s, l, c, d) {
              d = d && "" !== d.trim();
              var u = t.subParser("outdent")(l, n, r),
                p = "";
              return (
                c &&
                  n.tasklists &&
                  ((p =
                    ' class="task-list-item" style="list-style-type: none;"'),
                  (u = u.replace(/^[ \t]*\[(x|X| )?]/m, function () {
                    var e =
                      '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                    return d && (e += " checked"), (e += ">");
                  }))),
                (u = u.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function (e) {
                  return "¨A" + e;
                })),
                i || u.search(/\n{2,}/) > -1
                  ? ((u = t.subParser("githubCodeBlocks")(u, n, r)),
                    (u = t.subParser("blockGamut")(u, n, r)))
                  : ((u = (u = t.subParser("lists")(u, n, r)).replace(
                      /\n$/,
                      ""
                    )),
                    (u = (u = t.subParser("hashHTMLBlocks")(u, n, r)).replace(
                      /\n\n+/g,
                      "\n\n"
                    )),
                    (u = a
                      ? t.subParser("paragraphs")(u, n, r)
                      : t.subParser("spanGamut")(u, n, r))),
                (u = "<li" + p + ">" + (u = u.replace("¨A", "")) + "</li>\n")
              );
            })).replace(/¨0/g, "")),
            r.gListLevel--,
            i && (e = e.replace(/\s+$/, "")),
            e
          );
        }
        function o(e, t) {
          if ("ol" === t) {
            var n = e.match(/^ *(\d+)\./);
            if (n && "1" !== n[1]) return ' start="' + n[1] + '"';
          }
          return "";
        }
        function a(e, t, r) {
          var a = n.disableForced4SpacesIndentedSublists
              ? /^ ?\d+\.[ \t]/gm
              : /^ {0,3}\d+\.[ \t]/gm,
            s = n.disableForced4SpacesIndentedSublists
              ? /^ ?[*+-][ \t]/gm
              : /^ {0,3}[*+-][ \t]/gm,
            l = "ul" === t ? a : s,
            c = "";
          if (-1 !== e.search(l))
            !(function n(d) {
              var u = d.search(l),
                p = o(e, t);
              -1 !== u
                ? ((c +=
                    "\n\n<" +
                    t +
                    p +
                    ">\n" +
                    i(d.slice(0, u), !!r) +
                    "</" +
                    t +
                    ">\n"),
                  (l = "ul" == (t = "ul" === t ? "ol" : "ul") ? a : s),
                  n(d.slice(u)))
                : (c += "\n\n<" + t + p + ">\n" + i(d, !!r) + "</" + t + ">\n");
            })(e);
          else {
            var d = o(e, t);
            c = "\n\n<" + t + d + ">\n" + i(e, !!r) + "</" + t + ">\n";
          }
          return c;
        }
        return (
          (e = r.converter._dispatch("lists.before", e, n, r)),
          (e += "¨0"),
          (e = (e = r.gListLevel
            ? e.replace(
                /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
                function (e, t, n) {
                  return a(t, n.search(/[*+-]/g) > -1 ? "ul" : "ol", !0);
                }
              )
            : e.replace(
                /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
                function (e, t, n, r) {
                  return a(n, r.search(/[*+-]/g) > -1 ? "ul" : "ol", !1);
                }
              )).replace(/¨0/, "")),
          (e = r.converter._dispatch("lists.after", e, n, r))
        );
      }),
      t.subParser("metadata", function (e, t, n) {
        if (!t.metadata) return e;
        function r(e) {
          (n.metadata.raw = e),
            (e = (e = e.replace(/&/g, "&amp;").replace(/"/g, "&quot;")).replace(
              /\n {4}/g,
              " "
            )).replace(/^([\S ]+): +([\s\S]+?)$/gm, function (e, t, r) {
              return (n.metadata.parsed[t] = r), "";
            });
        }
        return (
          (e = (e = (e = (e = n.converter._dispatch(
            "metadata.before",
            e,
            t,
            n
          )).replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function (e, t, n) {
            return r(n), "¨M";
          })).replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function (e, t, i) {
            return t && (n.metadata.format = t), r(i), "¨M";
          })).replace(/¨M/g, "")),
          (e = n.converter._dispatch("metadata.after", e, t, n))
        );
      }),
      t.subParser("outdent", function (e, t, n) {
        return (
          (e = (e = (e = n.converter._dispatch(
            "outdent.before",
            e,
            t,
            n
          )).replace(/^(\t|[ ]{1,4})/gm, "¨0")).replace(/¨0/g, "")),
          (e = n.converter._dispatch("outdent.after", e, t, n))
        );
      }),
      t.subParser("paragraphs", function (e, n, r) {
        for (
          var i = (e = (e = (e = r.converter._dispatch(
              "paragraphs.before",
              e,
              n,
              r
            )).replace(/^\n+/g, "")).replace(/\n+$/g, "")).split(/\n{2,}/g),
            o = [],
            a = i.length,
            s = 0;
          s < a;
          s++
        ) {
          var l = i[s];
          l.search(/¨(K|G)(\d+)\1/g) >= 0
            ? o.push(l)
            : l.search(/\S/) >= 0 &&
              ((l = (l = t.subParser("spanGamut")(l, n, r)).replace(
                /^([ \t]*)/g,
                "<p>"
              )),
              (l += "</p>"),
              o.push(l));
        }
        for (a = o.length, s = 0; s < a; s++) {
          for (var c = "", d = o[s], u = !1; /¨(K|G)(\d+)\1/.test(d); ) {
            var p = RegExp.$1,
              m = RegExp.$2;
            (c = (c =
              "K" === p
                ? r.gHtmlBlocks[m]
                : u
                ? t.subParser("encodeCode")(r.ghCodeBlocks[m].text, n, r)
                : r.ghCodeBlocks[m].codeblock).replace(/\$/g, "$$$$")),
              (d = d.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, c)),
              /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(d) && (u = !0);
          }
          o[s] = d;
        }
        return (
          (e = (e = (e = o.join("\n")).replace(/^\n+/g, "")).replace(
            /\n+$/g,
            ""
          )),
          r.converter._dispatch("paragraphs.after", e, n, r)
        );
      }),
      t.subParser("runExtension", function (e, t, n, r) {
        if (e.filter) t = e.filter(t, r.converter, n);
        else if (e.regex) {
          var i = e.regex;
          i instanceof RegExp || (i = new RegExp(i, "g")),
            (t = t.replace(i, e.replace));
        }
        return t;
      }),
      t.subParser("spanGamut", function (e, n, r) {
        return (
          (e = r.converter._dispatch("spanGamut.before", e, n, r)),
          (e = t.subParser("codeSpans")(e, n, r)),
          (e = t.subParser("escapeSpecialCharsWithinTagAttributes")(e, n, r)),
          (e = t.subParser("encodeBackslashEscapes")(e, n, r)),
          (e = t.subParser("images")(e, n, r)),
          (e = t.subParser("anchors")(e, n, r)),
          (e = t.subParser("autoLinks")(e, n, r)),
          (e = t.subParser("simplifiedAutoLinks")(e, n, r)),
          (e = t.subParser("emoji")(e, n, r)),
          (e = t.subParser("underline")(e, n, r)),
          (e = t.subParser("italicsAndBold")(e, n, r)),
          (e = t.subParser("strikethrough")(e, n, r)),
          (e = t.subParser("ellipsis")(e, n, r)),
          (e = t.subParser("hashHTMLSpans")(e, n, r)),
          (e = t.subParser("encodeAmpsAndAngles")(e, n, r)),
          n.simpleLineBreaks
            ? /\n\n¨K/.test(e) || (e = e.replace(/\n+/g, "<br />\n"))
            : (e = e.replace(/  +\n/g, "<br />\n")),
          (e = r.converter._dispatch("spanGamut.after", e, n, r))
        );
      }),
      t.subParser("strikethrough", function (e, n, r) {
        return (
          n.strikethrough &&
            ((e = (e = r.converter._dispatch(
              "strikethrough.before",
              e,
              n,
              r
            )).replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (e, i) {
              return (function (e) {
                return (
                  n.simplifiedAutoLink &&
                    (e = t.subParser("simplifiedAutoLinks")(e, n, r)),
                  "<del>" + e + "</del>"
                );
              })(i);
            })),
            (e = r.converter._dispatch("strikethrough.after", e, n, r))),
          e
        );
      }),
      t.subParser("stripLinkDefinitions", function (e, n, r) {
        var i = function (i, o, a, s, l, c, d) {
          return (
            (o = o.toLowerCase()),
            e.toLowerCase().split(o).length - 1 < 2
              ? i
              : (a.match(/^data:.+?\/.+?;base64,/)
                  ? (r.gUrls[o] = a.replace(/\s/g, ""))
                  : (r.gUrls[o] = t.subParser("encodeAmpsAndAngles")(a, n, r)),
                c
                  ? c + d
                  : (d && (r.gTitles[o] = d.replace(/"|'/g, "&quot;")),
                    n.parseImgDimensions &&
                      s &&
                      l &&
                      (r.gDimensions[o] = { width: s, height: l }),
                    ""))
          );
        };
        return (e = (e = (e = (e += "¨0").replace(
          /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm,
          i
        )).replace(
          /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,
          i
        )).replace(/¨0/, ""));
      }),
      t.subParser("tables", function (e, n, r) {
        if (!n.tables) return e;
        function i(e, i) {
          return (
            "<td" + i + ">" + t.subParser("spanGamut")(e, n, r) + "</td>\n"
          );
        }
        function o(e) {
          var o,
            a = e.split("\n");
          for (o = 0; o < a.length; ++o)
            /^ {0,3}\|/.test(a[o]) && (a[o] = a[o].replace(/^ {0,3}\|/, "")),
              /\|[ \t]*$/.test(a[o]) && (a[o] = a[o].replace(/\|[ \t]*$/, "")),
              (a[o] = t.subParser("codeSpans")(a[o], n, r));
          var s,
            l,
            c,
            d,
            u = a[0].split("|").map(function (e) {
              return e.trim();
            }),
            p = a[1].split("|").map(function (e) {
              return e.trim();
            }),
            m = [],
            f = [],
            h = [],
            g = [];
          for (a.shift(), a.shift(), o = 0; o < a.length; ++o)
            "" !== a[o].trim() &&
              m.push(
                a[o].split("|").map(function (e) {
                  return e.trim();
                })
              );
          if (u.length < p.length) return e;
          for (o = 0; o < p.length; ++o)
            h.push(
              ((s = p[o]),
              /^:[ \t]*--*$/.test(s)
                ? ' style="text-align:left;"'
                : /^--*[ \t]*:[ \t]*$/.test(s)
                ? ' style="text-align:right;"'
                : /^:[ \t]*--*[ \t]*:$/.test(s)
                ? ' style="text-align:center;"'
                : "")
            );
          for (o = 0; o < u.length; ++o)
            t.helper.isUndefined(h[o]) && (h[o] = ""),
              f.push(
                ((l = u[o]),
                (c = h[o]),
                (d = void 0),
                (d = ""),
                (l = l.trim()),
                (n.tablesHeaderId || n.tableHeaderId) &&
                  (d = ' id="' + l.replace(/ /g, "_").toLowerCase() + '"'),
                "<th" +
                  d +
                  c +
                  ">" +
                  (l = t.subParser("spanGamut")(l, n, r)) +
                  "</th>\n")
              );
          for (o = 0; o < m.length; ++o) {
            for (var v = [], b = 0; b < f.length; ++b)
              t.helper.isUndefined(m[o][b]), v.push(i(m[o][b], h[b]));
            g.push(v);
          }
          return (function (e, t) {
            for (
              var n = "<table>\n<thead>\n<tr>\n", r = e.length, i = 0;
              i < r;
              ++i
            )
              n += e[i];
            for (n += "</tr>\n</thead>\n<tbody>\n", i = 0; i < t.length; ++i) {
              n += "<tr>\n";
              for (var o = 0; o < r; ++o) n += t[i][o];
              n += "</tr>\n";
            }
            return n + "</tbody>\n</table>\n";
          })(f, g);
        }
        return (
          (e = (e = (e = (e = r.converter._dispatch(
            "tables.before",
            e,
            n,
            r
          )).replace(/\\(\|)/g, t.helper.escapeCharactersCallback)).replace(
            /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,
            o
          )).replace(
            /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm,
            o
          )),
          (e = r.converter._dispatch("tables.after", e, n, r))
        );
      }),
      t.subParser("underline", function (e, n, r) {
        return n.underline
          ? ((e = r.converter._dispatch("underline.before", e, n, r)),
            (e = (e = n.literalMidWordUnderscores
              ? (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function (e, t) {
                  return "<u>" + t + "</u>";
                })).replace(/\b__(\S[\s\S]*?)__\b/g, function (e, t) {
                  return "<u>" + t + "</u>";
                })
              : (e = e.replace(/___(\S[\s\S]*?)___/g, function (e, t) {
                  return /\S$/.test(t) ? "<u>" + t + "</u>" : e;
                })).replace(/__(\S[\s\S]*?)__/g, function (e, t) {
                  return /\S$/.test(t) ? "<u>" + t + "</u>" : e;
                })).replace(/(_)/g, t.helper.escapeCharactersCallback)),
            (e = r.converter._dispatch("underline.after", e, n, r)))
          : e;
      }),
      t.subParser("unescapeSpecialChars", function (e, t, n) {
        return (
          (e = (e = n.converter._dispatch(
            "unescapeSpecialChars.before",
            e,
            t,
            n
          )).replace(/¨E(\d+)E/g, function (e, t) {
            var n = parseInt(t);
            return String.fromCharCode(n);
          })),
          (e = n.converter._dispatch("unescapeSpecialChars.after", e, t, n))
        );
      }),
      t.subParser("makeMarkdown.blockquote", function (e, n) {
        var r = "";
        if (e.hasChildNodes())
          for (var i = e.childNodes, o = i.length, a = 0; a < o; ++a) {
            var s = t.subParser("makeMarkdown.node")(i[a], n);
            "" !== s && (r += s);
          }
        return (r = "> " + (r = r.trim()).split("\n").join("\n> "));
      }),
      t.subParser("makeMarkdown.codeBlock", function (e, t) {
        var n = e.getAttribute("language"),
          r = e.getAttribute("precodenum");
        return "```" + n + "\n" + t.preList[r] + "\n```";
      }),
      t.subParser("makeMarkdown.codeSpan", function (e) {
        return "`" + e.innerHTML + "`";
      }),
      t.subParser("makeMarkdown.emphasis", function (e, n) {
        var r = "";
        if (e.hasChildNodes()) {
          r += "*";
          for (var i = e.childNodes, o = i.length, a = 0; a < o; ++a)
            r += t.subParser("makeMarkdown.node")(i[a], n);
          r += "*";
        }
        return r;
      }),
      t.subParser("makeMarkdown.header", function (e, n, r) {
        var i = new Array(r + 1).join("#"),
          o = "";
        if (e.hasChildNodes()) {
          o = i + " ";
          for (var a = e.childNodes, s = a.length, l = 0; l < s; ++l)
            o += t.subParser("makeMarkdown.node")(a[l], n);
        }
        return o;
      }),
      t.subParser("makeMarkdown.hr", function () {
        return "---";
      }),
      t.subParser("makeMarkdown.image", function (e) {
        var t = "";
        return (
          e.hasAttribute("src") &&
            ((t += "![" + e.getAttribute("alt") + "]("),
            (t += "<" + e.getAttribute("src") + ">"),
            e.hasAttribute("width") &&
              e.hasAttribute("height") &&
              (t +=
                " =" +
                e.getAttribute("width") +
                "x" +
                e.getAttribute("height")),
            e.hasAttribute("title") &&
              (t += ' "' + e.getAttribute("title") + '"'),
            (t += ")")),
          t
        );
      }),
      t.subParser("makeMarkdown.links", function (e, n) {
        var r = "";
        if (e.hasChildNodes() && e.hasAttribute("href")) {
          var i = e.childNodes,
            o = i.length;
          r = "[";
          for (var a = 0; a < o; ++a)
            r += t.subParser("makeMarkdown.node")(i[a], n);
          (r += "]("),
            (r += "<" + e.getAttribute("href") + ">"),
            e.hasAttribute("title") &&
              (r += ' "' + e.getAttribute("title") + '"'),
            (r += ")");
        }
        return r;
      }),
      t.subParser("makeMarkdown.list", function (e, n, r) {
        var i = "";
        if (!e.hasChildNodes()) return "";
        for (
          var o = e.childNodes,
            a = o.length,
            s = e.getAttribute("start") || 1,
            l = 0;
          l < a;
          ++l
        )
          void 0 !== o[l].tagName &&
            "li" === o[l].tagName.toLowerCase() &&
            ((i +=
              ("ol" === r ? s.toString() + ". " : "- ") +
              t.subParser("makeMarkdown.listItem")(o[l], n)),
            ++s);
        return (i += "\n\x3c!-- --\x3e\n").trim();
      }),
      t.subParser("makeMarkdown.listItem", function (e, n) {
        for (var r = "", i = e.childNodes, o = i.length, a = 0; a < o; ++a)
          r += t.subParser("makeMarkdown.node")(i[a], n);
        return (
          /\n$/.test(r)
            ? (r = r
                .split("\n")
                .join("\n    ")
                .replace(/^ {4}$/gm, "")
                .replace(/\n\n+/g, "\n\n"))
            : (r += "\n"),
          r
        );
      }),
      t.subParser("makeMarkdown.node", function (e, n, r) {
        r = r || !1;
        var i = "";
        if (3 === e.nodeType) return t.subParser("makeMarkdown.txt")(e, n);
        if (8 === e.nodeType) return "\x3c!--" + e.data + "--\x3e\n\n";
        if (1 !== e.nodeType) return "";
        switch (e.tagName.toLowerCase()) {
          case "h1":
            r || (i = t.subParser("makeMarkdown.header")(e, n, 1) + "\n\n");
            break;
          case "h2":
            r || (i = t.subParser("makeMarkdown.header")(e, n, 2) + "\n\n");
            break;
          case "h3":
            r || (i = t.subParser("makeMarkdown.header")(e, n, 3) + "\n\n");
            break;
          case "h4":
            r || (i = t.subParser("makeMarkdown.header")(e, n, 4) + "\n\n");
            break;
          case "h5":
            r || (i = t.subParser("makeMarkdown.header")(e, n, 5) + "\n\n");
            break;
          case "h6":
            r || (i = t.subParser("makeMarkdown.header")(e, n, 6) + "\n\n");
            break;
          case "p":
            r || (i = t.subParser("makeMarkdown.paragraph")(e, n) + "\n\n");
            break;
          case "blockquote":
            r || (i = t.subParser("makeMarkdown.blockquote")(e, n) + "\n\n");
            break;
          case "hr":
            r || (i = t.subParser("makeMarkdown.hr")(e, n) + "\n\n");
            break;
          case "ol":
            r || (i = t.subParser("makeMarkdown.list")(e, n, "ol") + "\n\n");
            break;
          case "ul":
            r || (i = t.subParser("makeMarkdown.list")(e, n, "ul") + "\n\n");
            break;
          case "precode":
            r || (i = t.subParser("makeMarkdown.codeBlock")(e, n) + "\n\n");
            break;
          case "pre":
            r || (i = t.subParser("makeMarkdown.pre")(e, n) + "\n\n");
            break;
          case "table":
            r || (i = t.subParser("makeMarkdown.table")(e, n) + "\n\n");
            break;
          case "code":
            i = t.subParser("makeMarkdown.codeSpan")(e, n);
            break;
          case "em":
          case "i":
            i = t.subParser("makeMarkdown.emphasis")(e, n);
            break;
          case "strong":
          case "b":
            i = t.subParser("makeMarkdown.strong")(e, n);
            break;
          case "del":
            i = t.subParser("makeMarkdown.strikethrough")(e, n);
            break;
          case "a":
            i = t.subParser("makeMarkdown.links")(e, n);
            break;
          case "img":
            i = t.subParser("makeMarkdown.image")(e, n);
            break;
          default:
            i = e.outerHTML + "\n\n";
        }
        return i;
      }),
      t.subParser("makeMarkdown.paragraph", function (e, n) {
        var r = "";
        if (e.hasChildNodes())
          for (var i = e.childNodes, o = i.length, a = 0; a < o; ++a)
            r += t.subParser("makeMarkdown.node")(i[a], n);
        return (r = r.trim());
      }),
      t.subParser("makeMarkdown.pre", function (e, t) {
        var n = e.getAttribute("prenum");
        return "<pre>" + t.preList[n] + "</pre>";
      }),
      t.subParser("makeMarkdown.strikethrough", function (e, n) {
        var r = "";
        if (e.hasChildNodes()) {
          r += "~~";
          for (var i = e.childNodes, o = i.length, a = 0; a < o; ++a)
            r += t.subParser("makeMarkdown.node")(i[a], n);
          r += "~~";
        }
        return r;
      }),
      t.subParser("makeMarkdown.strong", function (e, n) {
        var r = "";
        if (e.hasChildNodes()) {
          r += "**";
          for (var i = e.childNodes, o = i.length, a = 0; a < o; ++a)
            r += t.subParser("makeMarkdown.node")(i[a], n);
          r += "**";
        }
        return r;
      }),
      t.subParser("makeMarkdown.table", function (e, n) {
        var r,
          i,
          o = "",
          a = [[], []],
          s = e.querySelectorAll("thead>tr>th"),
          l = e.querySelectorAll("tbody>tr");
        for (r = 0; r < s.length; ++r) {
          var c = t.subParser("makeMarkdown.tableCell")(s[r], n),
            d = "---";
          if (s[r].hasAttribute("style"))
            switch (
              s[r].getAttribute("style").toLowerCase().replace(/\s/g, "")
            ) {
              case "text-align:left;":
                d = ":---";
                break;
              case "text-align:right;":
                d = "---:";
                break;
              case "text-align:center;":
                d = ":---:";
            }
          (a[0][r] = c.trim()), (a[1][r] = d);
        }
        for (r = 0; r < l.length; ++r) {
          var u = a.push([]) - 1,
            p = l[r].getElementsByTagName("td");
          for (i = 0; i < s.length; ++i) {
            var m = " ";
            void 0 !== p[i] &&
              (m = t.subParser("makeMarkdown.tableCell")(p[i], n)),
              a[u].push(m);
          }
        }
        var f = 3;
        for (r = 0; r < a.length; ++r)
          for (i = 0; i < a[r].length; ++i) {
            var h = a[r][i].length;
            h > f && (f = h);
          }
        for (r = 0; r < a.length; ++r) {
          for (i = 0; i < a[r].length; ++i)
            1 === r
              ? ":" === a[r][i].slice(-1)
                ? (a[r][i] =
                    t.helper.padEnd(a[r][i].slice(-1), f - 1, "-") + ":")
                : (a[r][i] = t.helper.padEnd(a[r][i], f, "-"))
              : (a[r][i] = t.helper.padEnd(a[r][i], f));
          o += "| " + a[r].join(" | ") + " |\n";
        }
        return o.trim();
      }),
      t.subParser("makeMarkdown.tableCell", function (e, n) {
        var r = "";
        if (!e.hasChildNodes()) return "";
        for (var i = e.childNodes, o = i.length, a = 0; a < o; ++a)
          r += t.subParser("makeMarkdown.node")(i[a], n, !0);
        return r.trim();
      }),
      t.subParser("makeMarkdown.txt", function (e) {
        var n = e.nodeValue;
        return (
          (n = (n = n.replace(/ +/g, " ")).replace(/¨NBSP;/g, " ")),
          (n = (n = (n = (n = (n = (n = (n = (n = (n =
            t.helper.unescapeHTMLEntities(n)).replace(
            /([*_~|`])/g,
            "\\$1"
          )).replace(/^(\s*)>/g, "\\$1>")).replace(/^#/gm, "\\#")).replace(
            /^(\s*)([-=]{3,})(\s*)$/,
            "$1\\$2$3"
          )).replace(/^( {0,3}\d+)\./gm, "$1\\.")).replace(
            /^( {0,3})([+-])/gm,
            "$1\\$2"
          )).replace(/]([\s]*)\(/g, "\\]$1\\(")).replace(
            /^ {0,3}\[([\S \t]*?)]:/gm,
            "\\[$1]:"
          ))
        );
      }),
      T.exports ? (T.exports = t) : (this.showdown = t);
  }.call(e);
const H = t(A.exports),
  N = ["innerHTML"],
  j = d(
    n({
      __name: "MarkdownViewer",
      props: { value: { type: String }, class: { type: String } },
      setup(e) {
        const t = e,
          n = new H.Converter();
        n.setOption("tables", !0);
        const r = v(() => n.makeHtml(t.value || ""));
        return (e, t) => (
          u(),
          p(
            "div",
            { class: b([e.$props.class, "markdown-viewer"]), innerHTML: l(r) },
            null,
            10,
            N
          )
        );
      },
    }),
    [["__scopeId", "data-v-05981122"]]
  );
y(x);
const O = y(M);
y(j);
export { O as M };

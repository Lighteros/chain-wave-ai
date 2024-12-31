import { _ as e } from "./PageWrapper-BPMfS97v.js";
import { u as t, a as n, _ as r, C as a } from "./co-app-BtIh2uqX.js";
import { A as o } from "./providerSetting-DCkM4vP5.js";
import {
  as as i,
  c as s,
  r as l,
  b2 as d,
  au as p,
  av as u,
  bl as c,
  bm as h,
  bn as f,
  aw as g,
  a as m,
  aC as _,
  bo as y,
  aA as v,
  aD as w,
  aB as x,
  bp as b,
  n as k,
  cg as T,
  aR as j,
  ax as B,
  bN as E,
} from "./index-DPRREYlk.js";
import { u as P } from "./useDiffTimer-Bf-HICf0.js";
import { _ as C } from "./JsonPreview.vue_vue_type_script_setup_true_lang-Tt-e9JVs.js";
import { U as S } from "./index-4U7T8gMN.js";
import { _ as A } from "./ErrorMsg.vue_vue_type_script_setup_true_lang-C502n5G6.js";
import { _ as R } from "./index-DNofMLzB.js";
import { u as O } from "./usePlayground-CFTtHr_u.js";
import { T as I } from "./TimerBase-CkPrDMCE.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BDMVSGUf.js";
import "./useBreakpoint-vSrZKufz.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./index-BPauqaGF.js";
import "./List-D10KDyaY.js";
import "./isMobile-VPrdNIIw.js";
import "./CheckOutlined-BvF8M63J.js";
import "./logo-with-brand-light-BCpFi14j.js";
import "./index-CF-tXiQi.js";
import "./index-DTRlG5Qd.js";
import "./useRefs-DoWExZxn.js";
import "./index-B0yuFjoJ.js";
import "./Endpoint-DTdkXGrW.js";
import "./create-enum-converter-ClJbjM_p.js";
var M = function (e) {
    return e.reduce(function (e, t) {
      return 2 * e + t;
    }, 0);
  },
  U = function (e) {
    for (var t = [], n = 7; n >= 0; n--) t.push(!!(e & (1 << n)));
    return t;
  },
  z = function (e) {
    (this.data = e),
      (this.len = this.data.length),
      (this.pos = 0),
      (this.readByte = function () {
        if (this.pos >= this.data.length)
          throw new Error("Attempted to read past end of stream.");
        return e instanceof Uint8Array
          ? e[this.pos++]
          : 255 & e.charCodeAt(this.pos++);
      }),
      (this.readBytes = function (e) {
        for (var t = [], n = 0; n < e; n++) t.push(this.readByte());
        return t;
      }),
      (this.read = function (e) {
        for (var t = "", n = 0; n < e; n++)
          t += String.fromCharCode(this.readByte());
        return t;
      }),
      (this.readUnsigned = function () {
        var e = this.readBytes(2);
        return (e[1] << 8) + e[0];
      });
  },
  F = function (e, t) {
    t || (t = {});
    var n = function (t) {
        for (var n = [], r = 0; r < t; r++) n.push(e.readBytes(3));
        return n;
      },
      r = function () {
        var t, n;
        n = "";
        do {
          (t = e.readByte()), (n += e.read(t));
        } while (0 !== t);
        return n;
      },
      a = function (a) {
        (a.leftPos = e.readUnsigned()),
          (a.topPos = e.readUnsigned()),
          (a.width = e.readUnsigned()),
          (a.height = e.readUnsigned());
        var o = U(e.readByte());
        (a.lctFlag = o.shift()),
          (a.interlaced = o.shift()),
          (a.sorted = o.shift()),
          (a.reserved = o.splice(0, 2)),
          (a.lctSize = M(o.splice(0, 3))),
          a.lctFlag && (a.lct = n(1 << (a.lctSize + 1))),
          (a.lzwMinCodeSize = e.readByte());
        var i = r();
        (a.pixels = (function (e, t) {
          for (
            var n,
              r,
              a = 0,
              o = function (e) {
                for (var n = 0, r = 0; r < e; r++)
                  t.charCodeAt(a >> 3) & (1 << (7 & a)) && (n |= 1 << r), a++;
                return n;
              },
              i = [],
              s = 1 << e,
              l = s + 1,
              d = e + 1,
              p = [],
              u = function () {
                (p = []), (d = e + 1);
                for (var t = 0; t < s; t++) p[t] = [t];
                (p[s] = []), (p[l] = null);
              };
            ;

          )
            if (((r = n), (n = o(d)) !== s)) {
              if (n === l) break;
              if (n < p.length) r !== s && p.push(p[r].concat(p[n][0]));
              else {
                if (n !== p.length) throw new Error("Invalid LZW code.");
                p.push(p[r].concat(p[r][0]));
              }
              i.push.apply(i, p[n]), p.length === 1 << d && d < 12 && d++;
            } else u();
          return i;
        })(a.lzwMinCodeSize, i)),
          a.interlaced &&
            (a.pixels = (function (e, t) {
              for (
                var n = new Array(e.length),
                  r = e.length / t,
                  a = function (r, a) {
                    var o = e.slice(a * t, (a + 1) * t);
                    n.splice.apply(n, [r * t, t].concat(o));
                  },
                  o = [0, 4, 2, 1],
                  i = [8, 8, 4, 2],
                  s = 0,
                  l = 0;
                l < 4;
                l++
              )
                for (var d = o[l]; d < r; d += i[l]) a(d, s), s++;
              return n;
            })(a.pixels, a.width)),
          t.img && t.img(a);
      },
      o = function () {
        var n = {};
        switch (
          ((n.sentinel = e.readByte()), String.fromCharCode(n.sentinel))
        ) {
          case "!":
            (n.type = "ext"),
              (function (n) {
                switch (((n.label = e.readByte()), n.label)) {
                  case 249:
                    (n.extType = "gce"),
                      (function (n) {
                        e.readByte();
                        var r = U(e.readByte());
                        (n.reserved = r.splice(0, 3)),
                          (n.disposalMethod = M(r.splice(0, 3))),
                          (n.userInput = r.shift()),
                          (n.transparencyGiven = r.shift()),
                          (n.delayTime = e.readUnsigned()),
                          (n.transparencyIndex = e.readByte()),
                          (n.terminator = e.readByte()),
                          t.gce && t.gce(n);
                      })(n);
                    break;
                  case 254:
                    (n.extType = "com"),
                      (function (e) {
                        (e.comment = r()), t.com && t.com(e);
                      })(n);
                    break;
                  case 1:
                    (n.extType = "pte"),
                      (function (n) {
                        e.readByte(),
                          (n.ptHeader = e.readBytes(12)),
                          (n.ptData = r()),
                          t.pte && t.pte(n);
                      })(n);
                    break;
                  case 255:
                    (n.extType = "app"),
                      (function (n) {
                        e.readByte(),
                          (n.identifier = e.read(8)),
                          (n.authCode = e.read(3)),
                          "NETSCAPE" === n.identifier
                            ? (function (n) {
                                e.readByte(),
                                  (n.unknown = e.readByte()),
                                  (n.iterations = e.readUnsigned()),
                                  (n.terminator = e.readByte()),
                                  t.app && t.app.NETSCAPE && t.app.NETSCAPE(n);
                              })(n)
                            : (function (e) {
                                (e.appData = r()),
                                  t.app &&
                                    t.app[e.identifier] &&
                                    t.app[e.identifier](e);
                              })(n);
                      })(n);
                    break;
                  default:
                    (n.extType = "unknown"),
                      (function (e) {
                        (e.data = r()), t.unknown && t.unknown(e);
                      })(n);
                }
              })(n);
            break;
          case ",":
            (n.type = "img"), a(n);
            break;
          case ";":
            (n.type = "eof"), t.eof && t.eof(n);
            break;
          default:
            throw new Error("Unknown block: 0x" + n.sentinel.toString(16));
        }
        "eof" !== n.type && setTimeout(o, 0);
      };
    !(function () {
      var r = {};
      if (((r.sig = e.read(3)), (r.ver = e.read(3)), "GIF" !== r.sig))
        throw new Error("Not a GIF file.");
      (r.width = e.readUnsigned()), (r.height = e.readUnsigned());
      var a = U(e.readByte());
      (r.gctFlag = a.shift()),
        (r.colorRes = M(a.splice(0, 3))),
        (r.sorted = a.shift()),
        (r.gctSize = M(a.splice(0, 3))),
        (r.bgColor = e.readByte()),
        (r.pixelAspectRatio = e.readByte()),
        r.gctFlag && (r.gct = n(1 << (r.gctSize + 1))),
        t.hdr && t.hdr(r);
    })(),
      setTimeout(o, 0);
  },
  N = function (e) {
    var t,
      n,
      r = { vp_l: 0, vp_t: 0, vp_w: null, vp_h: null, c_w: null, c_h: null };
    for (var a in e) r[a] = e[a];
    r.vp_w && r.vp_h && (r.is_vp = !0);
    var o = null,
      i = !1,
      s = null,
      l = null,
      d = null,
      p = null,
      u = null,
      c = null,
      h = null,
      f = !0,
      g = !1,
      m = [],
      _ = [],
      y = r.gif;
    void 0 === r.auto_play &&
      (r.auto_play =
        !y.getAttribute("rel:auto_play") ||
        "1" == y.getAttribute("rel:auto_play"));
    var v,
      w,
      x,
      b,
      k = r.hasOwnProperty("on_end") ? r.on_end : null,
      T = r.hasOwnProperty("loop_delay") ? r.loop_delay : 0,
      j = r.hasOwnProperty("loop_mode") ? r.loop_mode : "auto",
      B = !r.hasOwnProperty("draw_while_loading") || r.draw_while_loading,
      E =
        !!B && (!r.hasOwnProperty("show_progress_bar") || r.show_progress_bar),
      P = r.hasOwnProperty("progressbar_height") ? r.progressbar_height : 6,
      C = r.hasOwnProperty("progressbar_background_color")
        ? r.progressbar_background_color
        : "rgba(255,255,255,0.4)",
      S = r.hasOwnProperty("progressbar_foreground_color")
        ? r.progressbar_foreground_color
        : "rgba(255,0,22,.8)",
      A = function () {
        (s = null), (l = null), (u = d), (d = null), (c = null);
      },
      R = function () {
        try {
          F(t, L);
        } catch (e) {
          M("parse");
        }
      },
      O = function (e, t) {
        (v.width = e * H()),
          (v.height = t * H()),
          (x.style.minWidth = e * H() + "px"),
          (b.width = e),
          (b.height = t),
          (b.style.width = e + "px"),
          (b.style.height = t + "px"),
          b.getContext("2d").setTransform(1, 0, 0, 1, 0, 0);
      },
      I = function (e, t, n) {
        if (n && E) {
          var a,
            o,
            i,
            s = P;
          r.is_vp
            ? g
              ? ((o = (r.vp_t + r.vp_h - s) / H()),
                (s /= H()),
                (a = r.vp_l / H() + (e / t) * (r.vp_w / H())),
                (i = v.width / H()))
              : ((o = r.vp_t + r.vp_h - s),
                (a = r.vp_l + (e / t) * r.vp_w),
                (i = v.width))
            : ((o = (v.height - s) / (g ? H() : 1)),
              (a = ((e / t) * v.width) / (g ? H() : 1)),
              (i = v.width / (g ? H() : 1)),
              (s /= g ? H() : 1)),
            (w.fillStyle = C),
            w.fillRect(a, o, i - a, s),
            (w.fillStyle = S),
            w.fillRect(0, o, a, s);
        }
      },
      M = function (e) {
        (o = e),
          (n = { width: y.width, height: y.height }),
          (m = []),
          (w.fillStyle = "black"),
          w.fillRect(0, 0, r.c_w ? r.c_w : n.width, r.c_h ? r.c_h : n.height),
          (w.strokeStyle = "red"),
          (w.lineWidth = 3),
          w.moveTo(0, 0),
          w.lineTo(r.c_w ? r.c_w : n.width, r.c_h ? r.c_h : n.height),
          w.moveTo(0, r.c_h ? r.c_h : n.height),
          w.lineTo(r.c_w ? r.c_w : n.width, 0),
          w.stroke();
      },
      U = function () {
        c &&
          (m.push({ data: c.getImageData(0, 0, n.width, n.height), delay: l }),
          _.push({ x: 0, y: 0 }));
      },
      N = (function () {
        var e,
          t,
          n,
          a = -1,
          i = 0,
          s = function (e) {
            (a += e), d();
          },
          l =
            ((e = !1),
            (t = function () {
              null !== k && k(y),
                i++,
                !1 !== j || i < 0 ? n() : ((e = !1), (f = !1));
            }),
            (n = function () {
              if ((e = f)) {
                s(1);
                var r = 10 * m[a].delay;
                r || (r = 100),
                  0 == (a + 1 + m.length) % m.length
                    ? ((r += T), setTimeout(t, r))
                    : setTimeout(n, r);
              }
            }),
            function () {
              e || setTimeout(n, 0);
            }),
          d = function () {
            var e;
            (a = parseInt(a, 10)) > m.length - 1 && (a = 0),
              a < 0 && (a = 0),
              (e = _[a]),
              b.getContext("2d").putImageData(m[a].data, e.x, e.y),
              (w.globalCompositeOperation = "copy"),
              w.drawImage(b, 0, 0);
          };
        return {
          init: function () {
            o ||
              ((r.c_w && r.c_h) || w.scale(H(), H()),
              r.auto_play ? l() : ((a = 0), d()));
          },
          step: l,
          play: function () {
            (f = !0), l();
          },
          pause: function () {
            f = !1;
          },
          playing: f,
          move_relative: s,
          current_frame: function () {
            return a;
          },
          length: function () {
            return m.length;
          },
          move_to: function (e) {
            (a = e), d();
          },
        };
      })(),
      D = function (e) {
        I(t.pos, t.data.length, e);
      },
      V = function () {},
      G = function (e, t) {
        return function (n) {
          e(n), D(t);
        };
      },
      L = {
        hdr: G(function (e) {
          O((n = e).width, n.height);
        }),
        gce: G(function (e) {
          U(),
            A(),
            (s = e.transparencyGiven ? e.transparencyIndex : null),
            (l = e.delayTime),
            (d = e.disposalMethod);
        }),
        com: G(V),
        app: { NETSCAPE: G(V) },
        img: G(function (e) {
          c || (c = b.getContext("2d"));
          var t = m.length,
            a = e.lctFlag ? e.lct : n.gct;
          t > 0 &&
            (3 === u
              ? null !== p
                ? c.putImageData(m[p].data, 0, 0)
                : c.clearRect(h.leftPos, h.topPos, h.width, h.height)
              : (p = t - 1),
            2 === u && c.clearRect(h.leftPos, h.topPos, h.width, h.height));
          var o = c.getImageData(e.leftPos, e.topPos, e.width, e.height);
          e.pixels.forEach(function (e, t) {
            e !== s &&
              ((o.data[4 * t + 0] = a[e][0]),
              (o.data[4 * t + 1] = a[e][1]),
              (o.data[4 * t + 2] = a[e][2]),
              (o.data[4 * t + 3] = 255));
          }),
            c.putImageData(o, e.leftPos, e.topPos),
            g || (w.scale(H(), H()), (g = !0)),
            B && (w.drawImage(b, 0, 0), (B = r.auto_play)),
            (h = e);
        }, !0),
        eof: function (e) {
          U(),
            D(!1),
            (r.c_w && r.c_h) ||
              ((v.width = n.width * H()), (v.height = n.height * H())),
            N.init(),
            (i = !1),
            X && X(y);
        },
      },
      W = function () {
        var e = y.parentNode,
          t = document.createElement("div");
        (v = document.createElement("canvas")),
          (w = v.getContext("2d")),
          (x = document.createElement("div")),
          (b = document.createElement("canvas")),
          (t.width = v.width = y.width),
          (t.height = v.height = y.height),
          (x.style.minWidth = y.width + "px"),
          (t.className = "jsgif"),
          (x.className = "jsgif_toolbar"),
          t.appendChild(v),
          t.appendChild(x),
          e.insertBefore(t, y),
          e.removeChild(y),
          r.c_w && r.c_h && O(r.c_w, r.c_h),
          (Y = !0);
      },
      H = function () {
        return r.max_width && n && n.width > r.max_width
          ? r.max_width / n.width
          : 1;
      },
      Y = !1,
      X = !1,
      q = function (e) {
        return (
          !i &&
          ((X = e || !1),
          (i = !0),
          (m = []),
          A(),
          (p = null),
          (u = null),
          (c = null),
          (h = null),
          !0)
        );
      },
      J = function () {
        return m.reduce(function (e, t) {
          return e + t.delay;
        }, 0);
      };
    return {
      play: N.play,
      pause: N.pause,
      move_relative: N.move_relative,
      move_to: N.move_to,
      get_playing: function () {
        return f;
      },
      get_canvas: function () {
        return v;
      },
      get_canvas_scale: function () {
        return H();
      },
      get_loading: function () {
        return i;
      },
      get_auto_play: function () {
        return r.auto_play;
      },
      get_length: function () {
        return N.length();
      },
      get_frames: function () {
        return m;
      },
      get_duration: function () {
        return J();
      },
      get_duration_ms: function () {
        return 10 * J();
      },
      get_current_frame: function () {
        return N.current_frame();
      },
      load_url: function (e, n) {
        if (q(n)) {
          var r = new XMLHttpRequest();
          r.open("GET", e, !0),
            "overrideMimeType" in r
              ? r.overrideMimeType("text/plain; charset=x-user-defined")
              : "responseType" in r
              ? (r.responseType = "arraybuffer")
              : r.setRequestHeader("Accept-Charset", "x-user-defined"),
            (r.onloadstart = function () {
              Y || W();
            }),
            (r.onload = function (e) {
              200 != this.status && M("xhr - response"),
                "response" in this ||
                  (this.response = new VBArray(this.responseText)
                    .toArray()
                    .map(String.fromCharCode)
                    .join(""));
              var n = this.response;
              n.toString().indexOf("ArrayBuffer") > 0 &&
                (n = new Uint8Array(n)),
                (t = new z(n)),
                setTimeout(R, 0);
            }),
            (r.onprogress = function (e) {
              e.lengthComputable && I(e.loaded, e.total, !0);
            }),
            (r.onerror = function () {
              M("xhr");
            }),
            r.send();
        }
      },
      load: function (e) {
        this.load_url(y.getAttribute("rel:animated_src") || y.src, e);
      },
      load_raw: function (e, n) {
        q(n) && (Y || W(), (t = new z(e)), setTimeout(R, 0));
      },
      set_frame_offset: function (e, t) {
        _[e]
          ? (void 0 !== t.x && (_[e].x = t.x), void 0 !== t.y && (_[e].y = t.y))
          : (_[e] = t);
      },
    };
  };
const D = { class: "max-w-3/5 my-6 relative", "rounded-md": "" },
  V = { key: 0, p4: "", bg: "#F4F4F4 dark:#2E2E2E", "rounded-md": "" },
  G = { key: 1, class: "w-full p4 bg-white" },
  L = { class: "text-orange-600" },
  W = c(
    "div",
    { class: "text-green mb-2" },
    [
      c("span", { class: "font-bold" }, "Expected:"),
      v(" Please follow the following data structure. "),
    ],
    -1
  ),
  H = c(
    "div",
    { class: "text-orange-600 mb-2" },
    [
      c("span", { class: "font-bold" }, "Actual:"),
      v(" Your model's output doesn't match the component. "),
    ],
    -1
  ),
  Y = { key: 2, "p-4": "", "rounded-md": "", flex: "~ row items-start gap-5" },
  X = { key: 1, relative: "", flex: "~ col center" },
  q = c(
    "div",
    {
      "animate-pulse": "",
      "size-300px": "",
      "rounded-md": "",
      "bg-primary-300": "",
    },
    null,
    -1
  ),
  J = ["src"],
  Z = i({
    __name: "MsgTextToVideo",
    props: {
      msg: {},
      activated: { type: Boolean },
      hideParams: { type: Boolean },
      icon: {},
    },
    setup(e) {
      const t = e,
        n = s(() => {
          const { b64_json: e, url: n } = t.msg?.output || {};
          return e ? `data:image/gif;base64,${e}` : n;
        }),
        r = s(() => (t.msg?.error ? t.msg?.error?.status ?? 0 : 0)),
        a = s(() => !n.value),
        o = P(t.activated),
        i = l();
      return (
        d(() => {
          if (n.value && i.value) {
            k();
            const e = N({
              gif: i.value,
              max_width: 300,
              max_height: 300,
              vp_w: 300,
              vp_h: 300,
            });
            e.load(() => {
              e.play();
              const t = e.get_canvas();
              (t.style.borderRadius = "6px"),
                t.addEventListener("click", () => {
                  e.get_playing() ? e.pause() : e.play();
                });
            });
          }
        }),
        (e, s) => {
          const l = b,
            d = R;
          return (
            p(),
            u(
              "div",
              {
                class: h([
                  "flex group break-words",
                  [
                    t.activated || "assistant" === e.msg.role
                      ? ""
                      : "flex-row-reverse",
                  ],
                ]),
              },
              [
                c("div", D, [
                  c(
                    "nav",
                    {
                      class: h([
                        "flex gap-2 items-center break-words transition-duration-300 transform-origin-l absolute opacity-0 transition-opacity transition-transform scale-0 translate-y-0 group-hover:opacity-100 -group-hover:translate-y-12 group-hover:scale-100",
                        [
                          t.activated
                            ? "!opacity-100 !-translate-y-12 !scale-100 transition-duration-500"
                            : "",
                        ],
                      ]),
                    },
                    [f(e.$slots, "extraAction")],
                    2
                  ),
                  "user" === e.msg.role
                    ? (p(),
                      u("div", V, [
                        g(
                          m(S),
                          {
                            "hide-params": t.hideParams,
                            input: e.msg.input,
                            "content-key": "prompt",
                            label: "Prompt",
                          },
                          null,
                          8,
                          ["hide-params", "input"]
                        ),
                      ]))
                    : (p(),
                      u(
                        _,
                        { key: 1 },
                        [
                          0 != m(r)
                            ? (p(),
                              y(
                                A,
                                { key: 0, errcode: m(r), msg: e.msg },
                                null,
                                8,
                                ["errcode", "msg"]
                              ))
                            : m(a) && !t.activated
                            ? (p(),
                              u("div", G, [
                                c("h2", L, [
                                  g(l, { icon: "i-ion:warning" }),
                                  v("System prompts: "),
                                ]),
                                W,
                                g(C, {
                                  data: {
                                    b64_json:
                                      "YOUR B64 JSON STRING HERE (Optional)",
                                    url: "YOUR URL HERE (Optional)",
                                  },
                                  class:
                                    "max-h-40 bg-green-100 overflow-auto resize-y",
                                }),
                                g(d),
                                H,
                                g(
                                  C,
                                  {
                                    data: t.msg.output,
                                    class:
                                      "max-h-40 overflow-auto resize-y bg-orange-100",
                                  },
                                  null,
                                  8,
                                  ["data"]
                                ),
                              ]))
                            : (p(),
                              u("div", Y, [
                                e.icon
                                  ? (p(),
                                    y(
                                      l,
                                      { key: 0, icon: e.icon, size: "32px" },
                                      null,
                                      8,
                                      ["icon"]
                                    ))
                                  : w("", !0),
                                t.activated
                                  ? (p(),
                                    u("div", X, [
                                      q,
                                      c(
                                        "span",
                                        null,
                                        x(m(o).toFixed(1)) + "s. ",
                                        1
                                      ),
                                    ]))
                                  : (p(),
                                    u(
                                      "img",
                                      {
                                        key: 2,
                                        ref_key: "imgRef",
                                        ref: i,
                                        src: m(n),
                                        style: {
                                          width: "300px",
                                          height: "300px",
                                        },
                                        "rounded-md": "",
                                      },
                                      null,
                                      8,
                                      J
                                    )),
                              ])),
                        ],
                        64
                      )),
                ]),
              ],
              2
            )
          );
        }
      );
    },
  });
class $ {
  prompt = "";
  n_prompt = "";
  motion_module = "mm_sd_v14";
  path = "toonyou_beta3.safetensors";
  steps;
  seed;
  guidance_scale;
  response_format = "b64_json";
}
class K extends I {
  constructor(e) {
    super(), (this.version = e);
  }
  role = "user";
  id;
  input = new $();
  output;
  error;
  model;
}
const Q = {
    flex: "~ col items-center",
    "h-full": "",
    "w-full": "",
    "overflow-hidden": "",
  },
  ee = { key: 1, flex: "~ col gap-4", "w-full": "" },
  te = i({
    __name: "t2video",
    setup(i) {
      const d = t(),
        h = s(() => ({
          endpoint: d.getEndpoint,
          defaultMessageList: d.getMessages,
          apiKey: o["fedml-official"],
        })),
        {
          formState: f,
          onSend: v,
          onAbort: x,
          messageList: b,
          currentAssistantMessage: k,
        } = O(h, () => new K(), new $(), {
          rewriteWatcher() {},
          handlerResponse(e, t) {
            (e.role = "assistant"), (e.output = t.data), e.complete();
          },
        }),
        P = l([
          "🚁 A drone flying over a city, capturing skyscrapers and traffic from above.",
          "🧑‍🍳 A chef slicing vegetables in slow motion, each cut clean and precise.",
          "🛹 A skateboarder landing a trick, gliding smoothly on the pavement.",
        ]),
        C = l();
      return (
        n(C, k),
        T(() => {
          d.init(), d.enter("textToVideo");
        }),
        j(
          b,
          () => {
            d.setMessages("textToVideo", b.value);
          },
          { deep: !0 }
        ),
        (t, n) => {
          const o = e;
          return (
            p(),
            y(
              o,
              { dense: "", "content-full-height": "", "fixed-height": "" },
              {
                default: B(() => [
                  c("div", Q, [
                    c(
                      "div",
                      {
                        ref_key: "messageRef",
                        ref: C,
                        flex: "~ grow-1 shrink-1 basis-0",
                        "w-full": "",
                        "overflow-auto": "",
                        "py-12": "",
                        px: "136px",
                        "lt-lg:px": "4",
                      },
                      [
                        m(d).getMessages && 0 !== m(d).getMessages.length
                          ? (p(),
                            u("div", ee, [
                              (p(!0),
                              u(
                                _,
                                null,
                                E(
                                  m(d).getMessages,
                                  (e) => (
                                    p(),
                                    y(
                                      Z,
                                      {
                                        key: e.created_at,
                                        "hide-params": "",
                                        icon: "i-co:logo",
                                        msg: e,
                                      },
                                      null,
                                      8,
                                      ["msg"]
                                    )
                                  )
                                ),
                                128
                              )),
                              m(k)
                                ? (p(),
                                  y(
                                    Z,
                                    {
                                      key: 0,
                                      "hide-params": "",
                                      activated: "",
                                      icon: "i-co:logo",
                                      msg: m(k),
                                    },
                                    null,
                                    8,
                                    ["msg"]
                                  ))
                                : w("", !0),
                            ]))
                          : (p(),
                            y(
                              r,
                              {
                                key: 0,
                                "h-full": "",
                                prompts: m(P),
                                description:
                                  "Transform your ideas into captivating videos in real-time",
                                onSend:
                                  n[0] ||
                                  (n[0] = (e) => {
                                    (m(f).prompt = e),
                                      m(v)(),
                                      (m(f).prompt = "");
                                  }),
                              },
                              null,
                              8,
                              ["prompts"]
                            )),
                      ],
                      512
                    ),
                    g(
                      a,
                      {
                        modelValue: m(f).prompt,
                        "onUpdate:modelValue":
                          n[1] || (n[1] = (e) => (m(f).prompt = e)),
                        endpoint: m(d).state.textToVideo.activedEndpointId,
                        "onUpdate:endpoint":
                          n[2] ||
                          (n[2] = (e) =>
                            (m(d).state.textToVideo.activedEndpointId = e)),
                        class: "w-full px-136px lt-lg:px-4 mb-4",
                        endpoints: m(d).state.textToVideo.endpoints,
                        "inflight-message": m(k),
                        loading: m(d).getStatus.has("loading-endpoints"),
                        "on-send": () => m(v)(),
                        "on-abort": () => m(x)(),
                      },
                      null,
                      8,
                      [
                        "modelValue",
                        "endpoint",
                        "endpoints",
                        "inflight-message",
                        "loading",
                        "on-send",
                        "on-abort",
                      ]
                    ),
                  ]),
                ]),
                _: 1,
              }
            )
          );
        }
      );
    },
  });
export { te as default };

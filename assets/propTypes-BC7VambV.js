/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function e(e) {
  return "[object Object]" === Object.prototype.toString.call(e);
}
function t() {
  return (
    (t = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    t.apply(this, arguments)
  );
}
function r(e, t) {
  if (null == e) return {};
  var r,
    n,
    i = {},
    o = Object.keys(e);
  for (n = 0; n < o.length; n++) t.indexOf((r = o[n])) >= 0 || (i[r] = e[r]);
  return i;
}
const n = { silent: !1, logLevel: "warn" },
  i = ["validator"],
  o = Object.prototype,
  a = o.toString,
  s = o.hasOwnProperty,
  u = /^\s*function (\w+)/;
function l(e) {
  var t;
  const r = null !== (t = null == e ? void 0 : e.type) && void 0 !== t ? t : e;
  if (r) {
    const e = r.toString().match(u);
    return e ? e[1] : "";
  }
  return "";
}
const c = function (t) {
  var r, n;
  return (
    !1 !== e(t) &&
    (void 0 === (r = t.constructor) ||
      (!1 !== e((n = r.prototype)) && !1 !== n.hasOwnProperty("isPrototypeOf")))
  );
};
let f = (e) => e;
const d = (e, t) => s.call(e, t),
  p =
    Number.isInteger ||
    function (e) {
      return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
    },
  y =
    Array.isArray ||
    function (e) {
      return "[object Array]" === a.call(e);
    },
  v = (e) => "[object Function]" === a.call(e),
  h = (e) => c(e) && d(e, "_vueTypes_name"),
  b = (e) =>
    c(e) &&
    (d(e, "type") ||
      ["_vueTypes_name", "validator", "default", "required"].some((t) =>
        d(e, t)
      ));
function g(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function O(e, t, r = !1) {
  let n,
    i = !0,
    o = "";
  n = c(e) ? e : { type: e };
  const a = h(n) ? n._vueTypes_name + " - " : "";
  if (b(n) && null !== n.type) {
    if (void 0 === n.type || !0 === n.type) return i;
    if (!n.required && void 0 === t) return i;
    y(n.type)
      ? ((i = n.type.some((e) => !0 === O(e, t, !0))),
        (o = n.type.map((e) => l(e)).join(" or ")))
      : ((o = l(n)),
        (i =
          "Array" === o
            ? y(t)
            : "Object" === o
            ? c(t)
            : "String" === o ||
              "Number" === o ||
              "Boolean" === o ||
              "Function" === o
            ? (function (e) {
                if (null == e) return "";
                const t = e.constructor.toString().match(u);
                return t ? t[1] : "";
              })(t) === o
            : t instanceof n.type));
  }
  if (!i) {
    const e = `${a}value "${t}" should be of type "${o}"`;
    return !1 === r ? (f(e), !1) : e;
  }
  if (d(n, "validator") && v(n.validator)) {
    const e = f,
      o = [];
    if (
      ((f = (e) => {
        o.push(e);
      }),
      (i = n.validator(t)),
      (f = e),
      !i)
    ) {
      const e = (o.length > 1 ? "* " : "") + o.join("\n* ");
      return (o.length = 0), !1 === r ? (f(e), i) : e;
    }
  }
  return i;
}
function m(e, t) {
  const r = Object.defineProperties(t, {
      _vueTypes_name: { value: e, writable: !0 },
      isRequired: {
        get() {
          return (this.required = !0), this;
        },
      },
      def: {
        value(e) {
          return void 0 === e
            ? (d(this, "default") && delete this.default, this)
            : v(e) || !0 === O(this, e, !0)
            ? ((this.default = y(e)
                ? () => [...e]
                : c(e)
                ? () => Object.assign({}, e)
                : e),
              this)
            : (f(`${this._vueTypes_name} - invalid default value: "${e}"`),
              this);
        },
      },
    }),
    { validator: n } = r;
  return v(n) && (r.validator = g(n, r)), r;
}
function j(e, t) {
  const r = m(e, t);
  return Object.defineProperty(r, "validate", {
    value(e) {
      return (
        v(this.validator) &&
          f(
            `${
              this._vueTypes_name
            } - calling .validate() will overwrite the current custom validator function. Validator info:\n${JSON.stringify(
              this
            )}`
          ),
        (this.validator = g(e, this)),
        this
      );
    },
  });
}
function _(e, t, n) {
  const o = (function (e) {
    const t = {};
    return (
      Object.getOwnPropertyNames(e).forEach((r) => {
        t[r] = Object.getOwnPropertyDescriptor(e, r);
      }),
      Object.defineProperties({}, t)
    );
  })(t);
  if (((o._vueTypes_name = e), !c(n))) return o;
  const { validator: a } = n,
    s = r(n, i);
  if (v(a)) {
    let { validator: e } = o;
    e && (e = null !== (l = (u = e).__original) && void 0 !== l ? l : u),
      (o.validator = g(
        e
          ? function (t) {
              return e.call(this, t) && a.call(this, t);
            }
          : a,
        o
      ));
  }
  var u, l;
  return Object.assign(o, s);
}
function T(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
function $(e, t = "custom validation failed") {
  if ("function" != typeof e)
    throw new TypeError(
      "[VueTypes error]: You must provide a function as argument"
    );
  return m(e.name || "<<anonymous function>>", {
    type: null,
    validator(r) {
      const n = e(r);
      return n || f(`${this._vueTypes_name} - ${t}`), n;
    },
  });
}
function w(e) {
  if (!y(e))
    throw new TypeError(
      "[VueTypes error]: You must provide an array as argument."
    );
  const t = `oneOf - value should be one of "${e.join('", "')}".`,
    r = e.reduce((e, t) => {
      if (null != t) {
        const r = t.constructor;
        -1 === e.indexOf(r) && e.push(r);
      }
      return e;
    }, []);
  return m("oneOf", {
    type: r.length > 0 ? r : void 0,
    validator(r) {
      const n = -1 !== e.indexOf(r);
      return n || f(t), n;
    },
  });
}
function P(e) {
  if (!y(e))
    throw new TypeError(
      "[VueTypes error]: You must provide an array as argument"
    );
  let t = !1,
    r = [];
  for (let i = 0; i < e.length; i += 1) {
    const n = e[i];
    if (b(n)) {
      if (h(n) && "oneOf" === n._vueTypes_name && n.type) {
        r = r.concat(n.type);
        continue;
      }
      if ((v(n.validator) && (t = !0), !0 === n.type || !n.type)) {
        f('oneOfType - invalid usage of "true" or "null" as types.');
        continue;
      }
      r = r.concat(n.type);
    } else r.push(n);
  }
  r = r.filter((e, t) => r.indexOf(e) === t);
  const n = r.length > 0 ? r : null;
  return m(
    "oneOfType",
    t
      ? {
          type: n,
          validator(t) {
            const r = [],
              n = e.some((e) => {
                const n = O(
                  h(e) && "oneOf" === e._vueTypes_name ? e.type || null : e,
                  t,
                  !0
                );
                return "string" == typeof n && r.push(n), !0 === n;
              });
            return (
              n ||
                f(
                  `oneOfType - provided value does not match any of the ${
                    r.length
                  } passed-in validators:\n${T(r.join("\n"))}`
                ),
              n
            );
          },
        }
      : { type: n }
  );
}
function x(e) {
  return m("arrayOf", {
    type: Array,
    validator(t) {
      let r = "";
      const n = t.every((t) => ((r = O(e, t, !0)), !0 === r));
      return n || f(`arrayOf - value validation error:\n${T(r)}`), n;
    },
  });
}
function S(e) {
  return m("instanceOf", { type: e });
}
function q(e) {
  return m("objectOf", {
    type: Object,
    validator(t) {
      let r = "";
      const n = Object.keys(t).every((n) => ((r = O(e, t[n], !0)), !0 === r));
      return n || f(`objectOf - value validation error:\n${T(r)}`), n;
    },
  });
}
function A(e) {
  const t = Object.keys(e),
    r = t.filter((t) => {
      var r;
      return !(null === (r = e[t]) || void 0 === r || !r.required);
    }),
    n = m("shape", {
      type: Object,
      validator(n) {
        if (!c(n)) return !1;
        const i = Object.keys(n);
        if (r.length > 0 && r.some((e) => -1 === i.indexOf(e))) {
          const e = r.filter((e) => -1 === i.indexOf(e));
          return (
            f(
              1 === e.length
                ? `shape - required property "${e[0]}" is not defined.`
                : `shape - required properties "${e.join(
                    '", "'
                  )}" are not defined.`
            ),
            !1
          );
        }
        return i.every((r) => {
          if (-1 === t.indexOf(r))
            return (
              !0 === this._vueTypes_isLoose ||
              (f(
                `shape - shape definition does not include a "${r}" property. Allowed keys: "${t.join(
                  '", "'
                )}".`
              ),
              !1)
            );
          const i = O(e[r], n[r], !0);
          return (
            "string" == typeof i &&
              f(`shape - "${r}" property validation error:\n ${T(i)}`),
            !0 === i
          );
        });
      },
    });
  return (
    Object.defineProperty(n, "_vueTypes_isLoose", { writable: !0, value: !1 }),
    Object.defineProperty(n, "loose", {
      get() {
        return (this._vueTypes_isLoose = !0), this;
      },
    }),
    n
  );
}
const N = ["name", "validate", "getter"],
  E = (() => {
    var e;
    return (
      ((e = class {
        static get any() {
          return j("any", {});
        }
        static get func() {
          return j("function", { type: Function }).def(this.defaults.func);
        }
        static get bool() {
          return j("boolean", { type: Boolean }).def(this.defaults.bool);
        }
        static get string() {
          return j("string", { type: String }).def(this.defaults.string);
        }
        static get number() {
          return j("number", { type: Number }).def(this.defaults.number);
        }
        static get array() {
          return j("array", { type: Array }).def(this.defaults.array);
        }
        static get object() {
          return j("object", { type: Object }).def(this.defaults.object);
        }
        static get integer() {
          return m("integer", { type: Number, validator: (e) => p(e) }).def(
            this.defaults.integer
          );
        }
        static get symbol() {
          return m("symbol", { validator: (e) => "symbol" == typeof e });
        }
        static get nullable() {
          return { type: null };
        }
        static extend(e) {
          if (y(e)) return e.forEach((e) => this.extend(e)), this;
          const { name: t, validate: n = !1, getter: i = !1 } = e,
            o = r(e, N);
          if (d(this, t))
            throw new TypeError(
              `[VueTypes error]: Type "${t}" already defined`
            );
          const { type: a } = o;
          if (h(a))
            return (
              delete o.type,
              Object.defineProperty(
                this,
                t,
                i
                  ? { get: () => _(t, a, o) }
                  : {
                      value(...e) {
                        const r = _(t, a, o);
                        return (
                          r.validator &&
                            (r.validator = r.validator.bind(r, ...e)),
                          r
                        );
                      },
                    }
              )
            );
          let s;
          return (
            (s = i
              ? {
                  get() {
                    const e = Object.assign({}, o);
                    return n ? j(t, e) : m(t, e);
                  },
                  enumerable: !0,
                }
              : {
                  value(...e) {
                    const r = Object.assign({}, o);
                    let i;
                    return (
                      (i = n ? j(t, r) : m(t, r)),
                      r.validator && (i.validator = r.validator.bind(i, ...e)),
                      i
                    );
                  },
                  enumerable: !0,
                }),
            Object.defineProperty(this, t, s)
          );
        }
      }).defaults = {}),
      (e.sensibleDefaults = void 0),
      (e.config = n),
      (e.custom = $),
      (e.oneOf = w),
      (e.instanceOf = S),
      (e.oneOfType = P),
      (e.arrayOf = x),
      (e.objectOf = q),
      (e.shape = A),
      (e.utils = {
        validate: (e, t) => !0 === O(t, e, !0),
        toType: (e, t, r = !1) => (r ? j(e, t) : m(e, t)),
      }),
      e
    );
  })();
function V(
  e = {
    func: () => {},
    bool: !0,
    string: "",
    number: 0,
    array: () => [],
    object: () => ({}),
    integer: 0,
  }
) {
  var r;
  return (
    ((r = class extends E {
      static get sensibleDefaults() {
        return t({}, this.defaults);
      }
      static set sensibleDefaults(r) {
        this.defaults = !1 !== r ? t({}, !0 !== r ? r : e) : {};
      }
    }).defaults = t({}, e)),
    r
  );
}
V();
const k = V({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  object: void 0,
  integer: void 0,
});
k.extend([
  { name: "style", getter: !0, type: [String, Object], default: void 0 },
  { name: "VNodeChild", getter: !0, type: void 0 },
]);
export { k as p };

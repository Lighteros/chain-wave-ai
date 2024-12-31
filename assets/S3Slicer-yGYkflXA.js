import { p as t } from "./index-BjWU5dL-.js";
import { cy as e } from "./index-DPRREYlk.js";
class r extends Error {
  name = "ArgumentError";
  constructor(t) {
    super(t);
  }
}
function n(t) {
  return Number.isInteger(t) && t >= 0;
}
const a = (t, e = {}) => {
    !(function (t, e = {}) {
      if ("function" != typeof t) throw new r("fetch must be a function");
      if ("object" != typeof e) throw new r("defaults must be an object");
      if (void 0 !== e.retries && !n(e.retries))
        throw new r("retries must be a positive integer");
      if (
        void 0 !== e.retryDelay &&
        !n(e.retryDelay) &&
        "function" != typeof e.retryDelay
      )
        throw new r(
          "retryDelay must be a positive integer or a function returning a positive integer"
        );
      if (
        void 0 !== e.retryOn &&
        !Array.isArray(e.retryOn) &&
        "function" != typeof e.retryOn
      )
        throw new r("retryOn property expects an array or function");
    })(t, e);
    return (
      (e = Object.assign({ retries: 3, retryDelay: 1e3, retryOn: [] }, e)),
      (a, o) => {
        const s = {
          retries: e.retries,
          retryDelay: e.retryDelay,
          retryOn: e.retryOn,
        };
        return (
          (function (t, e) {
            if (t && void 0 !== t.retries) {
              if (!n(t.retries))
                throw new r("retries must be a positive integer");
              e.retries = t.retries;
            }
            if (t && void 0 !== t.retryDelay) {
              if (!n(t.retryDelay) && "function" != typeof t.retryDelay)
                throw new r(
                  "retryDelay must be a positive integer or a function returning a positive integer"
                );
              e.retryDelay = t.retryDelay;
            }
            if (t && t.retryOn) {
              if (!Array.isArray(t.retryOn) && "function" != typeof t.retryOn)
                throw new r("retryOn property expects an array or function");
              e.retryOn = t.retryOn;
            }
          })(o, s),
          new Promise((e, r) => {
            const n = (n) => {
              const l =
                "undefined" != typeof Request && a instanceof Request
                  ? a.clone()
                  : a;
              t(l, o)
                .then((t) => {
                  if (Array.isArray(s.retryOn) && !s.retryOn.includes(t.status))
                    e(t);
                  else if ("function" == typeof s.retryOn)
                    try {
                      return Promise.resolve(s.retryOn(n, null, t))
                        .then((r) => {
                          r ? i(n, null, t) : e(t);
                        })
                        .catch(r);
                    } catch (a) {
                      r(a);
                    }
                  else n < s.retries ? i(n, null, t) : e(t);
                })
                .catch((t) => {
                  if ("AbortError" === t) return r(t);
                  if ("function" == typeof s.retryOn)
                    try {
                      Promise.resolve(s.retryOn(n, t, null))
                        .then((e) => {
                          e ? i(n, t, null) : r(t);
                        })
                        .catch((t) => {
                          r(t);
                        });
                    } catch (e) {
                      r(e);
                    }
                  else n < s.retries ? i(n, t, null) : r(t);
                });
            };
            function i(t, e, r) {
              const a =
                "function" == typeof s.retryDelay
                  ? s.retryDelay(t, e, r)
                  : s.retryDelay;
              setTimeout(() => {
                n(++t);
              }, a);
            }
            n(0);
          })
        );
      }
    );
  },
  o = t(4);
class s {
  constructor(t = 5242880, e) {
    (this.sizeOfPerPart = t), (this.options = e);
  }
  abortSingals = new Map();
  lastUrl = "";
  async execute(t, e, r, n = !0) {
    const a = this.getKey(t);
    e?.onStart?.([], a), this.abortSingals.set(a, new AbortController());
    const s = this.createMetaParts(t),
      { uploadId: i, urls: l } = await this.prepareMultipart(a, s.length);
    if (!i || !l) return null;
    e?.onStart?.(s, a);
    const u = s.map((t, r) => {
        const s = l[r];
        return n
          ? o(() =>
              this.uploadPart(a, i, t, s)
                .then((t) => (e?.onProgress?.(t), t))
                .catch((t) => {
                  throw (this.abort(a), t);
                })
            )
          : this.uploadPart(a, i, t, s)
              .then((t) => (e?.onProgress?.(t), t))
              .catch((t) => {
                throw (this.abort(a), t);
              });
      }),
      y = await Promise.all(u),
      c = await this.completeMultipart(a, i, y),
      p = { Key: a, url: c };
    return c && ((this.lastUrl = c), e?.onSuccess?.(p)), p;
  }
  abort(t) {
    if (t) {
      const e = this.abortSingals.get(t);
      e?.abort(), this.abortSingals.delete(t);
    } else
      this.abortSingals.forEach((t, e) => {
        t.abort("AbortError"), this.abortSingals.delete(e);
      });
  }
  upload = this.execute;
  getKey(t) {
    return `${Date.now()}_${t?.name}`;
  }
  async uploadPart(t, e, r, n) {
    const o =
      !1 === this.options?.retry ? fetch : a(fetch, this.options?.retry);
    return await o(n, {
      method: "put",
      body: r.Body,
      signal: this.abortSingals.get(t)?.signal,
    }).then((t) => ({
      ETag: t.headers.get("ETag") || "",
      PartNumber: r.PartNumber,
    }));
  }
  createMetaParts(t) {
    const e = Math.max(this.sizeOfPerPart, 5242880),
      r = [];
    if (t.size <= e) return r.push({ PartNumber: 1, Body: t }), r;
    const n = t.size,
      a = Math.ceil(n / e);
    for (let o = 0; o < a; o++) {
      const a = o * e,
        s = Math.min(n, a + e),
        i = t.slice(a, s);
      r.push({ PartNumber: o + 1, Body: i });
    }
    return r;
  }
  async prepareMultipart(t, r) {
    return e("/oss/multipart/presigned-url")
      .get({ query: { fileKey: encodeURIComponent(t), partNumber: r } })
      .then((t) => ({ uploadId: t.data?.uploadId, urls: t.data?.urls }));
  }
  async getObjectSignedUrl(t, e) {
    return Promise.resolve(this.getLastUrl());
  }
  async getLastUrl() {
    return this.lastUrl;
  }
  async completeMultipart(t, r, n) {
    return await e("/oss/multipart/upload/complete")
      .post({
        body: {
          fileKey: encodeURIComponent(t),
          uploadId: r,
          partETags: n.map((t) => ({ etag: t.ETag, partNumber: t.PartNumber })),
        },
      })
      .then((t) => t.data);
  }
}
export { s as S };

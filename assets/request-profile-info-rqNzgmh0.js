import {
  f7 as t,
  f8 as e,
  f9 as s,
  fa as r,
  fb as i,
  fc as n,
  fd as u,
  fe as o,
  ff as a,
  fg as c,
  fh as l,
  fi as h,
  bq as d,
  b9 as p,
  fj as f,
  c as y,
  at as v,
  aR as R,
  fk as m,
  fl as b,
  fm as g,
  ea as O,
  cP as Q,
  a as I,
  fn as S,
  fo as C,
  fp as E,
  bh as F,
  cF as U,
} from "./index-DPRREYlk.js";
class M extends t {
  constructor(t, e) {
    super(),
      (this.client = t),
      (this.options = e),
      (this.trackedProps = new Set()),
      (this.selectError = null),
      this.bindMethods(),
      this.setOptions(e);
  }
  bindMethods() {
    (this.remove = this.remove.bind(this)),
      (this.refetch = this.refetch.bind(this));
  }
  onSubscribe() {
    1 === this.listeners.size &&
      (this.currentQuery.addObserver(this),
      P(this.currentQuery, this.options) && this.executeFetch(),
      this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return w(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return w(
      this.currentQuery,
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    (this.listeners = new Set()),
      this.clearStaleTimeout(),
      this.clearRefetchInterval(),
      this.currentQuery.removeObserver(this);
  }
  setOptions(t, s) {
    const r = this.options,
      i = this.currentQuery;
    if (
      ((this.options = this.client.defaultQueryOptions(t)),
      e(r, this.options) ||
        this.client
          .getQueryCache()
          .notify({
            type: "observerOptionsUpdated",
            query: this.currentQuery,
            observer: this,
          }),
      void 0 !== this.options.enabled &&
        "boolean" != typeof this.options.enabled)
    )
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = r.queryKey),
      this.updateQuery();
    const n = this.hasListeners();
    n && T(this.currentQuery, i, this.options, r) && this.executeFetch(),
      this.updateResult(s),
      !n ||
        (this.currentQuery === i &&
          this.options.enabled === r.enabled &&
          this.options.staleTime === r.staleTime) ||
        this.updateStaleTimeout();
    const u = this.computeRefetchInterval();
    !n ||
      (this.currentQuery === i &&
        this.options.enabled === r.enabled &&
        u === this.currentRefetchInterval) ||
      this.updateRefetchInterval(u);
  }
  getOptimisticResult(t) {
    const s = this.client.getQueryCache().build(this.client, t),
      r = this.createResult(s, t);
    return (
      (function (t, s, r) {
        if (r.keepPreviousData) return !1;
        if (void 0 !== r.placeholderData) return s.isPlaceholderData;
        if (!e(t.getCurrentResult(), s)) return !0;
        return !1;
      })(this, r, t) &&
        ((this.currentResult = r),
        (this.currentResultOptions = this.options),
        (this.currentResultState = this.currentQuery.state)),
      r
    );
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(t) {
    const e = {};
    return (
      Object.keys(t).forEach((s) => {
        Object.defineProperty(e, s, {
          configurable: !1,
          enumerable: !0,
          get: () => (this.trackedProps.add(s), t[s]),
        });
      }),
      e
    );
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({ refetchPage: t, ...e } = {}) {
    return this.fetch({ ...e, meta: { refetchPage: t } });
  }
  fetchOptimistic(t) {
    const e = this.client.defaultQueryOptions(t),
      s = this.client.getQueryCache().build(this.client, e);
    return (
      (s.isFetchingOptimistic = !0),
      s.fetch().then(() => this.createResult(s, e))
    );
  }
  fetch(t) {
    var e;
    return this.executeFetch({
      ...t,
      cancelRefetch: null == (e = t.cancelRefetch) || e,
    }).then(() => (this.updateResult(), this.currentResult));
  }
  executeFetch(t) {
    this.updateQuery();
    let e = this.currentQuery.fetch(this.options, t);
    return (null != t && t.throwOnError) || (e = e.catch(s)), e;
  }
  updateStaleTimeout() {
    if (
      (this.clearStaleTimeout(),
      r || this.currentResult.isStale || !i(this.options.staleTime))
    )
      return;
    const t = n(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, t);
  }
  computeRefetchInterval() {
    var t;
    return "function" == typeof this.options.refetchInterval
      ? this.options.refetchInterval(this.currentResult.data, this.currentQuery)
      : null != (t = this.options.refetchInterval) && t;
  }
  updateRefetchInterval(t) {
    this.clearRefetchInterval(),
      (this.currentRefetchInterval = t),
      !r &&
        !1 !== this.options.enabled &&
        i(this.currentRefetchInterval) &&
        0 !== this.currentRefetchInterval &&
        (this.refetchIntervalId = setInterval(() => {
          (this.options.refetchIntervalInBackground || u.isFocused()) &&
            this.executeFetch();
        }, this.currentRefetchInterval));
  }
  updateTimers() {
    this.updateStaleTimeout(),
      this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    this.staleTimeoutId &&
      (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
  }
  clearRefetchInterval() {
    this.refetchIntervalId &&
      (clearInterval(this.refetchIntervalId),
      (this.refetchIntervalId = void 0));
  }
  createResult(t, e) {
    const s = this.currentQuery,
      r = this.options,
      i = this.currentResult,
      n = this.currentResultState,
      u = this.currentResultOptions,
      c = t !== s,
      l = c ? t.state : this.currentQueryInitialState,
      h = c ? this.currentResult : this.previousQueryResult,
      { state: d } = t;
    let p,
      {
        dataUpdatedAt: f,
        error: y,
        errorUpdatedAt: v,
        fetchStatus: R,
        status: m,
      } = d,
      b = !1,
      g = !1;
    if (e._optimisticResults) {
      const i = this.hasListeners(),
        n = !i && P(t, e),
        u = i && T(t, s, e, r);
      (n || u) &&
        ((R = o(t.options.networkMode) ? "fetching" : "paused"),
        f || (m = "loading")),
        "isRestoring" === e._optimisticResults && (R = "idle");
    }
    if (
      e.keepPreviousData &&
      !d.dataUpdatedAt &&
      null != h &&
      h.isSuccess &&
      "error" !== m
    )
      (p = h.data), (f = h.dataUpdatedAt), (m = h.status), (b = !0);
    else if (e.select && void 0 !== d.data)
      if (
        i &&
        d.data === (null == n ? void 0 : n.data) &&
        e.select === this.selectFn
      )
        p = this.selectResult;
      else
        try {
          (this.selectFn = e.select),
            (p = e.select(d.data)),
            (p = a(null == i ? void 0 : i.data, p, e)),
            (this.selectResult = p),
            (this.selectError = null);
        } catch (S) {
          this.selectError = S;
        }
    else p = d.data;
    if (void 0 !== e.placeholderData && void 0 === p && "loading" === m) {
      let t;
      if (
        null != i &&
        i.isPlaceholderData &&
        e.placeholderData === (null == u ? void 0 : u.placeholderData)
      )
        t = i.data;
      else if (
        ((t =
          "function" == typeof e.placeholderData
            ? e.placeholderData()
            : e.placeholderData),
        e.select && void 0 !== t)
      )
        try {
          (t = e.select(t)), (this.selectError = null);
        } catch (S) {
          this.selectError = S;
        }
      void 0 !== t &&
        ((m = "success"), (p = a(null == i ? void 0 : i.data, t, e)), (g = !0));
    }
    this.selectError &&
      ((y = this.selectError),
      (p = this.selectResult),
      (v = Date.now()),
      (m = "error"));
    const O = "fetching" === R,
      Q = "loading" === m,
      I = "error" === m;
    return {
      status: m,
      fetchStatus: R,
      isLoading: Q,
      isSuccess: "success" === m,
      isError: I,
      isInitialLoading: Q && O,
      data: p,
      dataUpdatedAt: f,
      error: y,
      errorUpdatedAt: v,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount:
        d.dataUpdateCount > l.dataUpdateCount ||
        d.errorUpdateCount > l.errorUpdateCount,
      isFetching: O,
      isRefetching: O && !Q,
      isLoadingError: I && 0 === d.dataUpdatedAt,
      isPaused: "paused" === R,
      isPlaceholderData: g,
      isPreviousData: b,
      isRefetchError: I && 0 !== d.dataUpdatedAt,
      isStale: q(t, e),
      refetch: this.refetch,
      remove: this.remove,
    };
  }
  updateResult(t) {
    const s = this.currentResult,
      r = this.createResult(this.currentQuery, this.options);
    if (
      ((this.currentResultState = this.currentQuery.state),
      (this.currentResultOptions = this.options),
      e(r, s))
    )
      return;
    this.currentResult = r;
    const i = { cache: !0 };
    !1 !== (null == t ? void 0 : t.listeners) &&
      (() => {
        if (!s) return !0;
        const { notifyOnChangeProps: t } = this.options,
          e = "function" == typeof t ? t() : t;
        if ("all" === e || (!e && !this.trackedProps.size)) return !0;
        const r = new Set(null != e ? e : this.trackedProps);
        return (
          this.options.useErrorBoundary && r.add("error"),
          Object.keys(this.currentResult).some((t) => {
            const e = t;
            return this.currentResult[e] !== s[e] && r.has(e);
          })
        );
      })() &&
      (i.listeners = !0),
      this.notify({ ...i, ...t });
  }
  updateQuery() {
    const t = this.client.getQueryCache().build(this.client, this.options);
    if (t === this.currentQuery) return;
    const e = this.currentQuery;
    (this.currentQuery = t),
      (this.currentQueryInitialState = t.state),
      (this.previousQueryResult = this.currentResult),
      this.hasListeners() &&
        (null == e || e.removeObserver(this), t.addObserver(this));
  }
  onQueryUpdate(t) {
    const e = {};
    "success" === t.type
      ? (e.onSuccess = !t.manual)
      : "error" !== t.type || c(t.error) || (e.onError = !0),
      this.updateResult(e),
      this.hasListeners() && this.updateTimers();
  }
  notify(t) {
    l.batch(() => {
      var e, s, r, i;
      if (t.onSuccess)
        null == (e = (s = this.options).onSuccess) ||
          e.call(s, this.currentResult.data),
          null == (r = (i = this.options).onSettled) ||
            r.call(i, this.currentResult.data, null);
      else if (t.onError) {
        var n, u, o, a;
        null == (n = (u = this.options).onError) ||
          n.call(u, this.currentResult.error),
          null == (o = (a = this.options).onSettled) ||
            o.call(a, void 0, this.currentResult.error);
      }
      t.listeners &&
        this.listeners.forEach(({ listener: t }) => {
          t(this.currentResult);
        }),
        t.cache &&
          this.client
            .getQueryCache()
            .notify({
              query: this.currentQuery,
              type: "observerResultsUpdated",
            });
    });
  }
}
function P(t, e) {
  return (
    (function (t, e) {
      return !(
        !1 === e.enabled ||
        t.state.dataUpdatedAt ||
        ("error" === t.state.status && !1 === e.retryOnMount)
      );
    })(t, e) ||
    (t.state.dataUpdatedAt > 0 && w(t, e, e.refetchOnMount))
  );
}
function w(t, e, s) {
  if (!1 !== e.enabled) {
    const r = "function" == typeof s ? s(t) : s;
    return "always" === r || (!1 !== r && q(t, e));
  }
  return !1;
}
function T(t, e, s, r) {
  return (
    !1 !== s.enabled &&
    (t !== e || !1 === r.enabled) &&
    (!s.suspense || "error" !== t.state.status) &&
    q(t, s)
  );
}
function q(t, e) {
  return t.isStaleByTime(e.staleTime);
}
class x extends t {
  constructor(t, e) {
    super(),
      (this.client = t),
      this.setOptions(e),
      this.bindMethods(),
      this.updateResult();
  }
  bindMethods() {
    (this.mutate = this.mutate.bind(this)),
      (this.reset = this.reset.bind(this));
  }
  setOptions(t) {
    var s;
    const r = this.options;
    (this.options = this.client.defaultMutationOptions(t)),
      e(r, this.options) ||
        this.client
          .getMutationCache()
          .notify({
            type: "observerOptionsUpdated",
            mutation: this.currentMutation,
            observer: this,
          }),
      null == (s = this.currentMutation) || s.setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() ||
      null == (t = this.currentMutation) ||
      t.removeObserver(this);
  }
  onMutationUpdate(t) {
    this.updateResult();
    const e = { listeners: !0 };
    "success" === t.type
      ? (e.onSuccess = !0)
      : "error" === t.type && (e.onError = !0),
      this.notify(e);
  }
  getCurrentResult() {
    return this.currentResult;
  }
  reset() {
    (this.currentMutation = void 0),
      this.updateResult(),
      this.notify({ listeners: !0 });
  }
  mutate(t, e) {
    return (
      (this.mutateOptions = e),
      this.currentMutation && this.currentMutation.removeObserver(this),
      (this.currentMutation = this.client
        .getMutationCache()
        .build(this.client, {
          ...this.options,
          variables: void 0 !== t ? t : this.options.variables,
        })),
      this.currentMutation.addObserver(this),
      this.currentMutation.execute()
    );
  }
  updateResult() {
    const t = this.currentMutation ? this.currentMutation.state : h(),
      e = {
        ...t,
        isLoading: "loading" === t.status,
        isSuccess: "success" === t.status,
        isError: "error" === t.status,
        isIdle: "idle" === t.status,
        mutate: this.mutate,
        reset: this.reset,
      };
    this.currentResult = e;
  }
  notify(t) {
    l.batch(() => {
      var e, s, r, i;
      if (this.mutateOptions && this.hasListeners())
        if (t.onSuccess)
          null == (e = (s = this.mutateOptions).onSuccess) ||
            e.call(
              s,
              this.currentResult.data,
              this.currentResult.variables,
              this.currentResult.context
            ),
            null == (r = (i = this.mutateOptions).onSettled) ||
              r.call(
                i,
                this.currentResult.data,
                null,
                this.currentResult.variables,
                this.currentResult.context
              );
        else if (t.onError) {
          var n, u, o, a;
          null == (n = (u = this.mutateOptions).onError) ||
            n.call(
              u,
              this.currentResult.error,
              this.currentResult.variables,
              this.currentResult.context
            ),
            null == (o = (a = this.mutateOptions).onSettled) ||
              o.call(
                a,
                void 0,
                this.currentResult.error,
                this.currentResult.variables,
                this.currentResult.context
              );
        }
      t.listeners &&
        this.listeners.forEach(({ listener: t }) => {
          t(this.currentResult);
        });
    });
  }
}
function D(t = "") {
  const e = f(t),
    s = d(e, null);
  if (!s) {
    var r;
    if (!(null == (r = p()) ? void 0 : r.proxy))
      throw new Error(
        "vue-query hooks can only be used inside setup() function."
      );
    throw new Error(
      "No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library."
    );
  }
  return s;
}
function k(t, e, s = {}, r = {}) {
  var i;
  const n = y(() =>
      (function (t, e = {}, s = {}) {
        const r = I(t),
          i = I(e),
          n = I(s);
        let u = r;
        u = S(r)
          ? "function" == typeof i
            ? { ...n, queryKey: r, queryFn: i }
            : { ...i, queryKey: r }
          : r;
        const o = C(u);
        "function" == typeof o.enabled && (o.enabled = o.enabled());
        return o;
      })(e, s, r)
    ),
    u = null != (i = n.value.queryClient) ? i : D(n.value.queryClientKey),
    o = y(() => {
      const t = u.defaultQueryOptions(n.value);
      return (
        (t._optimisticResults = u.isRestoring.value
          ? "isRestoring"
          : "optimistic"),
        t
      );
    }),
    a = new t(u, o.value),
    c = v(a.getCurrentResult());
  let l = () => {};
  R(
    u.isRestoring,
    (t) => {
      t ||
        (l(),
        (l = a.subscribe((t) => {
          m(c, t);
        })));
    },
    { immediate: !0 }
  );
  const h = () => {
    a.setOptions(o.value), m(c, a.getCurrentResult());
  };
  R(o, h),
    b(() => {
      l();
    });
  R(
    () => c.error,
    (t) => {
      if (
        c.isError &&
        !c.isFetching &&
        g(o.value.useErrorBoundary, [t, a.getCurrentQuery()])
      )
        throw t;
    }
  );
  const d = O(Q(c));
  for (const p in c) "function" == typeof c[p] && (d[p] = c[p]);
  return (
    (d.suspense = () =>
      new Promise((t, e) => {
        let s = () => {};
        const r = () => {
          if (!1 !== o.value.enabled) {
            const r = a.getOptimisticResult(o.value);
            r.isStale
              ? (s(), a.fetchOptimistic(o.value).then(t, e))
              : (s(), t(r));
          }
        };
        r(), (s = R(o, r));
      })),
    (d.refetch = (...t) => (h(), c.refetch(...t))),
    d
  );
}
function A(t, e, s) {
  var r;
  const i = y(() =>
      (function (t, e, s) {
        const r = I(t),
          i = I(e);
        let n = r;
        if (E(r))
          if ("function" == typeof i) {
            n = { ...I(s), mutationKey: r, mutationFn: i };
          } else n = { ...i, mutationKey: r };
        "function" == typeof r && (n = { ...i, mutationFn: r });
        return C(n);
      })(t, e, s)
    ),
    n = null != (r = i.value.queryClient) ? r : D(i.value.queryClientKey),
    u = new x(n, n.defaultMutationOptions(i.value)),
    o = v(u.getCurrentResult()),
    a = u.subscribe((t) => {
      m(o, t);
    });
  R(i, () => {
    u.setOptions(n.defaultMutationOptions(i.value));
  }),
    b(() => {
      a();
    });
  const c = O(Q(o));
  return (
    R(
      () => o.error,
      (t) => {
        if (t && g(i.value.useErrorBoundary, [t])) throw t;
      }
    ),
    {
      ...c,
      mutate: (t, e) => {
        u.mutate(t, e).catch(() => {});
      },
      mutateAsync: o.mutate,
      reset: o.reset,
    }
  );
}
function L() {
  const t = F(),
    e = () => ({
      id: "",
      name: "",
      companyName: "",
      phoneNumber: "",
      location: "",
      gpuDescription: "",
      uptimeGuarantee: "",
    }),
    s = y(() => String(t.getUserInfo.id)),
    r = k(
      M,
      {
        queryKey: ["get/supplier", s],
        refetchOnWindowFocus: !1,
        refetchOnMount: !0,
        queryFn: () =>
          U("/supplier")
            .get({ query: { userId: s.value } })
            .then(
              (t) =>
                t.data || {
                  id: "",
                  name: "",
                  companyName: "",
                  phoneNumber: "",
                  location: "",
                  gpuDescription: "",
                  uptimeGuarantee: "",
                }
            ),
      },
      i,
      n
    );
  var i, n;
  const u = A({
      mutationFn: (t) => U("/supplier").post({ body: t }),
      onSettled: () => r.refetch(),
    }),
    o = A({
      mutationFn: (t) => U("/supplier").delete({ query: { id: t } }),
      onSettled: () => r.refetch(),
    }),
    a = A({
      mutationFn: (t) => U("/supplier").put({ body: t }),
      onSettled: () => r.refetch(),
    });
  return {
    defineProfile: e,
    createProfile: u,
    deleteProfile: o,
    updateProfile: a,
    queryProfile: r,
  };
}
export { L as u };

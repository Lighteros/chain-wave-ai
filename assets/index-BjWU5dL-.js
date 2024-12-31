class e {
  value;
  next;
  constructor(e) {
    this.value = e;
  }
}
class t {
  #e;
  #t;
  #i;
  constructor() {
    this.clear();
  }
  enqueue(t) {
    const i = new e(t);
    this.#e
      ? ((this.#t.next = i), (this.#t = i))
      : ((this.#e = i), (this.#t = i)),
      this.#i++;
  }
  dequeue() {
    const e = this.#e;
    if (e) return (this.#e = this.#e.next), this.#i--, e.value;
  }
  peek() {
    if (this.#e) return this.#e.value;
  }
  clear() {
    (this.#e = void 0), (this.#t = void 0), (this.#i = 0);
  }
  get size() {
    return this.#i;
  }
  *[Symbol.iterator]() {
    let e = this.#e;
    for (; e; ) yield e.value, (e = e.next);
  }
}
const i = { bind: (e, t, i) => e.bind(i) };
function s(e) {
  if ((!Number.isInteger(e) && e !== Number.POSITIVE_INFINITY) || !(e > 0))
    throw new TypeError("Expected `concurrency` to be a number from 1 and up");
  const s = new t();
  let n = 0;
  const a = async (e, t, i) => {
      n++;
      const a = (async () => e(...i))();
      t(a);
      try {
        await a;
      } catch {}
      n--, s.size > 0 && s.dequeue()();
    },
    r = (t, ...r) =>
      new Promise((u) => {
        ((t, r, u) => {
          s.enqueue(i.bind(a.bind(void 0, t, r, u))),
            (async () => {
              await Promise.resolve(), n < e && s.size > 0 && s.dequeue()();
            })();
        })(t, u, r);
      });
  return (
    Object.defineProperties(r, {
      activeCount: { get: () => n },
      pendingCount: { get: () => s.size },
      clearQueue: {
        value() {
          s.clear();
        },
      },
    }),
    r
  );
}
export { s as p };

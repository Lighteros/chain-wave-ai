function e(e, t = "*") {
  if (!e) return "";
  const n = (e) => Math.ceil(e / 2),
    r = n(e.length),
    c = e.slice(0, n(r)),
    i = e.slice(-n(r));
  return c + t.repeat(r) + i;
}
export { e as m };

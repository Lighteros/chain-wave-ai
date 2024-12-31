function e(e) {
  return 1 === e.length ? "'\\''" : `'"${e}"'`;
}
const t = /\0+/g,
  n = /^[\w,:=./\-]+$/,
  r = /'+/g;
function u(u, c) {
  if (null == u) return c && c.empty ? c.empty : "''";
  const l = String(u).replace(t, ""),
    g = n.exec(l);
  if (g && g[0].length === l.length) {
    const e = c && c.gratuitous ? c.gratuitous : "";
    return e + l + e;
  }
  return `'${l.replace(r, e)}'`.replace(/^''/, "").replace(/''$/, "");
}
export { u as s };

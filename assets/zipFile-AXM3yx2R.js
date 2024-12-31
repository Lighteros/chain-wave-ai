import { J as e, j as n } from "./jszip.min-C_PVdnoP.js";
async function t(e, t) {
  const { files: a } = await n.loadAsync(e),
    i = "string" == typeof t ? (e) => e.includes(t) : t,
    r = Object.entries(a).find(([e]) => i(e))?.[1];
  return r ? r.async("text") : null;
}
const a = async function (n, t) {
    const a = new e();
    for await (const e of Array.from(n))
      await e.arrayBuffer().then((n) => a.file(e.webkitRelativePath, n));
    const i = await a.generateAsync({ type: "blob" }, t);
    return new File([i], "files.zip", { type: "application/zip" });
  },
  i = async function (n, t) {
    const a = new e();
    for (const e of Array.isArray(n) ? n : [n])
      await e.file.arrayBuffer().then((n) => a.file(e.file.name, n));
    return new Promise(async (e) => {
      await a.generateAsync({ type: "blob" }).then((t) => {
        const a = new File([t], `${n.file.name}.zip`, {
          type: "application/zip",
        });
        e(a);
      });
    });
  };
export { i as m, t as r, a as z };

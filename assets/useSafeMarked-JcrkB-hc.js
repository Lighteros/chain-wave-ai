import { M as e, H as r, p as a } from "./github-dark-dimmed-CPsh559a.js";
function s() {
  const s = new e({
    highlight(e, a) {
      if (a && r.getLanguage(a))
        try {
          return `<pre><code class="hljs rounded-md">${
            r.highlight(e, { language: a, ignoreIllegals: !0 }).value
          }</code></pre>`;
        } catch (t) {}
      return `<pre><code class="hljs rounded-md">${s.utils.escapeHtml(
        e
      )}</code></pre>`;
    },
  });
  return (e) => a.sanitize(s.render(e));
}
export { s as u };

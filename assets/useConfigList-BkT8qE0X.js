import { r as t, bh as n, c as a, b2 as e } from "./index-DPRREYlk.js";
import { o as s } from "./orderBy-B1G-W8_4.js";
const i = t([]),
  o = n();
function c(n) {
  const c = a(() => n?.value || ""),
    r = t(c.value || null),
    u = a(() => i.value?.find((t) => t.assistant_id === r.value) || null),
    l = a(() => s(i.value, ["updated_at"], ["desc"]));
  async function p() {
    const t = fetch(
        `/aiagent/assistants/get_assistant_list/${o.getUserInfo.account}`,
        { headers: { Accept: "application/json", Authorization: o.getToken } }
      )
        .then((t) => t.json())
        .then((t) =>
          (Array.isArray(t) ? t : []).map((t) => ({
            ...t,
            config: JSON.parse(t.config),
            mine: !0,
          }))
        )
        .catch(() => []),
      [n] = await Promise.all([t]);
    if (((i.value = [...n]), c.value)) {
      i.value.find((t) => t.assistant_id === c.value) && f(c.value);
    }
  }
  function f(t) {
    r.value = t;
  }
  return (
    e(async () => p()),
    {
      configs: l,
      loadConfigList: p,
      currentConfig: u,
      saveConfig: async function (t, n, a, e, s, c) {
        const [r] = await Promise.all([
          fetch(`/aiagent/assistants/${c}`, {
            method: "PUT",
            body: JSON.stringify({
              name: t,
              config: a,
              isFileUpload: n,
              public: s,
              opengpts_user_id: o.getUserInfo.account,
            }),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: o.getToken,
            },
          }).then((t) => t.json()),
        ]);
        return (
          i.value.push({ ...r, mine: !0 }), f(r.assistant_id), r.assistant_id
        );
      },
      enterConfig: f,
      deleteAssistant: async function (t) {
        return fetch(
          `/aiagent/assistants/delete/${t}/${o.getUserInfo.account}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: o.getToken,
            },
          }
        ).then(p);
      },
    }
  );
}
export { c as u };

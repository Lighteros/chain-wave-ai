import { r as t, c as a, bh as e, b2 as n } from "./index-DPRREYlk.js";
import { o } from "./orderBy-B1G-W8_4.js";
const s = t([]);
function r() {
  const r = t(null),
    c = a(() => s.value.find((t) => t.thread_id === r.value) || null),
    i = a(() => o(s.value, ["updated_at"], ["desc"])),
    u = e();
  async function h(t, a, e = crypto.randomUUID()) {
    const n = await fetch(`/aiagent/threads/${e}`, {
      method: "PUT",
      body: JSON.stringify({
        assistant_id: a,
        name: t,
        opengpts_user_id: u.getUserInfo.account,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: u.getToken,
      },
    }).then((t) => t.json());
    return s.value.push(n), d(n.thread_id), n;
  }
  function d(t) {
    r.value = t;
  }
  async function p() {
    const t = await fetch(
      `/aiagent/threads/get_thread_list/${u.getUserInfo.account}`,
      { headers: { Accept: "application/json", Authorization: u.getToken } }
    )
      .then((t) => t.json())
      .catch((t) => []);
    s.value = Array.isArray(t) ? t : [];
  }
  return (
    n(async () => {
      p();
    }),
    {
      chats: i,
      currentChat: c,
      createChat: h,
      updateChat: h,
      enterChat: d,
      loadChatList: p,
    }
  );
}
export { r as u };

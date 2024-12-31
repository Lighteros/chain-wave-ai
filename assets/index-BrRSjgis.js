import { _ as s } from "./PageWrapper-BPMfS97v.js";
import { u as a } from "./useChatList-Ch8PximY.js";
import {
  as as t,
  bR as r,
  b2 as e,
  au as o,
  bo as p,
  ax as i,
  bl as m,
  aw as n,
  by as u,
} from "./index-DPRREYlk.js";
import { S as d } from "./index-B0yuFjoJ.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BDMVSGUf.js";
import "./useBreakpoint-vSrZKufz.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./orderBy-B1G-W8_4.js";
import "./_baseOrderBy-B_MN0TyA.js";
import "./_baseEach-BDY_Tvly.js";
const l = { class: "max-w-140 mx-auto mt-20" },
  _ = t({
    __name: "index",
    setup(t) {
      const _ = r(),
        { currentChat: j } = a();
      return (
        e(() => {
          j.value
            ? _.push({
                name: u.AI_AGENT_ON_CHAT,
                params: {
                  assistantId: j.value.assistant_id,
                  threadId: j.value.thread_id,
                },
              })
            : _.push({ name: u.AI_AGENT_CREATE_BOT });
        }),
        (a, t) => {
          const r = d,
            e = s;
          return (
            o(),
            p(
              e,
              { dense: "", "content-full-height": "", class: "bg-white" },
              {
                default: i(() => [
                  m("div", l, [
                    n(r, {
                      paragraph: { rows: 10 },
                      active: "",
                      loading: "",
                      avatar: "",
                    }),
                  ]),
                ]),
                _: 1,
              }
            )
          );
        }
      );
    },
  });
export { _ as default };

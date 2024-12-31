import {
  as as t,
  r as e,
  bw as s,
  au as i,
  bo as a,
  ax as o,
  bl as r,
  aw as n,
  a as p,
  by as d,
  aA as l,
  cE as m,
  az as u,
  bk as c,
} from "./index-DPRREYlk.js";
import { u as _ } from "./useConfigList-BkT8qE0X.js";
import { _ as f } from "./PopConfirmButton.vue_vue_type_script_lang-BxbUu1Is.js";
import { P as j } from "./index-Dgmkw5o7.js";
import { u as g } from "./useChatList-Ch8PximY.js";
import { a as x, _ as h } from "./index-Cl2HaiV4.js";
import "./orderBy-B1G-W8_4.js";
import "./_baseOrderBy-B_MN0TyA.js";
import "./_baseEach-BDY_Tvly.js";
import "./BasicButton.vue_vue_type_script_setup_true_lang-EzE3DJdj.js";
import "./useAttrs-CpoV-7Xq.js";
import "./tsxHelper-DjrCDYtL.js";
import "./PageWrapper-BPMfS97v.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BDMVSGUf.js";
import "./useBreakpoint-vSrZKufz.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./index-CacitUCz.js";
import "./LeftOutlined-rFvNtfcP.js";
import "./index-BPauqaGF.js";
import "./List-D10KDyaY.js";
import "./isMobile-VPrdNIIw.js";
import "./CheckOutlined-BvF8M63J.js";
import "./zh_CN-CAyhejr6.js";
import "./index-Ty6iIrKu.js";
import "./index-jlJCtu5U.js";
import "./debounce-CUtJ7ZQO.js";
import "./index-DGJYrvBD.js";
import "./Checkbox-KylR2T3k.js";
import "./index-yjwfeS3_.js";
import "./RadioButton-BTaousOD.js";
import "./scrollTo-Dpgtz1Pq.js";
const y = { class: "app-content p4" },
  w = { class: "flex items-center gap-2" },
  b = c(
    t({
      __name: "all-agents",
      setup(t) {
        const { loadChatList: c } = g(),
          { configs: b, deleteAssistant: A } = _(),
          C = e(!1);
        return (t, e) => {
          const _ = x,
            g = u,
            v = s("router-link"),
            T = h;
          return (
            i(),
            a(
              p(j),
              {
                "content-full-height": "",
                "auto-title": "",
                "fixed-height": "",
                onBack:
                  e[0] ||
                  (e[0] = (e) =>
                    p(m)(void 0, {
                      name: ("routerNames" in t ? t.routerNames : p(d))
                        .AI_AGENT_INDEX,
                    })),
              },
              {
                default: o(() => [
                  r("div", y, [
                    n(
                      T,
                      {
                        scroll: { y: "calc(100vh-100px)" },
                        "data-source": p(b),
                        loading: p(C),
                        pagination: !0,
                      },
                      {
                        default: o(() => [
                          n(_, {
                            fixed: "left",
                            width: 100,
                            title: "Name",
                            "data-index": "name",
                          }),
                          n(_, {
                            width: 100,
                            title: "Type",
                            "data-index": ["config", "configurable", "type"],
                          }),
                          n(_, {
                            title: "LLM",
                            width: 150,
                            "data-index": [
                              "config",
                              "configurable",
                              "type==agent/agent_type",
                            ],
                          }),
                          n(_, {
                            title: "System Message",
                            width: 200,
                            ellipsis: { showTitle: !0 },
                            "data-index": [
                              "config",
                              "configurable",
                              "type==agent/system_message",
                            ],
                          }),
                          n(_, {
                            width: 200,
                            title: "Tools",
                            "data-index": [
                              "config",
                              "configurable",
                              "type==agent/tools",
                            ],
                          }),
                          n(_, {
                            width: 200,
                            ellipsis: { showTitle: !0 },
                            title: "Updated At",
                            "data-index": "updated_at",
                          }),
                          n(
                            _,
                            { width: 250, title: "Actions", fixed: "right" },
                            {
                              default: o(({ record: e }) => [
                                r("span", w, [
                                  n(
                                    v,
                                    {
                                      to: {
                                        name: ("routerNames" in t
                                          ? t.routerNames
                                          : p(d)
                                        ).AI_AGENT_CREATE_CHAT,
                                        params: { assistantId: e.assistant_id },
                                      },
                                    },
                                    {
                                      default: o(() => [
                                        n(
                                          g,
                                          { size: "small" },
                                          {
                                            default: o(() => [l("New Chat")]),
                                            _: 1,
                                          }
                                        ),
                                      ]),
                                      _: 2,
                                    },
                                    1032,
                                    ["to"]
                                  ),
                                  n(
                                    f,
                                    {
                                      title:
                                        "Are you sure you want to delete this assistant?",
                                      size: "small",
                                      onConfirm: (t) =>
                                        (async function (t) {
                                          (C.value = !0),
                                            await A(t),
                                            (C.value = !1),
                                            c();
                                        })(e.assistant_id),
                                    },
                                    { default: o(() => [l(" Delete ")]), _: 2 },
                                    1032,
                                    ["onConfirm"]
                                  ),
                                ]),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["data-source", "loading"]
                    ),
                  ]),
                ]),
                _: 1,
              }
            )
          );
        };
      },
    }),
    [["__scopeId", "data-v-e89885ed"]]
  );
export { b as default };

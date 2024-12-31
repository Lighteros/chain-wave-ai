import { E as e } from "./Endpoint-DTdkXGrW.js";
import {
  T as n,
  I as p,
  a,
  b as i,
  c as o,
  d as t,
  e as s,
  f as T,
  A as r,
  g as y,
} from "./index-CHnsextf.js";
import {
  as as d,
  bT as l,
  c as u,
  au as E,
  av as I,
  a as A,
  bo as c,
  bU as k,
  bE as O,
  bV as M,
} from "./index-DPRREYlk.js";
const m = { class: "border border-solid border-primary/30" },
  _ = d({
    __name: "AnyToAny",
    props: {
      endpoint: {},
      height: {},
      hideApiType: { type: Boolean },
      readonly: { type: Boolean },
      defaultMessageList: {},
      apiKey: {},
    },
    setup(d) {
      const _ = d;
      l("isLoginRequired", !0);
      const b = u(() => {
        try {
          return JSON.parse(_.endpoint.modelConfig).endpoint_api_type;
        } catch {
          return "";
        }
      });
      return (d, l) => {
        const u = M;
        return (
          E(),
          I("div", m, [
            d.endpoint.apiType === A(e).CHAT_COMPLETIONS ||
            d.endpoint.apiType === A(e).COMPLETIONS
              ? (E(), c(A(n), k(O({ key: 0 }, { ..._ })), null, 16))
              : d.endpoint.apiType === A(e).IMAGESTYLIZATION
              ? (E(), c(A(p), k(O({ key: 1 }, { ..._ })), null, 16))
              : d.endpoint.apiType === A(e).TEXT2IMAGE
              ? (E(), c(A(a), k(O({ key: 2 }, { ..._ })), null, 16))
              : d.endpoint.apiType === A(e).IMAGE2TEXT
              ? (E(), c(A(i), k(O({ key: 3 }, { ..._ })), null, 16))
              : d.endpoint.apiType === A(e).TEXT_EMBEDDING
              ? (E(), c(A(o), k(O({ key: 4 }, { ..._ })), null, 16))
              : d.endpoint.apiType === A(e).TEXT2SQL_LLM_OPENAI_COMPLETIONS
              ? (E(), c(A(t), k(O({ key: 5 }, { ..._ })), null, 16))
              : d.endpoint.apiType === A(e).TEXT2AUDIO
              ? (E(), c(A(s), k(O({ key: 6 }, { ..._ })), null, 16))
              : d.endpoint.apiType === A(e).IMAGE2VIDEO
              ? (E(), c(A(T), k(O({ key: 7 }, { ..._ })), null, 16))
              : d.endpoint.apiType === A(e).AUDIO2TEXT || "audio2text" === A(b)
              ? (E(), c(A(r), k(O({ key: 8 }, { ..._ })), null, 16))
              : d.endpoint.apiType === A(e).IMAGE23D
              ? (E(), c(A(y), k(O({ key: 9 }, { ..._ })), null, 16))
              : (E(),
                c(u, {
                  key: 10,
                  description:
                    "The current endpoint type does not support online presentations. Try making a call using the API instead.",
                })),
          ])
        );
      };
    },
  });
export { _ };

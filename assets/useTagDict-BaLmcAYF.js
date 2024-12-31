import { bH as e, bI as t, bJ as a } from "./index-DPRREYlk.js";
const g = e(() => a("/api/v1/tag/list").get({}), {
    getKey: () => t().getToken,
  }),
  s = e(() => a("/api/v1/tag/queryModelTagList").get({}), {
    getKey: () => t().getToken,
  }),
  i = e(() => a("/api/v1/tag/queryExistingModelTagList").get({}), {
    getKey: () => t().getToken,
  });
export { i as a, s as b, g as u };

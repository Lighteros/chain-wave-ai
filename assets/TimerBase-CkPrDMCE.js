import { bz as t } from "./index-DPRREYlk.js";
class e {
  completed_at = new Date().toUTCString();
  created_at = new Date().toUTCString();
  complete() {
    this.completed_at = new Date().toUTCString();
  }
  get diff() {
    return t(this.completed_at).diff(t(this.created_at), "s").toFixed(1);
  }
}
export { e as T };

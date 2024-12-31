import { T as s } from "./TimerBase-CkPrDMCE.js";
class e {
  prompt = "";
  height = 512;
  width = 512;
  steps = 4;
  guidance_scale = 0;
  response_format = "b64_json";
}
class r extends s {
  constructor(s) {
    super(), (this.version = s);
  }
  role = "user";
  id;
  error;
  input = new e();
  output;
  status;
  model;
}
export { e as I, r as a };

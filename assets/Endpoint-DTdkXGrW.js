import { c as e } from "./create-enum-converter-ClJbjM_p.js";
class t {
  inputVideoPrice;
  outputVideoPrice;
  inputAudioPrice;
  outputAudioPrice;
  inputTextPrice;
  outputTextPrice;
  calculateFormula;
  imagePrice;
  inputPrice;
  outputPrice;
  requestPrice;
}
var T = ((e) => (
  (e[(e.GENERAL = 0)] = "GENERAL"),
  (e[(e.CHAT_COMPLETIONS = 1)] = "CHAT_COMPLETIONS"),
  (e[(e.COMPLETIONS = 2)] = "COMPLETIONS"),
  (e[(e.TEXT2IMAGE = 3)] = "TEXT2IMAGE"),
  (e[(e.TEXT2VIDEO = 4)] = "TEXT2VIDEO"),
  (e[(e.TEXT2AUDIO = 5)] = "TEXT2AUDIO"),
  (e[(e.TEXT23D = 6)] = "TEXT23D"),
  (e[(e.IMAGE2IMAGE = 7)] = "IMAGE2IMAGE"),
  (e[(e.IMAGE2AUDIO = 8)] = "IMAGE2AUDIO"),
  (e[(e.IMAGE2VIDEO = 9)] = "IMAGE2VIDEO"),
  (e[(e.IMAGE23D = 10)] = "IMAGE23D"),
  (e[(e.IMAGESTYLIZATION = 11)] = "IMAGESTYLIZATION"),
  (e[(e.IMAGE2TEXT = 12)] = "IMAGE2TEXT"),
  (e[(e.TEXT_EMBEDDING = 13)] = "TEXT_EMBEDDING"),
  (e[(e.TEXT2SQL_LLM_OPENAI_COMPLETIONS = 14)] =
    "TEXT2SQL_LLM_OPENAI_COMPLETIONS"),
  (e[(e.AUDIO2TEXT = 15)] = "AUDIO2TEXT"),
  e
))(T || {});
const i = e({
  0: "General",
  2: "Text to Text LLM_OPENAI_COMPLETIONS",
  1: "Text to Text LLM_OPENAI_CHAT_COMPLETIONS",
  3: "Text to Image",
  5: "Text to Audio",
  7: "Image to Image",
  8: "Image to Audio",
  9: "Image to Video",
  10: "Image to 3D",
  11: "Image Stylization",
  12: "Image to Text",
  13: "Text Embedding",
  14: "SQL Coder",
  15: "Audio to Text",
});
class o {
  id;
  realEndpointId;
  realEndpointName;
  endpointName = "";
  modelPrice = new t();
  modelId;
  modelName = "";
  modelVersion = "";
  resourceType = "";
  status = "";
  edgeId = "";
  computerResource = "";
  computerResourceList = [];
  deleted;
  createTime = "";
  updateBy = "";
  updateTime = "";
  token = "";
  replicas;
  onlineReplicas;
  requests;
  replicasStr;
  min;
  max;
  endpointLogs = [];
  endpointMonitoring;
  latency;
  inputJson;
  outputJson;
  requestUrl;
  modelConfig;
  qps;
  suffixModelVersion;
  prefixModelVersion;
  inferenceEngine;
  isLLM;
  logFullUrl;
  latestPaymentTime;
  gpuIdList;
  gpuDeployIdList;
  amount;
  modelTaskId;
  modelTaskName;
  apiType = 1;
  paymentType;
  paymentTypeName;
  deploymentType;
  gpuType;
  gpuResourceType;
  gpuNumber;
  gpuNumberTotal;
  gpuNumberOfReplica;
  replicasDesired;
  autoscaling;
  replicaIds;
  targetQueriesPerReplica;
  aggregationWindowSizeSeconds;
  scaleDownDelaySeconds;
  updating;
  marketplaceType;
  deployEnded;
  deploymentTypeName;
  visibility;
  visibilityName;
  usedByOthers;
  publicCloudDeployment;
  runId;
  serverlessContainer;
  constructor(e) {
    this.apiType = e || 1;
  }
}
var E = ((e) => (
  (e[(e.CREATE = 0)] = "CREATE"),
  (e[(e.UPDATE = 1)] = "UPDATE"),
  (e[(e.AUTO_SCALING = 2)] = "AUTO_SCALING"),
  (e[(e.RENAME = 3)] = "RENAME"),
  (e[(e.TERMINATE = 4)] = "TERMINATE"),
  (e[(e.ROLLBACK = 5)] = "ROLLBACK"),
  e
))(E || {});
export { E as C, T as E, o as I, i as e };

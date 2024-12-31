class e {
  id;
  fileDescribe = "";
  fileName = "";
  fileTree = "";
  fileUrl = "";
  isFolder;
  parentId;
  type;
  updateBy = "";
}
class i {
  accessPermission = "";
  applicationDeveloperVoList = [];
  applicationName = "";
  avatar = "";
  createTime = "";
  dataId = 0;
  description = "";
  favorites = 0;
  fileVoList = [];
  githubLink = "";
  id = 0;
  isFavorite = 0;
  jobSubType = 0;
  jobType = 0;
  modelId = 0;
  owner = "";
  parameter = {};
  pictureUrl = "";
  platformId = -1;
  privateLocalData = "";
  tagVoList = [];
  updateBy = "";
  updateTime = "";
  users = 0;
  version = "";
  views = 0;
  usedByOthers = !1;
  openSource = !1;
  requests = "0";
}
class s {
  constructor(e, i, s = "") {
    (this.name = e),
      (this.range = i),
      (this.description = s),
      (this.step = this.range[2] || 1),
      (this.value = this.range[3]);
  }
  value = 0;
  step = 1;
}
class t {
  commitType = "";
  createTime = "";
  description = "";
  fileName = "";
  githubLink = "";
  id;
  isFromOpen = "";
  isInit = !1;
  latestModelVersion = "";
  modelName = "";
  modelNetUrl = "";
  modelType = "";
  modelUrl = "";
  modelVersion = "";
  owner = "";
  parameters = "";
  pictureUrl = "";
  prefixModelVersion = "";
  suffixModelVersion = "";
  tagList = [];
  updateTime = "";
  usedByOthers = !1;
  fileVoList = [];
  isFromHF = !1;
  huggingfacePath = "";
}
export { t as I, s as a, e as b, i as c };

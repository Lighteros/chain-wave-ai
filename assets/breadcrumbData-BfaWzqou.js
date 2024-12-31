import { bS as e } from "./index-DPRREYlk.js";
const t = e({
  id: "breadcrumbStore",
  state: () => ({
    projectName: "",
    groupName: "",
    runName: "",
    reportName: "",
  }),
  getters: {
    getProjectName() {
      return this.projectName || "";
    },
    getGroupName() {
      return this.groupName || "";
    },
    getRunName() {
      return this.runName || "";
    },
    getReportName() {
      return this.reportName || "";
    },
  },
  actions: {
    setProjectName(e) {
      this.projectName = e;
    },
    setGroupName(e) {
      this.groupName = e;
    },
    setRunName(e) {
      this.runName = e;
    },
    setReportName(e) {
      this.reportName = e;
    },
  },
});
export { t as b };

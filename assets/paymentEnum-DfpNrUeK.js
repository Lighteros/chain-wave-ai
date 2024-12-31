import { c as e } from "./create-enum-converter-ClJbjM_p.js";
var E = ((e) => (
  (e[(e.JOB = 0)] = "JOB"),
  (e[(e.BALANCE_RECHARGE = 1)] = "BALANCE_RECHARGE"),
  (e[(e.TRANSACTION_FEE = 2)] = "TRANSACTION_FEE"),
  (e[(e.BALANCE_PAYMENT = 3)] = "BALANCE_PAYMENT"),
  (e[(e.DEPLOY_BY_TOKEN_REQUEST = 4)] = "DEPLOY_BY_TOKEN_REQUEST"),
  (e[(e.DEPLOY_BY_TIME_DURATION = 5)] = "DEPLOY_BY_TIME_DURATION"),
  (e[(e.CLUSTER_BY_TIME_DURATION = 6)] = "CLUSTER_BY_TIME_DURATION"),
  (e[(e.AI_AGENT_FEE = 7)] = "AI_AGENT_FEE"),
  (e[(e.WITHDRAWALS = 8)] = "WITHDRAWALS"),
  (e[(e.FREE_CREDIT = 9)] = "FREE_CREDIT"),
  e
))(E || {});
const a = e({
    0: "Job",
    1: "Balance recharge",
    2: "Fee that is paid to Stripe",
    3: "Balance payment",
    4: "Deploy: by token/request",
    5: "Deploy: by time duration",
    6: "Cluster: by time duration",
    7: "AI Agent",
    8: "Withdrawals",
    9: "Free Credit",
  }),
  t = e({
    0: "unpaid",
    1: "To be paid",
    2: "success",
    3: "fail",
    4: "Accumulated charges",
    5: "Unpaid supplier",
    6: "Accumulated bill payment successful",
  });
var A = ((e) => (
  (e[(e["Platform Subscription"] = 1)] = "Platform Subscription"),
  (e[(e["Model Serving"] = 2)] = "Model Serving"),
  (e[(e.Training = 3)] = "Training"),
  (e[(e.Compute = 4)] = "Compute"),
  (e[(e["AI Agent"] = 5)] = "AI Agent"),
  (e[(e["Platform Fee"] = 6)] = "Platform Fee"),
  e
))(A || {});
const r = e({
  1: "Platform Subscription",
  2: "Model Serving",
  3: "Training",
  4: "Compute",
  5: "AI Agent",
  6: "Platform Fee",
});
export { t as P, A as a, a as b, E as c, r as d };

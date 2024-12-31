import { R as n, _ as o, a as t } from "./RadioButton-BTaousOD.js";
(n.Group = o),
  (n.Button = t),
  (n.install = function (o) {
    return (
      o.component(n.name, n),
      o.component(n.Group.name, n.Group),
      o.component(n.Button.name, n.Button),
      o
    );
  });

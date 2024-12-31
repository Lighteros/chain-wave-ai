var N = ((N) => (
    (N[(N.Nvidia = 0)] = "Nvidia"),
    (N[(N.AMD = 1)] = "AMD"),
    (N[(N.Intel = 2)] = "Intel"),
    (N[(N.Other = 3)] = "Other"),
    N
  ))(N || {}),
  I = ((N) => (
    (N[(N.active = 0)] = "active"), (N[(N.inactive = 1)] = "inactive"), N
  ))(I || {}),
  e = ((N) => (
    (N[(N["Secure Cloud"] = 1)] = "Secure Cloud"),
    (N[(N["Community Cloud"] = 2)] = "Community Cloud"),
    N
  ))(e || {}),
  t = ((N) => (
    (N[(N.ETHERNET = 0)] = "ETHERNET"),
    (N[(N.INFINIBAND = 1)] = "INFINIBAND"),
    (N[(N.OTHER_HIGH_BANDWIDTH_CONNECTOR = 2)] =
      "OTHER_HIGH_BANDWIDTH_CONNECTOR"),
    N
  ))(t || {}),
  a = ((N) => (
    (N[(N.PCIE = 0)] = "PCIE"),
    (N[(N.NVLINK = 1)] = "NVLINK"),
    (N[(N.OTHER_HIGH_BANDWIDTH_CONNECTOR = 2)] =
      "OTHER_HIGH_BANDWIDTH_CONNECTOR"),
    N
  ))(a || {});
const i = [
    [0, "Ethernet (default)"],
    [1, "Infiniband"],
    [2, "Other high bandwidth connector"],
  ],
  C = [
    [0, "PCIe (default)"],
    [1, "NVLink"],
    [2, "Other High Bandwidth Connector"],
  ];
export { N as B, t as C, a as I, e as M, I as S, i as a, C as b };

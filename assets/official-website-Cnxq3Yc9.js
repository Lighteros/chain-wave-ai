function e(e) {
  return e
    .then((e) => {
      if (e.ok) return e.json();
      throw new Error("Network Error");
    })
    .catch();
}
async function a(a, n) {
  return e(
    fetch(
      n
        ? `/api/v1/official/queryPublication?type=${n}&pageSize=${a.pageSize}&pageNum=${a.pageNum}`
        : `/api/v1/official/queryPublication?pageSize=${a.pageSize}&pageNum=${a.pageNum}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
  );
}
async function n(a) {
  return e(
    fetch(
      `/api/v1/official/queryPress?pageSize=${a.pageSize}&pageNum=${a.pageNum}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
  );
}
async function t(a) {
  return e(
    fetch(
      `/api/v1/official/queryEvent?pageSize=${a.pageSize}&pageNum=${a.pageNum}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
  );
}
async function i(a) {
  return e(
    fetch("/api/v1/official/Contact", {
      method: "POST",
      body: a,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
  );
}
export { t as a, a as b, n as g, i as h };

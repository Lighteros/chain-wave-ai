function e(e) {
  return {
    keyToLabel: (t) => e[String(t)] || "",
    get options() {
      return Object.entries(e).map(([e, t]) => ({
        value: Number(e),
        label: t,
      }));
    },
  };
}
export { e as c };

function t(t) {
  if (!t) return "0 B";
  if (t < 0) return "Invalid file size";
  const o = Math.floor(Math.log(t) / Math.log(1024));
  return `${(t / 1024 ** o).toFixed(2)} ${["B", "KB", "MB", "GB", "TB"][o]}`;
}
export { t as c };

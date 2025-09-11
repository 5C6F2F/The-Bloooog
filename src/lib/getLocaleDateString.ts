export function getLocaleDateString(date: string) {
  return new Date(date).toLocaleDateString("ja-JP", {
    dateStyle: "medium",
  });
}

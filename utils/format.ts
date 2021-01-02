export const notApplicable = "N/A";

export function formatPercentage(value: number | undefined): string {
  if (value == null) return notApplicable;
  const fixed = value.toFixed(2);
  return `${fixed}%`;
}

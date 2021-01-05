export const notApplicable = "N/A";

export function formatPercentage(value: number | null): string {
  if (value == null || isNaN(value)) return notApplicable;
  const fixed = value.toFixed(2);
  return `${fixed}%`;
}

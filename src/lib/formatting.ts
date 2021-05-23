export function formatNumber(num: number): string {
  return Intl.NumberFormat('id-Id').format(num);
}

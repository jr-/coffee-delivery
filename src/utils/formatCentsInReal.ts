export function formatCentsInReal(cents: number): string {
  const valueInReal = new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(cents / 100);

  return valueInReal;
}
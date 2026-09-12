const MONTH_INDEX: Record<string, number> = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

function parseMonthYear(value: string): { year: number; month: number } | null {
  const cleaned = value.replace(/\s*\([^)]*\)\s*$/, "").trim();
  if (/^present$/i.test(cleaned)) {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  }
  const match = cleaned.match(/^([A-Za-z]{3})\s+(\d{4})$/);
  if (!match) {
    return null;
  }
  const month = MONTH_INDEX[match[1].toLowerCase()];
  if (month === undefined) {
    return null;
  }
  return { year: Number.parseInt(match[2], 10), month };
}

function monthsBetweenInclusive(
  start: { year: number; month: number },
  end: { year: number; month: number }
): number {
  const total = (end.year - start.year) * 12 + (end.month - start.month) + 1;
  return Math.max(total, 1);
}

export function formatExperienceDuration(startDate: string, endDate: string): string | null {
  const start = parseMonthYear(startDate);
  const end = parseMonthYear(endDate);
  if (!start || !end) {
    return null;
  }
  const totalMonths = monthsBetweenInclusive(start, end);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} mos`;
  }
  if (months === 0) {
    return years === 1 ? "1 yr" : `${years} yrs`;
  }
  const yearPart = years === 1 ? "1 yr" : `${years} yrs`;
  return `${yearPart} ${months} mos`;
}

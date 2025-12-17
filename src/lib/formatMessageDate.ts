export function formatMessageDate(dateInput: number | string | Date) {
  const date = new Date(dateInput);
  const now = new Date();

  const dateAtMidnight = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const nowAtMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diffDays = Math.round((nowAtMidnight.getTime() - dateAtMidnight.getTime()) / (24 * 60 * 60 * 1000));

  const time = new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "numeric" }).format(date);

  if (diffDays === 0) {
    return time;
  }
  if (diffDays === 1) {
    return `Yesterday, ${time}`;
  }
  if (diffDays > 1 && diffDays < 7) {
    const weekday = new Intl.DateTimeFormat(undefined, { weekday: "short" }).format(date);
    return `${weekday}, ${time}`;
  }

  const sameYear = date.getFullYear() === now.getFullYear();
  const dateOpts: Intl.DateTimeFormatOptions = sameYear
    ? { month: "short", day: "numeric" }
    : { month: "short", day: "numeric", year: "numeric" };
  const datePart = new Intl.DateTimeFormat(undefined, dateOpts).format(date);
  return `${datePart}, ${time}`;
}

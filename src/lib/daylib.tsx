export const DAY_UNLOCKS: Record<number, Date> = {
  1: new Date(2026, 5, 29),
  2: new Date(2026, 6, 2), 
  3: new Date(2026, 6, 3), 
  4: new Date(2026, 6, 4), 
}

export function isDayUnlocked(day: number): boolean {
  // alert(day)
  const unlockDate = DAY_UNLOCKS[day];
  if (!unlockDate) return false;
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now >= unlockDate;
}

export function unlockLabel(day: number): string {
  // console.log(day)
  const unlockDate = DAY_UNLOCKS[day];
  // console.log(unlockDate)
  if (!unlockDate) return "";
  return unlockDate.toLocaleDateString("en-US", { month: "long", day: "numeric" });
}
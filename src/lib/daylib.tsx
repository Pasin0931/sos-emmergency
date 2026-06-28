export const DAY_UNLOCKS: Record<number, Date> = { // adjust ---
  1: new Date(2026, 5, 28), 
  2: new Date(2026, 6, 2),  
  3: new Date(2026, 6, 3),  
  4: new Date(2026, 6, 3),
};

export function isDayUnlocked(day: number): boolean {
  const unlockDate = DAY_UNLOCKS[day];
  if (!unlockDate) return false;
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now >= unlockDate;
}

export function unlockLabel(day: number): string {
  const unlockDate = DAY_UNLOCKS[day];
  if (!unlockDate) return "";
  return unlockDate.toLocaleDateString("en-US", { month: "long", day: "numeric" });
}
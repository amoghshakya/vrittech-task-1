export function padNumber(num: number, size: number = 2): string {
  return num.toString().padStart(size, "0");
}

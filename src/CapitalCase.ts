export function capitalCase(str: string): string {
  return str.split(' ')
    .map((word: string) => word.slice(0, 1).toUpperCase().concat(word.slice(1)))
    .join(' ')
}

/**
 * Reverses the given string or sentence and returns it
 */
export function reverse(str: string): string {
  return str.split('')
    .reverse()
    .join('')
}

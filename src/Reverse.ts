/**
 * Reverses the given string or sentence and returns it
 * @param {string} str The string/sentence to be reversed
 */
export function reverse(str: string): string {
  return str.split('')
    .reverse()
    .join('')
}

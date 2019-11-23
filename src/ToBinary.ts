/**
 * Converts the string into binary code. By default the response is concatenated together but can be set to be space deliminated
 * @param {string} str The given string to convert to binary
 * @param {boolean} deliminate Whether or not the response should be space deliminated
 */
export function toBinary(str: string, deliminate: boolean = false): string {
  const conversion = (item: string) => item.charCodeAt(0)
    .toString(2)

  const binary = str.split('')
    .map(conversion)

  return deliminate ? binary.join(' ') : binary.join('')
}

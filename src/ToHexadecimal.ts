/**
 * Converts the string into hexadecimal. By default the response is concatenated together but can be set to be space deliminated
 * @param {string} str The given string to convert to hexadecimal
 * @param {boolean} deliminate Whether or not the response should be space deliminated
 */
export function toHexadecimal(str: string, deliminate: boolean = false) {
  const conversion = (item: string) => item.charCodeAt(0).toString(16)

  const hexadecimal = str.split('')
    .map(conversion)

  return deliminate ? hexadecimal.join(' ') : hexadecimal.join('')
}

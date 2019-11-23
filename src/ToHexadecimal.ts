import { Delimination } from './enums/Delimination'

/**
 * Converts the string into hexadecimal. By default the response is concatenated together but can be set to be space deliminated
 * @param {string} str The given string to convert to hexadecimal
 * @param {Delimination} deliminate The manner of delimination that should be implemented
 */
export function toHexadecimal(str: string, deliminate: Delimination = Delimination.NONE): string {
  const conversion = (item: string) => item.charCodeAt(0)
    .toString(16)

  // Retain original spacing delimination
  if (deliminate === Delimination.ORIGINAL) {
    const originalSpacing = (word: string): string => word.split('')
      .map(conversion)
      .join('')

    return str.split(' ')
      .map(originalSpacing)
      .join(' ')
  }

  const hexadecimal = str.split('')
    .map(conversion)

  // Deliminate each character by spaces
  if (deliminate === Delimination.SPACES) {
    return hexadecimal.join(' ')
  }

  // Remove all delimination
  return hexadecimal.join('')
}

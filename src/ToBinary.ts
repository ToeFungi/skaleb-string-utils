import { Delimination } from './enums/Delimination'

/**
 * Converts the string into binary code. By default the response is concatenated together but can be set to be space deliminated
 * @param {string} str The given string to convert to binary
 * @param {Delimination} deliminate The manner of delimination that should be implemented
 */
export function toBinary(str: string, deliminate: Delimination = Delimination.NONE): string {
  const conversion = (item: string) => item.charCodeAt(0)
    .toString(2)

  // Retain original spacing delimination
  if (deliminate === Delimination.ORIGINAL) {
    const originalSpacing = (word: string) => word.split('')
      .map(conversion)
      .join('')

    return str.split(' ')
      .map(originalSpacing)
      .join(' ')
  }

  const binary = str.split('')
    .map(conversion)

  // Deliminate each character by spaces
  if (deliminate === Delimination.SPACES) {
    return binary.join(' ')
  }

  // Remove all delimination
  return binary.join('')
}

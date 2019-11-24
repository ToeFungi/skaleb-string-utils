import { Delimination } from './enums/Delimination'

export function baseConversion(str: string, deliminate: Delimination = Delimination.NONE, base: number): string {
  const conversion = (item: string): string => item.charCodeAt(0)
    .toString(base)

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

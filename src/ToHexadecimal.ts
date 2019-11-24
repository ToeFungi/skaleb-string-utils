import { Delimination } from './enums/Delimination'

String.prototype.toHexadecimal = function (this: string, deliminate: Delimination = Delimination.NONE): string {
  const conversion = (item: string): string => item.charCodeAt(0)
    .toString(16)

  // Retain original spacing delimination
  if (deliminate === Delimination.ORIGINAL) {
    const originalSpacing = (word: string): string => word.split('')
      .map(conversion)
      .join('')

    return this.split(' ')
      .map(originalSpacing)
      .join(' ')
  }

  const hexadecimal = this.split('')
    .map(conversion)

  // Deliminate each character by spaces
  if (deliminate === Delimination.SPACES) {
    return hexadecimal.join(' ')
  }

  // Remove all delimination
  return hexadecimal.join('')
}

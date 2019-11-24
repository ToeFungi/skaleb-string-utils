import { Delimination } from './enums/Delimination'

String.prototype.toBinary = function (this: string, deliminate: Delimination = Delimination.NONE): string {
  const conversion = (item: string): string => item.charCodeAt(0)
    .toString(2)

  // Retain original spacing delimination
  if (deliminate === Delimination.ORIGINAL) {
    const originalSpacing = (word: string) => word.split('')
      .map(conversion)
      .join('')

    return this.split(' ')
      .map(originalSpacing)
      .join(' ')
  }

  const binary = this.split('')
    .map(conversion)

  // Deliminate each character by spaces
  if (deliminate === Delimination.SPACES) {
    return binary.join(' ')
  }

  // Remove all delimination
  return binary.join('')
}

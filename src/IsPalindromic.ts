String.prototype.isPalindromic = function (this: string): boolean {
  const reversed = this.split('')
    .reverse()
    .join('')
    .toUpperCase()

  return reversed === this.toUpperCase()
}

String.prototype.isPalindromic = function (this: string): boolean {
  const reversed = this.split('')
    .reverse()
    .join('')

  return reversed === this
}

String.prototype.reverseWords = function (this: string): string {
  const conversion = (word: string): string => {
    return word.split('')
      .reverse()
      .join('')
  }

  return this.split(' ')
    .map(conversion)
    .join(' ')
}

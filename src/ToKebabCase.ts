String.prototype.toKebabCase = function (this: string, capitalize: boolean = false): string {
  const words = this.split(' ')
    .join('-')

  return capitalize ? words.toUpperCase() : words
}

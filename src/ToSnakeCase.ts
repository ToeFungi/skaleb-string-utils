String.prototype.toSnakeCase = function (this: string, capitalize: boolean = false): string {
  const words = this.split(' ')
    .join('_')

  return capitalize ? words.toUpperCase() : words
}

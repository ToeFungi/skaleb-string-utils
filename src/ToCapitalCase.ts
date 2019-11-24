String.prototype.toCapitalCase = function (this: string): string {
  return this.split(' ')
    .map((word: string): string => word.slice(0, 1).toUpperCase().concat(word.slice(1)))
    .join(' ')
}

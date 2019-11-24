String.prototype.wordCount = function (this: string): number {
  return this.split(' ')
    .length
}

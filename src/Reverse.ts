import './types/Extension'

String.prototype.reverse = function (this: string): string {
  return this.split('')
    .reverse()
    .join('')
}

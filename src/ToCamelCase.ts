String.prototype.toCamelCase = function (this: string): string {
  // Map items appropriately for camelCase fromat
  const mapItems = (item: string, index: number): string => {
    if (index === 0) {
      return item.toLowerCase()
    }

    return item.slice(0, 1)
      .toUpperCase()
      .concat(item.slice(1))
  }

  // Return camelCase
  return this.split(' ')
    .map(mapItems)
    .join('')
}

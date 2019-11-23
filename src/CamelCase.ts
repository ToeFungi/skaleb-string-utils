/**
 * Convert a string to camelCaseFormat where each word is joined together and the start of each word bar the initial word is capitalized
 */
export function camelCase(str: string): string {
  /**
   * Map items appropriately for camelCase fromat
   */
  const mapItems = (item: string, index: number) => {
    if (index === 0) {
      return item.toLowerCase()
    }

    return item.slice(0, 1)
      .toUpperCase()
      .concat(item.slice(1))
  }

  // Return camelCase
  return str.split(' ')
    .map(mapItems)
    .join('')
}

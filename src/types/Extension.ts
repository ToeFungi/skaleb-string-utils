/**
 * Representation of the manner of delimination to be implemented
 */
enum Delimination {
  /**
   * No delimination to be used
   */
  NONE = 1,

  /**
   * Deliminate each character by spaces
   */
  SPACES = 2,

  /**
   * Maintain the original spacing
   */
  ORIGINAL = 3
}

/**
 * Modify the String prototype
 */
interface String {
  /**
   * Reverses the given string or sentence and returns it
   */
  reverse(): string

  /**
   * Converts the given sentence or string to Capital Case Format
   */
  toCapitalCase(): string

  /**
   * Convert a string to camelCaseFormat where each word is joined together and the start of each word bar the initial word is capitalized
   */
  toCamelCase(): string

  /**
   * Converts the string into binary code. By default the response is concatenated together but can be set to be space deliminated
   * @param {Delimination} deliminate The manner of delimination that should be implemented
   */
  toBinary(deliminate?: Delimination): string

  /**
   * Converts the string into hexadecimal. By default the response is concatenated together but can be set to be space deliminated
   * @param {Delimination} deliminate The manner of delimination that should be implemented
   */
  toHexadecimal(deliminate?: Delimination): string
}

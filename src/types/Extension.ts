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
   * Reverses the given string or sentence while retaining the position of the words and returns it
   */
  reverseWords(): string

  /**
   * Converts the given sentence or string to Capital Case Format
   */
  toCapitalCase(): string

  /**
   * Convert a string to camelCaseFormat where each word is joined together and the start of each word bar the initial word is capitalized
   */
  toCamelCase(): string

  /**
   * Convert a string to snake_case_format where each word is joined together by underscores
   * @param {boolean} capitalize Whether or not to return a capitalized response
   */
  toSnakeCase(capitalize?: boolean): string

  /**
   * Convert a string to kebab-case-format where each word is joined together by dashes
   * @param {boolean} capitalize Whether or not to return a capitalized response
   */
  toKebabCase(capitalize?: boolean): string

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

  /**
   * Determines whether or not the string is a palindrome
   */
  isPalindromic(): boolean

  /**
   * Returns the number of words contained in a given sentence
   */
  wordCount(): number
}

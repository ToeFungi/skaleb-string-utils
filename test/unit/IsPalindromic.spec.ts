import '../../src'

describe('IsPalindromic', () => {
  const palindrome = 'racecar'
  const notPalindrome = 'race car'

  it('returns true when the given string or sentence is palindromic', () => {
    return palindrome.isPalindromic()
      .should.be.true
  })

  it('returns false when the given string or sentence is not palindromic', () => {
    return notPalindrome.isPalindromic()
      .should.be.false
  })
})

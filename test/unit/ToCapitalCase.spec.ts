import '../../src'

describe('ToCapitalCase', () => {
  const word = 'word'
  const sentence = 'all words are capital case'

  it('returns a string with each word capitalized when only one word is given', () => {
    return word.toCapitalCase()
      .should.deep.equal('Word')
  })

  it('returns a string with each word capitalized when multiple words are given', () => {
    return sentence.toCapitalCase()
      .should.deep.equal('All Words Are Capital Case')
  })
})

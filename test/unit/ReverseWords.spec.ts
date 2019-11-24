import '../../src'

describe('ReverseWords', () => {
  const sentence = 'this is a sentence'

  it('returns a reversed sentence with the word positions retained', () => {
    return sentence.reverseWords()
      .should.deep.equal('siht si a ecnetnes')
  })
})

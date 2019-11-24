import '../../src'

describe('WordCount', () => {
  const sentence = 'this is a sentence'

  it('returns the number of words in the sentence', () => {
    return sentence.wordCount()
      .should.deep.equal(4)
  })
})

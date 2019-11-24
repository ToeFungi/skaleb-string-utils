import '../../src'

describe('Reverse', () => {
  const word = 'word'
  const sentence = 'multiple words in a string'

  it('returns a reversed string when a singular word is given', () => {
    return word.reverse()
      .should.deep.equal('drow')
  })

  it('returns a reversed string when multiple words are given', () => {
    return sentence.reverse()
      .should.deep.equal('gnirts a ni sdrow elpitlum')
  })
})

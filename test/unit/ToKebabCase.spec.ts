import '../../src'

describe('ToKebabCase', () => {
  const sentence = 'this is a sentence'

  it('returns a converted string to kebab-case', () => {
    return sentence.toKebabCase()
      .should.deep.equal('this-is-a-sentence')
  })

  it('returns a converted string to kebab-case, and capitalized', () => {
    return sentence.toKebabCase(true)
      .should.deep.equal('THIS-IS-A-SENTENCE')
  })
})

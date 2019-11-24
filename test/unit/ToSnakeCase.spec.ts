import '../../src'

describe('ToSnakeCase', () => {
  const sentence = 'This is some sentence'

  it('returns a converted string in snake_case', () => {
    return sentence.toSnakeCase()
      .should.deep.equal('This_is_some_sentence')
  })

  it('returns a converted string in snake_case, and capitalized', () => {
    return sentence.toSnakeCase(true)
      .should.deep.equal('THIS_IS_SOME_SENTENCE')
  })
})

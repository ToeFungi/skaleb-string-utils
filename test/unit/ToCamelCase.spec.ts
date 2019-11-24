import '../../src'

describe('ToCamelCase', () => {
  const word = 'some string to camel case'

  it('returns a case in camelCase format', () => {
    return word.toCamelCase()
      .should.deep.equal('someStringToCamelCase')
  })
})

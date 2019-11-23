import { camelCase } from '../../src/CamelCase'

describe('CamelCase', () => {
  it('returns a case in camelCase format', () => {
    return camelCase('some string to camel case')
      .should.deep.equal('someStringToCamelCase')
  })
})

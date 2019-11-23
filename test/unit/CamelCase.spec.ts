import { camelCase } from '../../src'

describe('CamelCase', () => {
  describe('#camelCase', () => {
    it('returns a case in camelCase format', () => {
      return camelCase('some string to camel case')
        .should.deep.equal('someStringToCamelCase')
    })
  })
})

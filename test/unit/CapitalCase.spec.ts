import { capitalCase } from '../../src'

describe('CapitalCase', () => {
  describe('#capitalCase', () => {
    it('returns a string with each word capitalized when only one word is given', () => {
      return capitalCase('word')
        .should.deep.equal('Word')
    })

    it('returns a string with each word capitalized when multiple words are given', () => {
      return capitalCase('all words are capital case')
        .should.deep.equal('All Words Are Capital Case')
    })
  })
})

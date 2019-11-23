import { capitalCase } from '../../src/CapitalCase'

describe('CapitalCase', () => {
  it('returns a string with each word capitalized when only one word is given', () => {
    return capitalCase('word')
      .should.deep.equal('Word')
  })

  it('returns a string with each word capitalized when only one word is given', () => {
    return capitalCase('all words are capital case')
      .should.deep.equal('All Words Are Capital Case')
  })
})

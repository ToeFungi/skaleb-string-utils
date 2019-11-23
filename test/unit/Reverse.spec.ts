import { reverse } from '../../src/Reverse'

describe('Reverse', () => {
  it('returns a reversed string when a singular word is given', () => {
    return reverse('word')
      .should.deep.equal('drow')
  })

  it('returns a reversed string when multiple words are given', () => {
    return reverse('multiple words in a string')
      .should.deep.equal('gnirts a ni sdrow elpitlum')
  })
})

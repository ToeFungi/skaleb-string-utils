import { Delimination } from '../../src'

describe('ToBinary', () => {
  const word = 'some binary'

  it('returns a converted string into equivalent binary', () => {
    return word.toBinary()
      .should.deep.equal('1110011110111111011011100101100000110001011010011101110110000111100101111001')
  })

  it('returns a converted string into equivalent binary and deliminates the response with spaces', () => {
    return word.toBinary(Delimination.SPACES)
      .should.deep.equal('1110011 1101111 1101101 1100101 100000 1100010 1101001 1101110 1100001 1110010 1111001')
  })

  it('returns a converted string into equivalent binary retaining initial delimination', () => {
    return word.toBinary(Delimination.ORIGINAL)
      .should.deep.equal('1110011110111111011011100101 110001011010011101110110000111100101111001')
  })
})

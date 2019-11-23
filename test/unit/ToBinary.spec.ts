import { toBinary } from '../../src/ToBinary'

describe('ToBinary', () => {
  it('returns a converted string in equivalent binary', () => {
    return toBinary('some binary')
      .should.deep.equal('1110011110111111011011100101100000110001011010011101110110000111100101111001')
  })

  it('returns a converted string in equivalent binary, deliminated by spaces', () => {
    return toBinary('some binary', true)
      .should.deep.equal('1110011 1101111 1101101 1100101 100000 1100010 1101001 1101110 1100001 1110010 1111001')
  })
})

import { Delimination } from '../../src'

describe('ToHexadecimal', () => {
  const word = 'some hexadecimal'

  it('returns a converted string into equivalent hexadecimal', () => {
    return word.toHexadecimal()
      .should.deep.equal('736f6d652068657861646563696d616c')
  })

  it('returns a converted string into equivalent hexadecimal and deliminates the response with spaces', () => {
    return word.toHexadecimal(Delimination.SPACES)
      .should.deep.equal('73 6f 6d 65 20 68 65 78 61 64 65 63 69 6d 61 6c')
  })

  it('returns a converted string into equivalent hexadecimal retaining initial delimination', () => {
    return word.toHexadecimal(Delimination.ORIGINAL)
      .should.deep.equal('736f6d65 68657861646563696d616c')
  })
})

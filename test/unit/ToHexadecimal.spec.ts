import { toHexadecimal } from '../../src/ToHexadecimal'

describe('ToHexadecimal', () => {
  it('converts the given string to a hexadecimal string', () => {
    return toHexadecimal('hexadecimal')
      .should.deep.equal('68657861646563696d616c')
  })

  it('converts the given sentence to a hexadecimal string', () => {
    return toHexadecimal('some hexadecimal')
      .should.deep.equal('736f6d652068657861646563696d616c')
  })

  it('converts the given sentence to hexadecimal and deliminates the response', () => {
    return toHexadecimal('some hexadecimal', true)
      .should.deep.equal('73 6f 6d 65 20 68 65 78 61 64 65 63 69 6d 61 6c')
  })
})

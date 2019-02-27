import { getRandomId } from '../getRandomId'
describe('getRandomId()', () => {
  it('should return an id with giving length', () => {
    let id = getRandomId(2)
    expect(id.length).toBe(2)
  })

  it('should return an id with giving length', () => {
    const id = getRandomId(9)
    expect(id.length).toBe(9)
  })

  it('should return an id with giving dubbel of length&letters', () => {
    const id = getRandomId(7, true)
    expect(id.length).toBe(14)
  })

  it('should return an id with giving with dubbel of length length&letters', () => {
    const id = getRandomId(2, true)
    expect(id.length).toBe(4)
    expect(id.startsWith('')) // check for string return type
  })
})

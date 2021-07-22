function add(a: number, b: number) {
  return a+b
}

describe('App', () => {
  test('first test', () => {
    expect(add(2,2)).toBe(4)
  })
})
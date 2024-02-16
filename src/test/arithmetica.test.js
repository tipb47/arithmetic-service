const {add} = require("../arithmetica")

test('2 + 3 is equal to 5', () => {
    expect(add(2,3)).toBe(5);
  });

  test('239182301928123 + 32912371293123 is equal to some numbers', () => {
    expect(add(239182301928123,32912371293123))
    .toBe(2.72094673221246e+14)
  })

  test('1 + 1 is equal to 2', () => {
    expect(add(1,1))
    .toBe(2)
  })
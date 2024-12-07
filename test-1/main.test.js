const { sumPair } = require("./main");

describe("sumPair", () => {
  test("finds pairs that sum to target", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 6;
    const expected = [
      [1, 5],
      [2, 4],
    ];

    expect(sumPair(arr, target)).toEqual(expect.arrayContaining(expected));
  });

  test("handles arrays with duplicate numbers", () => {
    const arr = [1, 1, 1, 1];
    const target = 2;
    const expected = [
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ];

    expect(sumPair(arr, target)).toEqual(expect.arrayContaining(expected));
  });

  test("returns empty array when no pairs found", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 10;

    expect(sumPair(arr, target)).toHaveLength(0);
  });

  test("works with negative numbers", () => {
    const arr = [-1, -1, 0, 1, 1, 0];
    const target = 0;
    const expected = [
      [-1, 1],
      [-1, 1],
      [0, 0],
    ];

    expect(sumPair(arr, target)).toEqual(expect.arrayContaining(expected));
  });
});

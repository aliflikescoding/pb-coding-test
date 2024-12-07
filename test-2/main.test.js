const { areAnagrams } = require("./main.js");

describe("sumPair", () => {
  test("should return true for anagrams", () => {
    expect(areAnagrams("listen", "silent")).toBe(true);
    expect(areAnagrams("elbow", "below")).toBe(true);
  });

  test("should return false for non-anagrams", () => {
    expect(areAnagrams("hello", "world")).toBe(false);
    expect(areAnagrams("abc", "abcd")).toBe(false);
  });

  test("should handle case insensitivity and spaces", () => {
    expect(areAnagrams("Listen", "SILENT")).toBe(true);
    expect(areAnagrams("A gentleman", "Elegant man")).toBe(true);
  });
});

import {
  generateNonExisting,
  generateArray,
  findMissingNumbers,
  checkBorders,
} from "../task.ts";

describe("generateNonExisting", () => {
  test("should generate two distinct numbers within the range", () => {
    const n = 10;
    const [num1, num2] = generateNonExisting(n);
    expect(num1).not.toBe(num2);
    expect(num1).toBeGreaterThanOrEqual(1);
    expect(num1).toBeLessThanOrEqual(n);
    expect(num2).toBeGreaterThanOrEqual(1);
    expect(num2).toBeLessThanOrEqual(n);
  });
});

describe("generateArray", () => {
  test("should generate an array missing exactly two numbers", () => {
    const n = 10;
    const array = generateArray(n);
    expect(array.length).toBe(n - 2);
    expect(array).toEqual(array.slice().sort((a, b) => a - b));
  });
});

describe("findMissingNumbers", () => {
  test("should find missing numbers in the middle of the array", () => {
    const array = [1, 2, 3, 6, 7, 8];
    const missingNumbers: number[] = [];
    findMissingNumbers(array, missingNumbers, 0, array.length - 1);
    expect(missingNumbers).toEqual([4, 5]);
  });
});

describe("checkBorders", () => {
  test("should identify missing numbers at the beginning", () => {
    const array = [3, 4, 5, 6, 7];
    const missingNumbers: number[] = [];
    checkBorders(array, missingNumbers);
    expect(missingNumbers).toEqual([1, 2]);
  });

  test("should identify missing numbers at the end", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const missingNumbers: number[] = [];
    checkBorders(array, missingNumbers);
    expect(missingNumbers).toEqual([7, 8]);
  });
});

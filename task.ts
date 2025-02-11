// change n to test different cases
const n = 10;

export const generateNonExisting = (n: number): number[] => {
  const nonExisting1 = Math.floor(Math.random() * n) + 1;
  const nonExisting2 = Math.floor(Math.random() * n) + 1;
  // case when our hidden numbers are in the borders
  //   const nonExisting1 = n - 1;
  //   const nonExisting2 = n;
  if (nonExisting1 === nonExisting2) {
    return generateNonExisting(n);
  }
  return [nonExisting1, nonExisting2];
};

export const generateArray = (n: number): number[] => {
  const array: number[] = [];
  const nonExisting = generateNonExisting(n);

  for (let i = 1; i < n + 1; i++) {
    if (nonExisting.includes(i)) {
      continue;
    }
    array.push(i);
  }
  console.log(array);
  return array;
};

const missingNumbers: number[] = [];

export const findMissingNumbers = (
  array: number[],
  missingNumbers: number[],
  start: number,
  end: number
): void => {
  if (start > end) {
    return;
  }

  const indexDifference = end - start;
  const difference = array[end] - array[start];

  // array is good
  if (difference === indexDifference) {
    return;
  }

  // array is not good
  const mid = Math.floor((start + end) / 2);
  findMissingNumbers(array, missingNumbers, start, mid);
  findMissingNumbers(array, missingNumbers, mid + 1, end);
  if (array[mid + 1] - array[mid] === 2) {
    missingNumbers.push(array[mid] + 1);
  }
  if (array[mid + 1] - array[mid] === 3) {
    missingNumbers.push(array[mid] + 1);
    missingNumbers.push(array[mid] + 2);
  }
  return;
};

export const checkBorders = (
  array: number[],
  missingNumbers: number[]
): void => {
  if (array[0] === 2) {
    missingNumbers.push(1);
  }
  if (array[0] === 3) {
    missingNumbers.push(1);
    missingNumbers.push(2);
  }
  if (array[array.length - 1] === array.length + 1) {
    missingNumbers.push(array.length + 2);
  }
  if (array[array.length - 1] === array.length) {
    missingNumbers.push(array.length + 1);
    missingNumbers.push(array.length + 2);
  }
};

export const main = () => {
  const array = generateArray(n);
  if (!array.length) {
    console.error("we are missing all numbers");
    missingNumbers.push(1);
    missingNumbers.push(2);
    return;
  }

  checkBorders(array, missingNumbers);
  findMissingNumbers(array, missingNumbers, 0, array.length - 1);
  console.log(missingNumbers);
};

main();

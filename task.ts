const n = 10;

const generateNonExisting = (n: number) => {
  //const nonExisting1 = Math.floor(Math.random() * n);
  //const nonExisting2 = Math.floor(Math.random() * n);
  const nonExisting1 = 1;
  const nonExisting2 = n;
  if (nonExisting1 === nonExisting2) {
    return generateNonExisting(n);
  }
  return [nonExisting1, nonExisting2];
};

const generateArray = (n: number) => {
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

const findMissingNumbers = (
  array: number[],
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
  findMissingNumbers(array, start, mid);
  findMissingNumbers(array, mid + 1, end);
  if (array[mid + 1] - array[mid] === 2) {
    missingNumbers.push(array[mid] + 1);
  }
  return;
};

const checkBorders = (array: number[]) => {
  if (array[0] === 2) {
    missingNumbers.push(1);
  }
  if (array[array.length - 1] === array.length + 1) {
    missingNumbers.push(array.length + 2);
  }
};

const main = () => {
  const array = generateArray(n);
  if (!array.length) {
    console.error("we are missing all numbers");
    missingNumbers.push(1);
    missingNumbers.push(2);
    return;
  }

  checkBorders(array);
  findMissingNumbers(array, 0, array.length - 1);
  console.log(missingNumbers);
};

main();

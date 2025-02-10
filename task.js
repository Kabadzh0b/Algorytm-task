// change n to test different cases
var n = 10;
var generateNonExisting = function (n) {
    //   const nonExisting1 = Math.floor(Math.random() * n) + 1;
    //   const nonExisting2 = Math.floor(Math.random() * n) + 1;
    // case when our hidden numbers are in the borders
    var nonExisting1 = n - 1;
    var nonExisting2 = n;
    if (nonExisting1 === nonExisting2) {
        return generateNonExisting(n);
    }
    return [nonExisting1, nonExisting2];
};
var generateArray = function (n) {
    var array = [];
    var nonExisting = generateNonExisting(n);
    for (var i = 1; i < n + 1; i++) {
        if (nonExisting.includes(i)) {
            continue;
        }
        array.push(i);
    }
    console.log(array);
    return array;
};
var missingNumbers = [];
var findMissingNumbers = function (array, start, end) {
    if (start > end) {
        return;
    }
    var indexDifference = end - start;
    var difference = array[end] - array[start];
    // array is good
    if (difference === indexDifference) {
        return;
    }
    // array is not good
    var mid = Math.floor((start + end) / 2);
    findMissingNumbers(array, start, mid);
    findMissingNumbers(array, mid + 1, end);
    if (array[mid + 1] - array[mid] === 2) {
        missingNumbers.push(array[mid] + 1);
    }
    if (array[mid + 1] - array[mid] === 3) {
        missingNumbers.push(array[mid] + 1);
        missingNumbers.push(array[mid] + 2);
    }
    return;
};
var checkBorders = function (array) {
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
var main = function () {
    var array = generateArray(n);
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

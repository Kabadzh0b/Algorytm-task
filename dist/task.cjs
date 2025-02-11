"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = exports.checkBorders = exports.findMissingNumbers = exports.generateArray = exports.generateNonExisting = void 0;
// change n to test different cases
var n = 10;
var generateNonExisting = function (n) {
    var nonExisting1 = Math.floor(Math.random() * n) + 1;
    var nonExisting2 = Math.floor(Math.random() * n) + 1;
    // case when our hidden numbers are in the borders
    //   const nonExisting1 = n - 1;
    //   const nonExisting2 = n;
    if (nonExisting1 === nonExisting2) {
        return (0, exports.generateNonExisting)(n);
    }
    return [nonExisting1, nonExisting2];
};
exports.generateNonExisting = generateNonExisting;
var generateArray = function (n) {
    var array = [];
    var nonExisting = (0, exports.generateNonExisting)(n);
    for (var i = 1; i < n + 1; i++) {
        if (nonExisting.includes(i)) {
            continue;
        }
        array.push(i);
    }
    console.log(array);
    return array;
};
exports.generateArray = generateArray;
var missingNumbers = [];
var findMissingNumbers = function (array, missingNumbers, start, end) {
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
    (0, exports.findMissingNumbers)(array, missingNumbers, start, mid);
    (0, exports.findMissingNumbers)(array, missingNumbers, mid + 1, end);
    if (array[mid + 1] - array[mid] === 2) {
        missingNumbers.push(array[mid] + 1);
    }
    if (array[mid + 1] - array[mid] === 3) {
        missingNumbers.push(array[mid] + 1);
        missingNumbers.push(array[mid] + 2);
    }
    return;
};
exports.findMissingNumbers = findMissingNumbers;
var checkBorders = function (array, missingNumbers) {
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
exports.checkBorders = checkBorders;
var main = function () {
    var array = (0, exports.generateArray)(n);
    if (!array.length) {
        console.error("we are missing all numbers");
        missingNumbers.push(1);
        missingNumbers.push(2);
        return;
    }
    (0, exports.checkBorders)(array, missingNumbers);
    (0, exports.findMissingNumbers)(array, missingNumbers, 0, array.length - 1);
    console.log(missingNumbers);
};
exports.main = main;
(0, exports.main)();

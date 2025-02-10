The complexity of our solution is:
The worst case is O(log(n)) there is no case worse than trying to find by splitting the array in half each iteration
The average case is O(log(n)) if we cannot find the missing numbers in borders
The best case is O(1) if we can find the missing numbers in borders (if we are missing only 2 numbers as it said in the task)

It is based on binary search, so we are reducing the amount of numbers we need to check by half every time.

Basic idea of solution is to write a binary search, but instead of finding a number - check if the difference between indexes is equal to the difference between numbers in array. If it is, we are good, if not, we need to split the array in half and check the middle index. But if not, then we have a missed number somewhere in the array.

<b>HOW TO RUN:</b>
to start a project yourself you can write tsc task.ts and run it with node task.js

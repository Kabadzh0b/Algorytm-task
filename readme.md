The complexity of our solution is:
The worst case is O(log(n)) there is no case worse than trying to find by splitting the array in half each iteration
The average case is O(log(n)) if we cannot find the missing numbers in borders
The best case is O(1) if we can find the missing numbers in borders (if we are missing only 2 numbers as it said in the task)


It is based on binary search, so we are reducing the amount of numbers we need to check by half every time.
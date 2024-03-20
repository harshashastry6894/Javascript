Plm: 2 sum -> https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
Approach: 
  1. set first value index as low and last value index as high
  2. while low < high 
  3. if value of low + value of high is equal to target then return [low +1, high + 1]
  4. if value of low + value of high is less than target then increment low
  5. if value of low + value of high is greater than target then decrement high
  4. if while loop breaks then return empty []

  function twoSum(numbers: number[], target: number): number[] {
    let low = 0;
    let high = numbers.length - 1;

    while (low < high) {
        if ((numbers[low] + numbers[high]) === target) return [low + 1, high + 1]
        if ((numbers[low] + numbers[high]) > target) {
            high = high - 1
        }
        if ((numbers[low] + numbers[high]) < target) {
            low = low + 1
        }
    }
    return []
};





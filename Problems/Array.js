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

plm: Best Time to Buy and Sell Stock -> https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
Approach: 
  1. initialize profit to 0 and min value as first value (min value is used to track the minimum value to buy stock)
  2. Traverse through the array and find the cost by subtracting current value with minimum value 
  3. find the max profit by comparing with the previous profit and the cost 
  4. find the mini value by comparing the previous minimum value and the current value

function maxProfit(prices: number[]): number {
    let profit = 0
    let min = prices[0]
    for (let i = 1; i < prices.length; i++) {
        const cost = prices[i] - min
        profit = Math.max(profit, cost)
        min = Math.min(min, prices[i])
    }
    return profit
};

plm: Contains Duplicate -> https://leetcode.com/problems/contains-duplicate/
function containsDuplicate(nums: number[]): boolean {
    let fc = {};
    for (let i = 0; i < nums.length; i++) {
        if (fc[nums[i]]) {
            return true;
        } else {
            fc[nums[i]] = (fc[nums[i]] || 0) + 1;
        }
    }
    return false
};



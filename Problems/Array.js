Plm: 2 sum -> https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
Approach: 
  1. declare a func pointer fc
  2. loop through an array 
  3. find the differnece value with target - array element
  4. if the diff is in fc then return fc[diff] and i (fc[diff] contains the value with index)
  5. else store the current value and it's index in fc
  4. if for loop breaks then return  [-1, -1]

function twoSum(nums: number[], target: number): number[] {
    const fc = {}
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (diff in fc) {
            return [fc[diff], i]
        } else {
            fc[nums[i]] = i
        }
    }
    return [-1, -1]
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



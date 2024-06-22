Plm: 2 sum -> https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
Approach: 
  1. declare a func pointer fc
  2. loop through an array 
  3. find the differnece value with target - array element
  4. if the diff is in fc then return fc[diff] and i (fc[diff] contains the value with index)
  5. else store the current value and it's index in fc
  4. if for loop breaks then return  [-1, -1]

Sample: nums = [2,7,11,15], target = 9 -> [0,1]

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
  1. initialize maxProfit to 0
  2. Traverse through the array and find the currentPrice by subtracting current value with previous value 
  3. if currentPrice is greater than 0 then add it to maxProfit
  4. After loop breaks return the maxProfit

Sample: prices = [7,1,5,3,6,4] -> 7

function maxProfit(prices: number[]): number {
    if (prices.length <= 1) return 0;
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i] - prices[i - 1];
        if (currentPrice > 0) maxProfit += currentPrice;
    }
    return maxProfit;
};

plm: Contains Duplicate -> https://leetcode.com/problems/contains-duplicate/
Sample: [1,2,3,1] -> true
function containsDuplicate(nums: number[]): boolean {
    let fc = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in fc) {
            return true;
        } else {
            fc[nums[i]] = (fc[nums[i]] || 0) + 1;
        }
    }
    return false
};



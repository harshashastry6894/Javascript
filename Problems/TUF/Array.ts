// Problem: Two Sum II - Input Array Is Sorted
// Link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// Approach:
// 1. Declare a function pointer `fc`.
// 2. Loop through the array.
// 3. Find the difference value with `target - array element`.
// 4. If the difference is in `fc`, then return `fc[diff]` and `i` (`fc[diff]` contains the value with index).
// 5. Else, store the current value and its index in `fc`.
// 6. If the for loop breaks, then return `[-1, -1]`.

// Sample: nums = [2,7,11,15], target = 9 -> [0,1]
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

// Problem: Best Time to Buy and Sell Stock
// Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Approach:
// 1. Initialize `maxProfit` to 0.
// 2. Traverse through the array and find the `currentPrice` by subtracting the current value from the previous value.
// 3. If `currentPrice` is greater than 0, then add it to `maxProfit`.
// 4. After the loop breaks, return the `maxProfit`.

// Sample: prices = [7, 1, 5, 3, 6, 4] -> 7
function maxProfit(prices: number[]): number {
    if (prices.length <= 1) return 0;
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i] - prices[i - 1];
        if (currentPrice > 0) maxProfit += currentPrice;
    }
    return maxProfit;
};

// 3rd Plm: Contains Duplicate -> https://leetcode.com/problems/contains-duplicate/
// Sample: [1,2,3,1] -> true
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

// 4th Plm: Product of Array Except Self -> https://leetcode.com/problems/product-of-array-except-self/description/
// Sample: [1,2,3,4] -> [24, 12, 8, 6]
function productExceptSelf(nums: number[]): number[] {
    const length = nums.length;
    const result = new Array(length).fill(1);
    
    let prefixProduct = 1;
    for (let i = 0; i < length; i++) {
        result[i] *= prefixProduct;
        prefixProduct *= nums[i];
    }
    let suffixProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        result[i] *= suffixProduct;
        console.log(result[i], 'result')
        suffixProduct *= nums[i];
    }
    return result;
};

// 5th Plm: Maximum Subarray -> https://leetcode.com/problems/maximum-subarray/description/
// Sample: [-2,1,-3,4,-1,2,1,-5,4] -> The subarray [4,-1,2,1] has the largest sum 6.
function maxSubArray(nums: number[]): number {
    let sum = 0, max = nums[0]
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if(sum > max) max = sum
        if(sum < 0) sum = 0
    }
     return max
}

// 6th Plm: Maximum product subarray -> https://leetcode.com/problems/maximum-product-subarray/description/
// Sample: [2,3,-2,4] -> [2,3] has the largest product 6.
function maxProduct(nums: number[]): number {
    let prefixProduct = 1;
    let suffixProduct = 1;
    let maxProd = nums[0];
    const n = nums.length;
    for(let i=0,j=n-1; i<n && j>=0;i++,j--){
        prefixProduct *= nums[i];
        suffixProduct *= nums[j];
        maxProd = Math.max(prefixProduct,maxProd);
        maxProd = Math.max(suffixProduct,maxProd);
        if(nums[i]==0)prefixProduct =1;
        if(nums[j]==0)suffixProduct =1;

    }
    return maxProd;
};

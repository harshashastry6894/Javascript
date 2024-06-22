https://www.freecodecamp.org/news/manipulating-arrays-in-javascript/ - array manupilatinon

// factorial
const factorial = (n) => {
    if (n == 1 || n == 0) return n;
    return n * factorial(n - 1);
}

// rotate an array by d elements
function rotate(arr, d) {
    var newArr = arr.splice(arr.length - d);
    // spread operator will spread the array as a seperate data
    arr.unshift(...newArr);
    return arr;
}

// Find the majority element in the array and element that appears more than N/2 times in the array.
function majority(arr) {
    let fc = {}, majority = arr[0]
    for (let i = 0; i < arr.length; i++) {
        fc[arr[i]] = (fc[arr[i]] || 0) + 1
        if (i === 0) majority = arr[i]
        if(i !== 0 && fc[arr[i]] > fc[majority]) majority = arr[i]
    }
    return majority !== undefined ? majority : -1
}

//Remove Duplicates from Sorted Array
// [1,1,2] -> 2 [1,2]
function removeDuplicates(nums) {
    let numCount = 1;
    const numsLen = nums.length;
    for (let i = 1; i < numsLen; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[numCount] = nums[i];
            numCount++;
        }
    }
    nums.splice(numCount)
    return nums.length;
}

// Best Time to Buy and Sell Stock II
// prices = [7,1,5,3,6,4] -> 7
var maxProfit = function (prices) {
    if (prices.length <= 1) return 0;

    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i] - prices[i - 1];
        if (currentPrice > 0) maxProfit += currentPrice;
    }

    return maxProfit;
};

// Contains Duplicate
// [1,2,3,1] -> true
var containsDuplicate = function (nums) {
    return nums.length !== new Set(nums).size
};

// Single Number
// nums = [2,2,1] -> 1
var singleNumber = function (nums) {
    let fc = {};
    for (let i = 0; i < nums.length; i++) {
        fc[nums[i]] = (fc[nums[i]] || 0) + 1;
    }
    return Object.keys(fc).find(key => fc[key] === 1);
};

// Intersection of Two Arrays II
// nums1 = [1,2,2,1], nums2 = [2,2] -> [2,2]
var intersect = function (nums1, nums2) {
    let fc = {};
    let res = [];

    nums1.forEach((ele) => {
        if (fc[ele]) {
            fc[ele] = fc[ele] + 1
        }

        else {
            fc[ele] = 1;
        }
    })

    nums2.forEach((ele) => {
        if (fc[ele] && fc[ele] != 0) {
            res.push(ele)
            fc[ele] = fc[ele] - 1
        }
    })


    return res
};

// Move Zeroes [0,1,0,3,12] -> [1,3,12,0,0]
const moveZeroes = arr => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] === 0) {
            arr.push(arr[i]);
            arr.splice(i, 1);
        }
    }
    return arr;
}

// Two Sum
// nums = [2,7,11,15], target = 9 -> [0,1]
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

// Input: N = 5, S = 12, A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements from 2nd position to 4th position is 12.
function subArray(arr, n, s) {
    for (var i = 0; i < n; i++) {
        var sum = arr[i];
        for (var j = i + 1; j < n; j++) {
            sum += arr[j];
            if (sum === s) return (i + 1) + ' ' + (j + 1);
            if (sum > s) break;
        }
    }
}

//Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
//Output: 6
//Explanation: [4,-1,2,1] has the largest sum = 6.
var maxSubArray = function (nums) {
    let sum = 0;
    let maxSum = -Infinity;

    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0]

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        maxSum = Math.max(maxSum, sum);
        if (sum < 0) sum = 0;
    }
    return maxSum;
};

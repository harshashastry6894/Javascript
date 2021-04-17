//difference b/w arrow and regular
let name = {
    fullName: 'Vandna Kapoor',
    printInRegular: function () {
        console.log(`My Name is ${this.fullName}`);
    },
    printInArrow: () => console.log(`My Name is ${this.fullName}`)
}

name.printInRegular();
name.printInArrow();

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
    var cutOff = Math.floor(arr.length / 2);
    var fc = {};
    for (var i = 0; i < arr.length; i++) {
        var ele = arr[i];
        fc[ele] = (fc[ele] || 0) + 1;
        if (fc[ele] > cutOff) return ele;
    }
    return -1;
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
var moveZeroes = function (nums) {
    var idx = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[idx] = nums[i];
            nums[i] = idx === i ? nums[i] : 0;
            idx++;
        }
    }
};

// Two Sum
// nums = [2,7,11,15], target = 9 -> [0,1]
var twoSum = function (nums, target) {
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        var value = target - nums[i];
        var found = res.findIndex(ele => ele === nums[i]);
        if (found >= 0) {
            return [found, i]
        }
        res.push(value);
    }
};

// Given an unsorted array A of size N that contains only non-negative integers, 
// find a continuous sub-array which adds to a given number S.
// Example 1:
// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
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
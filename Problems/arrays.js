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
// ============================ Pattern ===========================
// const s = "abc";
// const f = "";
// console.log("All possible subsequences are:");
// solve(0, s, f);
function generateSubsequences(i, s, f) {
  if (i === s.length) {
    console.log(f); // Print the current subsequence
    return;
  }

  // Include the character at index i
  generateSubsequences(i + 1, s, f + s.charAt(i));

  // Exclude the character at index i
  generateSubsequences(i + 1, s, f);
}

// const arr = [1, 2, 3];
// console.log("All possible subsequences are:");
// generateSubsequences(0, arr, []);
function generateSubsequences(index, arr, current) {
  if (index === arr.length) {
    console.log(current); // Print the current subsequence
    return;
  }

// To Skip Duplictaes (sort it first)
//   if (index > 0 && arr[index] === arr[index - 1]) {
//     generateSubsequences(index + 1, arr, current);
//     return;
//   }

  // Pick the current element
  generateSubsequences(index + 1, arr, current.concat(arr[index]));

  // Not Pick the current element
  generateSubsequences(index + 1, arr, current);
}

// ============================== Problems ===========================
// Problem: Print any subsequence whose sum is equal to target
// const arr = [1,2,1] target=2, sum=0
// generateSubsequencesSum(0, arr, [], target, sum);

// Modify the solution to give only the count of subsequences whose sum is equal to target
// Modify the solution to give only first subsequence whose sum is equal to target
// Modify the solution to print all the sums of subsequences

function generateSubsequencesSum(index, arr, current, target, sum) {
    if (index === arr.length) {
      if (target === sum) {
        console.log(current);
      }
      return;
    }
  
    // Pick the current element
    let newSum = sum + arr[index]; // Create a new sum when including the current element
    generateSubsequencesSum(index + 1, arr, current.concat(arr[index]), target, newSum);
  
    // Not Pick the current element
    generateSubsequencesSum(index + 1, arr, current, target, sum); // Keep the original sum
}

// Problem: Combination Sum
// Link: https://leetcode.com/problems/combination-sum/description/
// const arr = [2, 3, 6, 7];
// const target = 7;
// const result = [];
// generateCombinations(0, arr, [], target, result);
// console.log(result);

// Modify the solution to generate unique combinations
// Hint: Sort the array and skip duplicates

function generateCombinations(index, arr, current, target, result) {
    if (target === 0) {
      result.push(current); // Add the current combination to the result
      return;
    }
  
    if (index === arr.length) {
      return; // Return if we've gone through all elements without finding a valid combination
    }
  
    // Pick the current element
    if (arr[index] <= target) {
      let newTarget = target - arr[index];
      generateCombinations(index, arr, current.concat(arr[index]), newTarget, result); // Stay at the same index
    }
  
    // Not Pick the current element
    generateCombinations(index + 1, arr, current, target, result);
  }
  

  

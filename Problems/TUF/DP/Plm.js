// 1st Plm: Climbing stairs -> https://leetcode.com/problems/climbing-stairs/description/
// Sample: n = 2 -> 2
const climbingStairs = (ind, memo = {}) => {
  if (ind in memo) return memo[ind];

  if (ind === 0) return 1;
  if (ind === 1) return 1;

  let left = climbingStairs(ind - 1, memo);
  let right = climbingStairs(ind - 2, memo);
  memo[ind] = left + right;
  return memo[ind];
};

// 2nd Plm: Frog Jump -> https://www.geeksforgeeks.org/problems/geek-jump/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=geek-jump
// Sample: n = 4, height = [10,20,30,40] -> 20
const frogJump = (ind, height, memo = {}) => {
    if (ind in memo) return memo[ind];
  
    if (ind === 0) return 0;
    const left = frogJump(ind - 1, height, memo) + Math.abs(height[ind] - height[ind - 1]);
  

    let right = Infinity;
    if (ind > 1) {
      right = frogJump(ind - 2, height, memo) + Math.abs(height[ind] - height[ind - 2]);
    }
  
    memo[ind] = Math.min(left, right);
    return memo[ind];
  };

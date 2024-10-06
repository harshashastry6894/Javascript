// To solve the Fibonacci problem using dynamic programming, we can use either a top-down approach with memoization or a bottom-up approach with an iterative method. Here, I'll provide both implementations.

// 1. Top-Down Approach (Memoization)
// In this approach, we store the results of Fibonacci calculations in a cache to avoid redundant calculations.

const fibonacciMemo = (n, memo = {}) => {
  if (n in memo) return memo[n]; // Return cached value
  if (n === 0 || n === 1) return n; // Base cases

  // Store the result in the memo object
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
};

// Example usage:
console.log(fibonacciMemo(10)); // Output: 55

// 2. Bottom-Up Approach (Iterative)
// In this approach, we build up the solution iteratively from the base cases.

const fibonacciIterative = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  const fib = [0, 1]; // Base cases
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]; // Calculate current Fibonacci number
  }
  return fib[n];
};

// Example usage:
console.log(fibonacciIterative(10)); // Output: 55

// 3. Space-Optimized Version
// If we want to optimize the space complexity, we can just keep track of the last two Fibonacci numbers instead of storing the entire array.

const fibonacciOptimized = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0; // F(0)
  let b = 1; // F(1)
  
  for (let i = 2; i <= n; i++) {
    const temp = a + b; // Calculate current Fibonacci number
    a = b; // Update a to F(i-1)
    b = temp; // Update b to F(i)
  }
  return b; // F(n)
};

// Example usage:
console.log(fibonacciOptimized(10)); // Output: 55

// Summary
// - The top-down approach uses recursion with memoization to avoid redundant calculations.
// - The bottom-up approach iteratively builds up the Fibonacci numbers.
// - The space-optimized version only keeps track of the last two numbers, reducing space complexity to O(1).

// You can choose any of these methods based on your preferences and requirements!

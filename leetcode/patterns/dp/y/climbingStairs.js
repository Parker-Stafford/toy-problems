// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?



// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
 * @param {number} n
 * @return {number}
 */
// recursive solution
var climbStairs = function(n) {
  let result = 0;
  function stairClimber(climbed, total) {
    if (climbed === total) {
      result++
      return;
    }
    if (climbed <= total - 2) {
      stairClimber(climbed + 2, total);
    }
    if (climbed <= total - 1) {
      stairClimber(climbed + 1, total);
    }
  }
  stairClimber(0, n);
  return result;
};

// dynamic programming solution tabulation
var climbStairs = function(n) {
  let solutions = [1, 2];
  for (let i = 2, i <= n; i++) {
    solutions[i] = solutions[i - 1] + solutions[i - 2];
  }
  return solutions[n];
}

// DP solution bottom down memoization
var climbStairs = function(n) {
  const memo = [];
  function climber(n) {
    if (n <= 2) {
      return n;
    }
    memo[n] = memo[n - 1] + memo[n - 2]
    return memo[n]
  }
  return climber(n);
}
/* You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:
Input: coins = [2], amount = 3
Output: -1

Example 3:
Input: coins = [1], amount = 0
Output: 0

Example 4:
Input: coins = [1], amount = 1
Output: 1

Example 5:
Input: coins = [1], amount = 2
Output: 2 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// top down memoization
 var coinChange = function(coins, amount) {
  if (!amount) return 0;
  // create memo
  let memo = {}
  // depth first search
  function dfs(curAmount) {
    // if less than 0, not viable, return -1
    if (curAmount < 0) return -1;
    if (curAmount === 0) return 0;
    // if already memoized return the min coins for that amount
    if (memo[curAmount]) return memo[curAmount];
    // set an out of scope placeholder
    let minCoins = Infinity;
    for (const coin of coins) {
      // recurse for each coin
      let count = dfs(curAmount - coin);
      // if it goes over skip coin
      if (count === -1) continue;
      // set the min number of coins to be 1 more (for current coin) than whatever is returned from recursion or minCoins, if it got reset by a different coin
      minCoins = Math.min(count + 1, minCoins);
    }
    // if mincoins never got reset (no viable options) set it equal to -1, else memoize it and return
    minCoins = minCoins === Infinity ? -1 : minCoins;
    memo[curAmount] = minCoins;
    return minCoins;
  }
  return dfs(amount);
};

// bottom up tabulation
var coinChange = function(coins, amount) {
  // create array to track number of coins at each subamount up to amount
  let dp = new Array(amount + 1).fill(amount + 1);
  // coins to make 0 change is always 0
  dp[0] = 0;
  // iterate over dp array to add number of coins
  for (let i = 1; i <= amount; i++) {
    // test each coin
    for (const coin of coins) {
      // if using a coin at a specific amount is valid (not less than 0)
      if (dp[i - coin] >= 0) {
        // add one action (for using that coin) to the amount of actions for the remainder
        // test to see if that's less than the amount of actions already found for that amount
        dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
      }
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
}










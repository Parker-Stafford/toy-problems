/* You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

Example 1:
Input: prices = [1,2,3,0,2]
Output: 3
Explanation: transactions = [buy, sell, cooldown, buy, sell]
options - buy - if we own nothing, sell - if we own something, cooldown - if we sold the day before, do-nothing - anytime
 [1,2,3,0,2]
b[0,0,0,0,0]
s[0,1,2,0,2]
c[0,0,0,0,0]
d[0,0,0,0,0]


[1,2,3,0,2,5,4,1,4]
[0,1,2,2,3,6,0,0,9]



[10, 0, 11, 1, 13]
[0,  0, 11, 1, 13]

Example 2:
Input: prices = [1]
Output: 0

Constraints:
1 <= prices.length <= 5000
0 <= prices[i] <= 1000
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
// best buying point 
var maxProfit = function(prices) {
  let buy = Infinity;
  let free = 0, last = 0, now = 0;
  for (const price of prices) {
    now = Math.max(last, price - buy);
    buy = Math.min(buy, price - free);
    free = last;
    last = now;
  }
  return now;
}
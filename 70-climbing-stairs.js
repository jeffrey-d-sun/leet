/**
 * @param {number} n
 * @return {number}
 */

// O(n) time
// O(1) space
/*
  this is a dynamic programming problem solved with memoization of previous sub-problem's solution
*/

const climbStairs = (n) => {
  if (n === 1 || n === 0) return 1
  let memo = [1, 1]
  
  for (let i = 2; i <= n; i++) {
    [memo[0], memo[1]] = [memo[1], memo[0] + memo[1]]
  }
  
  return memo[1]
};

console.log(climbStairs(2)) // 2
console.log(climbStairs(3)) // 3
console.log(climbStairs(4)) // 5
console.log(climbStairs(5)) // 8
console.log(climbStairs(6)) // 13
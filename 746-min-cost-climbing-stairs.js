/**
 * @param {number[]} cost
 * @return {number}
 */

// Top-Down memoize
const minCostClimbingStairs = (cost, m ={}) => {
  const n = cost.length
  
  const go = i => {
    if (m[i]) {
      return m[i]
    }
    
    if (n <= i) {
      return m[i] = 0
    }
    
    return m[i] = cost[i] + Math.min(go(i+1), go(i+2))
  }
  
  return Math.min(go(0), go(1))
};


// Bottom-up memoized
// const minCostClimbingStairs = (cost, m ={}) => {
//   const n = cost.length
//   const dp = [] // memoized
//   dp[0] = cost[0] // base case: start on first step
//   dp[1] = cost[1] // base case: start on second step

//   for (let i = 2; i < cost.length; i++) {
//     dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]) // cost of i-th step plus min of previous one step or previous two steps
//   }

//   return Math.min(dp[n - 1], dp[n - 2])
// };

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])) // 6
console.log(minCostClimbingStairs([10, 15, 20])) // 15
console.log(minCostClimbingStairs([1, 7, 3, 6, 5, 6])) // 9
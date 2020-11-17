/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
  let max = -Infinity
  
  for(let i = 0, sum = 0; i < nums.length; i++) {
    sum += nums[i] - (nums[i-k] || 0)
    if (i >= k - 1)  max = Math.max(max, sum)
  }
  
  return max / k
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)) // 12.75
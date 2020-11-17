/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = (nums) => {
  if (nums.length === 0) return 0
  let globalMax = 1
  let max = 1
  
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i+1]) {
      max++
    } else {
      max = 1
    }
    globalMax = Math.max(max, globalMax)
  }
  
  return globalMax
};

console.log(findLengthOfLCIS([2, 2, 2, 2, 2])) // 1
console.log(findLengthOfLCIS([1, 3, 5, 4, 7])) // 3
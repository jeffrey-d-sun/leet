/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  let previous = 0
  let beforePrevious = 0
  
  for (let i = 0; i < nums.length; i++) {
    let tmp = previous
    previous = Math.max(nums[i] + beforePrevious, previous)
    beforePrevious = tmp
  }
  
  return previous
};

console.log(rob([1, 2, 3, 1])) // 4
console.log(rob([2, 7, 9, 3, 1])) // 12
console.log(rob([4, 1, 1, 4])) // 8
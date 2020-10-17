/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  const foundIdx = nums.indexOf(target)
  if (foundIdx > -1) return foundIdx
  
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i]
    const next = nums[i + 1]
    
    if (curr < target && target < next) {
      return i + 1
    } else if (curr < target && !next) {
      return nums.length
    } else {
      if (curr > target) {
        return i
      }
    }
  }
};

console.log(searchInsert([1, 3, 5, 6], 5)) // 2
console.log(searchInsert([1, 3, 5, 6], 2)) // 1
console.log(searchInsert([1, 3, 5, 6], 7)) // 4
console.log(searchInsert([1, 3, 5, 6], 0)) // 0
console.log(searchInsert([1], 0)) // 0
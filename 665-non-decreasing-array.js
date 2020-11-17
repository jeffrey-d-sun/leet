/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = (nums) => {
  let modified = false
  
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      if (modified || nums[i] > nums[i+2] && nums[i-1] > nums[i+1]) {
        return false
      }
      
      modified = true
    }
  }
  
  return true
};

console.log(checkPossibility([4, 2, 3])) // true
console.log(checkPossibility([3, 4, 2, 3])) // false
console.log(checkPossibility([5, 7, 1, 8])) // true
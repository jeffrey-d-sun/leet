/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  nums.sort((a, b) => a - b)
  
  for (let i = 0; i <= nums.length; i++) {
    if (i !== nums[i]) {
      return i
    }
  }
};

console.log(missingNumber([3, 0, 1])) // 2
console.log(missingNumber([0, 1])) // `2
console.log(missingNumber([1])) // 0
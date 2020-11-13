/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = (nums) => {
  nums = nums.sort((a, b) => a - b)
  const max1 = nums[nums.length -1]
  const max2 = nums[nums.length -2]
  const max3 = nums[nums.length -3]
  const min1 = nums[0]
  const min2 = nums[1]
  return Math.max(max1*max2*max3, max1*min1*min2)
};

console.log(maximumProduct([1, 2, 3])) // 6
console.log(maximumProduct([1, 2, 3, 4])) // 24
console.log(maximumProduct([-100, -98 -1, 2, 3, 4])) // 39200
console.log(maximumProduct([-100,-2,-3,1])) // 300
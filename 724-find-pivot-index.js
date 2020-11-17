/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
  const sum = nums.reduce((acc, num) => acc + num, 0)
  let leftSum = 0
  
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sum - leftSum - nums[i]) return i
    leftSum += nums[i]
  }
  
  return -1
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])) // 3
console.log(pivotIndex([1, 2, 3])) // -1
console.log(pivotIndex([-1, -1, -1, -1, -1, 0])) // 2
console.log(pivotIndex([-1, -1, -1, -1, -1, -1])) // -1
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = array => {
  let sum = array[0];
  let max = array[0];
  
  for (let i = 1; i < array.length; ++i) {
    sum = Math.max(sum + array[i], array[i]);
    max = Math.max(max, sum);
  }
  return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6
console.log(maxSubArray([1, 2, 3, -1])) // 6
console.log(maxSubArray([1])) // 1
console.log(maxSubArray([0])) // 0
console.log(maxSubArray([-1])) // -1
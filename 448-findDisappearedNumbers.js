/**
 * @param {number[]} nums
 * @return {number[]}
 */

const findDisappearedNumbers = function(nums) {
  const ans = [...Array(nums.length + 1)].map((_, i) => i) // +1 for 1-based indexing (0 is a sentinel placeholder value)
  nums.forEach(n => ans[n] = 0)
  return ans.filter(n => n)
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])) // [5, 6]
console.log(findDisappearedNumbers([1, 1])) // [2]
console.log(findDisappearedNumbers([10,2,5,10,9,1,1,4,3,7])) // [6, 8]
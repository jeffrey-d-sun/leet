/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = (nums) => {
  return nums.filter(num => num.toString().length % 2 === 0).length
};

console.log(findNumbers([12, 345, 2, 6, 7898])) // 2
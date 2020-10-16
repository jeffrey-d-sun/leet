/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  const hash = {}
  const size = Math.round(nums.length / 2);

  nums.forEach(n => hash[n] = (hash[n] || 0) + 1);

  for (let key in hash) {
    if (hash[key] >= size) return key
  }
}

console.log(majorityElement([3, 2, 3])) // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])) // 2
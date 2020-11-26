/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  const set = new Set(nums1.filter(n => nums2.includes(n)))
  return Array.from(set)
};

console.log(intersection([1, 2, 2, 1], [2, 2])) // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])) // [9, 4]
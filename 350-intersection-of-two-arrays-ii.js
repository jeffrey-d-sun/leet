/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  const hash = {}
  const res = []
  nums1.forEach(n => hash[n] = (hash[n] || 0) + 1)
  
  for (let n of nums2) {
    if (hash[n] > 0) {
      res.push(n)
      hash[n]--
    }
  }
  
  return res
};

console.log(intersect([1, 2, 2, 1], [2, 2])) // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])) // [4, 9]
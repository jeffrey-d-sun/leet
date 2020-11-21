/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (n) => {
  const set = new Set()
  
  n.forEach(n => {
    set.has(n) ? set.delete(n) : set.add(n)
  })
  
  return Array.from(set)[0]
};

console.log(singleNumber([2, 2, 1])) // 1
console.log(singleNumber([4, 1, 2, 1, 2])) // 4
console.log(singleNumber([1])) // 1
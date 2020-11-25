/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n, map={}, sum=0) => {
  const strNum = n.toString()
  for (let num of strNum) {
    sum += Math.pow(+num, 2)
  }
  
  if (sum === 1) return true
  if (map[sum]) return false
  map[sum] = true
  return isHappy(sum, map, 0)
};

console.log(isHappy(19)) // true
console.log(isHappy(18)) // false
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let sum = 0
  
  while(n) {
    sum++
    n = n & (n - 1)
  }
  return sum
};

console.log(hammingWeight(00000000000000000000000000001011)) // 3
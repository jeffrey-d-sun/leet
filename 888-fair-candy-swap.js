/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const fairCandySwap = (A, B) => {
  const bobSet = new Set(B)
  const aliceSet = new Set(A)
  
  const getSum = arr => arr.reduce((acc, ele) => acc + ele, 0)
  const bobSum = getSum(B)
  const aliceSum = getSum(A)
  
  for (let i = 0; i < A.length; i++) {
    const candy = ((bobSum - aliceSum) / 2) + A[i]
    if (bobSet.has(candy)) {
      return [A[i], candy]
    }
  }
  
  for (let i = 0; i < B.length; i++) {
    const candy = ((aliceSum - bobSum) / 2) + B[i]
    if (aliceSet.has(candy)) {
      return [B[i], candy]
    }
  }
};

console.log(fairCandySwap([1, 1], [2, 2])) // [1, 2]
console.log(fairCandySwap([1, 2], [2, 3])) // [1, 2]
console.log(fairCandySwap([2], [1, 3])) // [2, 3]
console.log(fairCandySwap([1, 2, 5], [2, 4])) // [5, 4]
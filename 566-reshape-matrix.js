/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = (nums, r, c) => {
  const mRows = nums.length
  const mCol = nums[0].length
  if (r * c !== mRows * mCol) return nums
  
  const flattened = nums.reduce((acc, arr) => acc.concat(arr), [])
  const matrix = []
  
  for(let i = 0; i < r; i++) {
    matrix.push(flattened.splice(0, c))
  }
  return matrix
};

console.log(matrixReshape([[1, 2], [3, 4]], 1, 4)) // [[1, 2, 3, 4]]
console.log(matrixReshape([[1, 2], [3, 4]], 2, 4)) // [[1, 2], [3, 4]]
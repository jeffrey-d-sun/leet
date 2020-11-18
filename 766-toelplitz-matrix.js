/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const isToeplitzMatrix = (matrix) => {
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] !== matrix[i-1][j-1]) {
        return false
      }
    }
  }
  return true
};

console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]])) // true
console.log(isToeplitzMatrix([[1, 2], [2, 2]])) // false

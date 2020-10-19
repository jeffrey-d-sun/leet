/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  if (!numRows || numRows < 0) return []
  
  const pascal = [[1]]
  
  for (let i = 1; i < numRows; i++) {
    const prevRow = pascal[pascal.length - 1]
    const shiftLeft = [...prevRow, 0]
    const shiftRight = [0, ...prevRow]
    const currentRow = shiftLeft.map((num, j) => num + shiftRight[j])
    pascal.push(currentRow)
  }
  
  return pascal
};

console.log(generate(3)) // [[1], [1, 1], [1, 2, 1]]
console.log(generate(4)) // [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]
console.log(generate(5)) // [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
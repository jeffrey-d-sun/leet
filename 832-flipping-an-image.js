/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = m => {
  const map = { '0': 1, '1': 0 }
  let len = m.length
  let width = m[0].length
  
  for (let i = 0; i < len; i++) {
    let inverted = []
    for (let j = width - 1; 0 <= j; j--) {
      inverted.push(map[m[i][j]])
    }
    m[i] = inverted
  }
  
  return m
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])) // [[1,0,0],[0,1,0],[1,1,1]]
console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])) // [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
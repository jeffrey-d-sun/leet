/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = A => {
  const evens = A.filter((e) => e % 2 === 0)
  const odds = A.filter((e) => e % 2 !== 0)
  
  return evens.concat(odds)
};

console.log(sortArrayByParity([3, 1, 2, 4])) // [2, 4, 3, 1]
/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = (s) => {
  let res = 0
  for (let i = 0; i < s.length; i++) {
    const ascii = s.charCodeAt(i) - 64
    res = (res * 26) + ascii
  }
  
  return res
};

console.log(titleToNumber('AA')) // 27
console.log(titleToNumber('ZY')) // 701
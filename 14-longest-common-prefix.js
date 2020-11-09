/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if (!strs.length) return ''
  strs.sort((a, b) => a.length - b.length)
  const shortestWord = strs.shift()
  let longestPrefix = ''
  
  for (let i = 0; i < shortestWord.length; i++) {
    const letter = shortestWord[i]
    
    for (let j = 0; j < strs.length; j++) {
      const str = strs[j]
      if (shortestWord.substring(0, i+1) !== str.substring(0, i+1)) {
        return longestPrefix
      }
    }
    
    longestPrefix += letter
  }
  return longestPrefix
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])) // 'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])) // ''
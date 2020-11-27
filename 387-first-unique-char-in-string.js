/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  const hash = {}
  
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (hash[c] === undefined) {
      hash[c] = [i, 1]
    } else {
      hash[c][0] = i
      hash[c][1] += 1
    }
  }
  
  
  // ans[0] stores first unique character's index
  // ans[1] stores first unique character's count
  const ans = Object.values(hash).reduce((acc, [index, count]) => {
    if (count === 1) {
      acc[0] = Math.min(index, acc[0])
      acc[1] = count
    }
    return acc
  }, [s.length-1, -1])
  
  return ans[1] === -1 ? -1 : ans[0]
};

console.log(firstUniqChar('leetcode')) // 0
console.log(firstUniqChar('loveleetcode')) // 2
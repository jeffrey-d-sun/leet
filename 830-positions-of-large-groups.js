/**
 * @param {string} s
 * @return {number[][]}
 */
const largeGroupPositions = s => {
  if (!s.length) return []
  const groups = []
  
  let group = [0, null]
  let count = 1
  
  for (let i = 1; i <= s.length; i++) {
    if (s[i] === s[i-1]) {
      count++
      if (group.length > 0) {
        group[1] = i
      }
    } else {
      if (count >= 3) {
        groups.push(group)
      }
      group = [i]
      count = 1
    }
  }
  
  return groups
};

console.log(largeGroupPositions('aba')) // []
console.log(largeGroupPositions('abbxxxxzzy')) // [[3, 6]]
console.log(largeGroupPositions('abcdddeeeeaabbbcd')) // [[3,5],[6,9],[12,14]]
console.log(largeGroupPositions('aaa')) // [[0, 2]]
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false
  const hash = {}
  for(let c of s) {
    hash[c] = (hash[c] || 0) + 1
  }
  
  for(let c of t) {
    if (hash[c] === undefined) {
      return false
    }
    if (hash[c] > 0) {
      hash[c] -= 1
    }
  }
  
  return Object.values(hash).every(count => count === 0)
};

console.log(isAnagram('anagram', 'nagaram')) // true
console.log(isAnagram('rat', 'cat')) // false
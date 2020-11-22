/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false
  const hash = {}
  for(let c in s) {
    hash[s[c]] = (hash[s[c]] || 0) + 1
  }
  
  for(let c in t) {
    if (hash[t[c]] === undefined) {
      return false
    }
    if (hash[t[c]] > 0) {
      hash[t[c]] -= 1
    }
  }
  
  return Object.values(hash).every(count => count === 0)
};

console.log(isAnagram('anagram', 'nagaram')) // true
console.log(isAnagram('rat', 'cat')) // false
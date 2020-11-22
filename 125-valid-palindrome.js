/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  if (!s) return true
  s = s.replace(/[_\W]/g, '').toLowerCase()
  for(let [i, j] = [0, s.length-1]; i<j;) {
    if (s[i] !== s[j]) {
      return false
    }
    
    i++
    j--
  }
  return true
};

console.log(isPalindrome('race a car')) // false
console.log(isPalindrome("A man, a plan, a canal: Panama")) // true
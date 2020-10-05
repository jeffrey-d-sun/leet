/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (n) => {
  const s = n.toString()
  if (s.length === 1) return true;
  if (s[0] !== s[s.length - 1]) return false;
  if (s.length === 2) return true;
  return isPalindrome(s.substring(1, s.length - 1))
};
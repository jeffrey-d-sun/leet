const longestSubstrLength = (str) => {
  let longestStr = ''
  let currentStr = ''

  for (let i = 0; i < str.length; i ++) {
    const letter = str[i]
    const index = currentStr.indexOf(letter)

    if (index > -1) {
      if (currentStr.length > longestStr.length) longestStr = currentStr
      currentStr = currentStr.slice(index + 1) + letter
    } else {
      currentStr += letter
    }
  }

  if (currentStr.length > longestStr.length) longestStr = currentStr
  return longestStr.length
}

console.log(longestSubstrLength('dvdf')) // 3, 'vdf'
console.log(longestSubstrLength('abcabcbb')) // 3, 'abc'
console.log(longestSubstrLength('bbbbbb')) // 1, 'b'
console.log(longestSubstrLength('pwwkew')) // 3, 'wke'

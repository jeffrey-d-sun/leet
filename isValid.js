const isValid = (s) => {
  const map = {
    '(':')',
    '[':']',
    '{':'}',
  }
  
  const stack = []
  
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i)
    
    if (map[char]) {
      stack.push(map[char])
    } else {
      if (stack.pop() !== char) {
        return false
      }
    }
  }
  
  return stack.length === 0
};

console.log(isValid('()')) // true
console.log(isValid('()[]{}')) // true
console.log(isValid('(]')) // false
console.log(isValid('([)]')) // false
console.log(isValid('([{}])')) // true
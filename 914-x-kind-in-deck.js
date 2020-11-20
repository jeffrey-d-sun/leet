/**
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = deck => {
  const hash = {}
  deck.forEach(card => hash[card] = (hash[card] || 0) + 1)
  
  const counts = Object.values(hash)
  const max = Math.max(...counts)
  
  for (let i = 2; i <= max; i++) {
    if (counts.every(el => el % i === 0)) return true
  }
  
  return false
};

console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])) // true
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])) // false
console.log(hasGroupsSizeX([1])) // false
console.log(hasGroupsSizeX([1, 1])) // true
console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2])) // true
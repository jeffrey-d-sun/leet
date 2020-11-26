/**
 * @param {number} n
 * @return {number}
 */

const countPrimes = (n) => {
  const primes = []
  let res = 0
  
  for (let i = 2; i < n; i++) {
    if (primes[i] === undefined) {
      primes[i] = 1
      res++
      
      let j = 2
      while (i * j < n) {
        primes[i * j] = 0
        j++
      }
    }
  }
  return res
};

console.log(countPrimes(10)) // 4
console.log(countPrimes(0)) // 0
console.log(countPrimes(1)) // 0
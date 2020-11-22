/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  const res = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push('FizzBuzz')
    } else if (i % 5 === 0) {
      res.push('Buzz')
    } else if (i % 3 === 0) {
      res.push('Fizz')
    } else {
      res.push(`${i}`)
    }
  }
  
  return res
};

console.log(fizzBuzz(15))
/*
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
*/ 
const solution = N => {
  /*
  recursive solution

  if (N === 0 || N === 1) return N
  return solution(N -1) + solution(N - 2)
  */

  // resursive with memoization
  const cache = [0, 1]
  const memoize = num => {
    if (cache[num] !== undefined) return cache[num]
    cache[num] = memoize(num - 1) + memoize(num - 2)
    return cache[num]
  }

  return memoize(N)
}

console.log(solution(2)) // 1
console.log(solution(3)) // 2
console.log(solution(4)) // 3
console.log(solution(5)) // 5

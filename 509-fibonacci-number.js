const solution = N => {
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

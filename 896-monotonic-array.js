/**
 * @param {number[]} A
 * @return {boolean}
 */
const isMonotonic = A => {
  const isIncrease = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false
      }
    }
    return true
  }
  
  const isDecrease = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        return false
      }
    }
    return true
  }
  
  return isIncrease(A) || isDecrease(A)
};

console.log(isMonotonic([6, 5, 4, 4])) // true
console.log(isMonotonic([1, 3, 2])) // false
console.log(isMonotonic([1, 2, 4, 5])) // true
console.log(isMonotonic([1, 1, 1])) // true
console.log(isMonotonic([-1, -2, 100])) // false
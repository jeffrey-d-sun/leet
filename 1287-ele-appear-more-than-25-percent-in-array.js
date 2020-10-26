/**
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = (arr, hash = {}, i = 0) => {
  hash[arr[i]] = (hash[arr[i]] || 0) + 1
  if (hash[arr[i]] && hash[arr[i]] > (arr.length * 0.25)) return arr[i]
  return findSpecialInteger(arr, hash, i + 1)
};

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7 , 10])) // 6
console.log(findSpecialInteger([1])) // 1
console.log(findSpecialInteger([1, 2, 3, 3])) // 3
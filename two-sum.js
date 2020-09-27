const twoSum = (nums, target) => {
  // two-pass hash table solution
  /*
  const hashMap = nums.reduce((acc, num, index) => {
    acc[num] = index
    return acc
  }, {})

  const res = []
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (hashMap[target - num] && hashMap[target - num] !== i) {
      res.push(i, hashMap[target - num])
      break;
    }
  }
  return res
  */

  // one-pass hash table solution
  const hash = {}
  const result = []
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (hash.hasOwnProperty(target - num)) {
      result.push(hash[target - num], i)
      break;
    }
    hash[num] = i
  }
  return result
};
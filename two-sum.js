const twoSum = (nums, target) => {
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
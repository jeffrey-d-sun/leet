const twoSum = (nums, target) => {
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
};
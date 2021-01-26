function threeSum(nums) {
  const set = new Set();
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    if(numMap[nums[i]]) {
      numMap[nums[i]].count++
    } else {
      numMap[nums[i]] = { value: nums[i], count: 1 };
    }
  }
  for (let i = 0; i < nums.length - 1; i++) {
    let first = nums[i];
    for (let j = i + 1; j< nums.length; j++) {
      let second = nums[j];
      let sum = first + second;
      let third = 0 - sum;
      if (numMap[third]) {
        let triplet = [first, second, third];
        let thirdCount = 1;
        if (first === third) {
          thirdCount++;
        }
        if (second === third) {
          thirdCount++
        }
        if (thirdCount > numMap[third].count) {
          continue
        } else {
          triplet.sort((a, b) => {
            if (a < b) {
              return -1;
            }
            return 1;
          })
          set.add(JSON.stringify(triplet));
        }
      }
    }
  }
  const results = [];
  set.forEach((item) => {
    results.push(JSON.parse(item));
  })
  return results;
}
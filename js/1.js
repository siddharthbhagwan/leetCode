var twoSum = function(nums, target) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if (compliment in hashMap && hashMap[compliment] != i) {
      return [hashMap[compliment], i];
    }
    hashMap[nums[i]] = i;
  }
};

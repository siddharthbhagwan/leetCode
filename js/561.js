/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums = nums.sort(function(a, b) {
    return a - b;
  });
  let sum = 0,
    i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i = i + 2;
  }
  return sum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let dataMap = {},
    max = nums[0],
    count = 0;
  nums.forEach(no => {
    if (dataMap[no]) {
      dataMap[no] = dataMap[no] + 1;
      if (dataMap[no] > count) {
        count = dataMap[no];
        max = no;
      }
    } else {
      dataMap[no] = 1;
    }
  });
  return max;
};

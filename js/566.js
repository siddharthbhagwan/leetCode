/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  if (nums.length * nums[0].length !== r * c) {
    return nums;
  }
  let result = [];
  let i = 0;
  let tempArr = [];
  nums.forEach(subArr => {
    subArr.some(el => {
      if (i < c) {
        tempArr.push(el);
        i++;
        if (i == c) {
          result.push(tempArr);
          tempArr = [];
          i = 0;
        }
      }
    });
  });
  return result;
};

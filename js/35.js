/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let place = 0;
  if (nums.indexOf(target) !== -1) {
    return nums.indexOf(target);
  } else {
    nums.some((num, index) => {
      if (num > target) {
        place = index;
        return true;
      } else {
        place++;
      }
    });
  }

  return place;
};

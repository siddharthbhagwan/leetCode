/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let correction = [];
  nums.sort();
  nums.some((num, index) => {
    if (nums.indexOf(num) !== nums.lastIndexOf(num)) {
      correction.push(num);
      return true;
    }
  });

  let replace = -1;
  for (let i = Math.min(...nums); i <= nums.length; i++) {
    if (nums.indexOf(i) === -1) {
      correction.push(i);
      replace = i;
      break;
    }
  }

  if (replace === -1) {
    correction.push(Math.min(...nums) - 1);
  }

  return correction;
};

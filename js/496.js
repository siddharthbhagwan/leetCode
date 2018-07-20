/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
  let result = [];
  findNums.forEach(num => {
    let search = nums.slice(nums.indexOf(num) + 1);
    let found = false;
    search.some(el => {
      if (el > num) {
        result.push(el);
        return (found = true);
      }
    });
    if (!found) {
      result.push(-1);
    }
  });
  return result;
};

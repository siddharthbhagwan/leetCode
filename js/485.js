/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let subLength = nums
    .join('')
    .split('0')
    .map(sub => sub.length);
  return Math.max(...subLength);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let duplicate = [];
  let numsHash = {};

  nums.forEach(num => {
    if (numsHash[num]) {
      duplicate.push(num);
    } else {
      numsHash[num] = 1;
    }
  });

  return duplicate;
};

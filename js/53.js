/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var dp = [];
  nums.forEach(function(n) {
    if (dp.length > 0) {
      if (dp[dp.length - 1] < 0) dp.push(n);
      else dp.push(dp[dp.length - 1] + n);
    } else {
      dp.push(n);
    }
  });

  return Math.max(...dp);
};

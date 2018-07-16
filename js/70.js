/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let mem = [1, 2];

  for (let i = 2; i < n; i++) mem[i] = mem[i - 1] + mem[i - 2];

  return mem[n - 1];
};

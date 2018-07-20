/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let rows = 0;
  let count = 1;
  while (n > 0) {
    n -= count++;
    if (n >= 0) {
      rows++;
    }
  }
  return rows;
};

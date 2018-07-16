/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let stoneMap = {};
  let sum = 0;
  S.split('').forEach(stone => {
    if (stoneMap[stone] == undefined) {
      stoneMap[stone] = 1;
    } else {
      stoneMap[stone]++;
    }
  });

  J.split('').forEach(jewel => {
    if (stoneMap[jewel]) {
      sum = sum + stoneMap[jewel];
    }
  });
  return sum;
};

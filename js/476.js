/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  return parseInt(
    num
      .toString(2)
      .split('')
      .map(eachBit => eachBit ^ 1)
      .join(''),
    2
  );
};

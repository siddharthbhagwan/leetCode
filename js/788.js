/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
  let result = 0;
  let rotate = {
    0: '0',
    1: '1',
    2: '5',
    5: '2',
    6: '9',
    8: '8',
    9: '6'
  };

  for (let i = 1; i <= N; i++) {
    let rotated = [];
    let iStr = i.toString();
    if (iStr.indexOf(3) == -1 && iStr.indexOf(4) == -1 && iStr.indexOf(7) == -1) {
      iStr.split('').some(digit => {
        rotated.push(rotate[digit]);
      });
      if (i != rotated.join('')) {
        result++;
      }
    }
  }
  return result;
};

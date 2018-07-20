/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
  let shiftedS = S.split('');
  let totalShifts = shifts.slice();
  for (let i = 0; i < S.length - 1; i++) {
    for (let j = 0; j <= i; j++) {
      totalShifts[j] = totalShifts[j] + shifts[i + 1];
    }
  }

  for (let i = 0; i < S.length; i++) shiftedS[i] = shift(shiftedS[i], totalShifts[i]);

  return shiftedS.join('');
};

const shift = (char, num) => {
  let code = char.charCodeAt(0) + num % 26;
  return String.fromCharCode(code > 122 ? code - 26 : code);
};

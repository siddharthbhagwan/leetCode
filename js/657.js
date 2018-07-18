/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  if (moves.length % 2 == 1) return false;

  let L = 0,
    U = 0;
  moves.split('').forEach(move => {
    if (move === 'L') {
      ++L;
    } else if (move === 'R') {
      --L;
    } else if (move === 'U') {
      ++U;
    } else if (move === 'D') {
      --U;
    }
  });
  return L == 0 && U == 0;
};

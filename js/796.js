/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  if (A.length !== B.length) {
    return false;
  }
  if (A == B) {
    return true;
  }
  let i = A.length;
  let check = false;
  while (i > 0) {
    let newA = A.slice(1) + A.charAt(0);
    if (newA === B) {
      check = true;
      break;
    }
    A = newA;
    i--;
  }
  return check;
};

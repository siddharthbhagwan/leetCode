/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  if (s.trim().length === 0) return 0;
  let k = s
    .trim()
    .split(' ')
    .filter(subS => subS.trim().length !== 0);
  return k.length;
};

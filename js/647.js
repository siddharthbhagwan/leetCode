/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let palCount = s.length;
  for (let i = 2; i <= s.length; i++) {
    let n = 0;
    while (n + i <= s.length) {
      if (isPal(s.substring(n, n + i))) {
        palCount++;
      }
      n++;
    }
  }
  return palCount;
};

function isPal(str) {
  let pal = true;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      pal = false;
      break;
    }
  }
  return pal;
}

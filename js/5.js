/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length == 1) return s;
  let window = s.length;
  for (; window > 1; window--) {
    for (let i = 0; i + window <= s.length; i++) {
      let sub = s.slice(i, i + window);
      if (isPalindrome(sub)) {
        return sub;
      }
    }
  }
  return s[0];
};

function isPalindrome(test) {
  let len = test.length;
  for (let i = 0; i < len; i++) {
    if (test[i] != test[len - i - 1]) return false;
  }
  return true;
}

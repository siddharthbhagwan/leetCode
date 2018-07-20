/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let letterMap = {};
  let length = 0;
  let single = 0;
  s.split('').forEach(letter => {
    if (letterMap[letter]) {
      if (++letterMap[letter] % 2 === 0) {
        length += 2;
        --single;
      } else {
        ++single;
      }
    } else {
      letterMap[letter] = 1;
      ++single;
    }
  });
  return single > 0 ? length + 1 : length;
};

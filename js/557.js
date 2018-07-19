/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let rs = [];
  s.split(' ').forEach(word => {
    rs.push(
      word
        .split('')
        .reverse()
        .join('')
    );
  });
  return rs.join(' ');
};

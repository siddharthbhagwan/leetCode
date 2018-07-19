/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  return (
    word === word.toLowerCase() ||
    word === word.toUpperCase() ||
    word === word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
};

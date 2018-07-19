/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  let row1 = 'qwertyuiop';
  let row2 = 'asdfghjkl';
  let row3 = 'zxcvbnm';
  let results = [];

  words.forEach(word => {
    let rc;
    let oneRow = true;
    if (row1.split('').indexOf(word[0].toLowerCase()) !== -1) {
      rc = row1;
    } else if (row2.split('').indexOf(word[0].toLowerCase()) !== -1) {
      rc = row2;
    } else {
      rc = row3;
    }
    word.split('').some(letter => {
      if (rc.indexOf(letter.toLowerCase()) === -1) {
        oneRow = false;
      }
    });

    if (oneRow) {
      results.push(word);
    }
  });
  return results;
};

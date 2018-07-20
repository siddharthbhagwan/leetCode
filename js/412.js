/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let i = 1;
  let ans = [];
  while (i <= n) {
    if (i % 15 == 0) {
      ans.push('FizzBuzz');
    } else if (i % 5 == 0) {
      ans.push('Buzz');
    } else if (i % 3 == 0) {
      ans.push('Fizz');
    } else {
      ans.push(i.toString());
    }
    i++;
  }
  return ans;
};

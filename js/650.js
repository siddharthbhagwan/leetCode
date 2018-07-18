/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  let current = 'A';
  let steps = 0;
  let copy = '';

  while (current.length < n) {
    if (n % current.length === 0) {
      copy = current;
      steps++;
    }
    current += copy;
    steps++;
  }

  return steps;
};

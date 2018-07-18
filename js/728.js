var selfDividingNumbers = function(left, right) {
  let results = [];
  for (let i = left; i <= right; i++) {
    let trigger = true;
    i
      .toString()
      .split('')
      .every(digit => {
        return (trigger = i % digit !== 0 ? false : true);
      });
    if (trigger) {
      results.push(i);
    }
  }
  return results;
};

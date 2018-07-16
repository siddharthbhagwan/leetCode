function countAndSay(n) {
  if (n <= 0) {
    return null;
  }

  let result = '1';
  let i = 1;

  while (i < n) {
    var newString = '';
    var counter = 1;
    for (let j = 1; j < result.length; j++) {
      if (result.charAt(j) == result.charAt(j - 1)) {
        counter++;
      } else {
        newString += counter;
        newString += result.charAt(j - 1);
        counter = 1;
      }
    }

    newString += counter;
    newString += result.charAt(result.length - 1);
    result = newString;
    i++;
  }
  return result;
}

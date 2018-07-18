var calPoints = function(ops) {
  let stack = [];
  let sum = 0;
  let pop;

  ops.forEach(op => {
    switch (op) {
      case '+':
        sum += stack[stack.length - 1] + stack[stack.length - 2];
        stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        console.log(sum);
        break;
      case 'D':
        sum += stack[stack.length - 1] * 2;
        stack.push(stack[stack.length - 1] * 2);
        console.log(sum);
        break;
      case 'C':
        pop = stack.pop();
        sum -= pop;
        console.log(sum);
        break;
      default:
        sum += parseInt(op);
        stack.push(parseInt(op));
        console.log(sum);
        break;
    }
  });
  return sum;
};

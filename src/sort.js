/* Inspired by senesh-deshan's solution for the problem - https://github.com/senesh-deshan/Google-Hash-Code-2020/tree/v3 */

module.exports = pizzas => {
  let max = pizzas.maxSlices;
  let fullSize = pizzas.noOfTypes;
  let inputList = pizzas.types;

  let solutionIndexList = [];
  let solutionValueList = [];
  let currentIndexList = [];
  let currentValueList = [];

  let maxScore = 0;
  let startIndex = fullSize;
  let sum = 0;

  while (
    (currentIndexList.length > 0 && currentIndexList[0] != 0) ||
    currentIndexList.length == 0
  ) {
    startIndex -= 1;

    for (let i = startIndex; i > -1; i--) {
      let currentValue = inputList[i];
      let tempSum = sum + currentValue;

      if (tempSum === max) {
        sum = tempSum;
        currentIndexList.push(i);
        currentValueList.push(currentValue);
        break;
      } else if (tempSum > max) {
        continue;
      } else if (tempSum < max) {
        sum = tempSum;
        currentIndexList.push(i);
        currentValueList.push(currentValue);
        continue;
      }
    }

    if (maxScore < sum) {
      maxScore = sum;
      solutionIndexList = [];
      solutionValueList = [];

      currentIndexList.forEach(element => {
        solutionIndexList.push(element);
      });

      currentValueList.forEach(element => {
        solutionValueList.push(element);
      });
    }

    if (maxScore === max) {
      break;
    }

    if (currentValueList.length !== 0) {
      sum = sum - currentValueList.pop();
    }

    if (currentIndexList.length !== 0) {
      startIndex = currentIndexList.pop();
    }

    if (currentIndexList.length === 0 && startIndex === 0) {
      break;
    }
  }

  console.log(`score: ${maxScore}`);

  return solutionIndexList.reverse();
};

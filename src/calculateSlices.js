const array = require("array");

module.exports = calculateSlices = arr => {
  let pizzaArray = array(arr.types);
  let neededSum = arr.maxSlices;
  let no = arr.noOfTypes;
  let sum = 0;
  let first = true;
  let i = pizzaArray.length - 1;

  while (i >= 0) {
    if (first) {
      sum = sum + pizzaArray[i];
      first = false;
      i--;
    } else {
      let diff = neededSum - sum;
      if (pizzaArray[i] < diff) {
        sum = sum + pizzaArray[i];
        i--;
      } else i--;
    }
  }
  console.log(sum);
  console.log(`Lost score ${arr.maxSlices - sum}`);
};

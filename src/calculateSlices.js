const array = require("array");
const exporter = require("./export");

/* GREEDY METHOD */

module.exports = (arr, filename) => {
  let pizzaArray = array(arr.types);
  let neededSum = arr.maxSlices;
  let sum = 0;
  let first = true;
  let i = pizzaArray.length - 1;
  let considered = [];
  while (i >= 0) {
    if (first) {
      sum = sum + pizzaArray[i];
      first = false;
      considered.unshift(i);
      i--;
    } else {
      let diff = neededSum - sum;
      if (pizzaArray[i] < diff) {
        sum = sum + pizzaArray[i];
        considered.unshift(i);
        i--;
      } else i--;
    }
  }
  console.log("Sum -> ", sum);
  //console.log("considered -> ", considered);
  console.log("Difference -> ", neededSum - sum);

  exporter(filename, considered);
};

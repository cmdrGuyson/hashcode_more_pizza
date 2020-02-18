const fs = require("fs");

const contents = fs.readFileSync("../input/c_medium.in", "utf8");
const lines = contents.split("\n");
const lineOne = lines[0].split(" ");
const lineTwo = lines[1].split(" ");

let w = lineTwo.map(Number);
w.unshift(0);
let C = parseInt(lineOne[0], 10);
let n = parseInt(lineOne[1], 10);
let result = 0;
let selected = [];
const arr = new Array(C).fill(null).map(() => new Array(n).fill(null));

const KS = (n, C) => {
  if (arr[n][C] != null) {
    return arr[n][C];
  }
  if (n === 0 || C === 0) {
    result = 0;
  } else if (w[n] > C) {
    result = KS(n - 1, C);
  } else {
    let tmp1 = KS(n - 1, C);
    let tmp2 = w[n] + KS(n - 1, C - w[n]);
    result = Math.max(tmp1, tmp2);
  }
  arr[n][C] = result;
  return result;
};

console.log(KS(n, C));
selected = [...new Set(selected)];
console.log(selected);

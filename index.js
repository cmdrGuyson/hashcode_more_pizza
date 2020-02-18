const readline = require("readline");
const fs = require("fs");
const mapper = require("./src/mapper");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let file;

rl.question("Input file name ", answer => {
  console.log(`Reading file name: ${answer}`);
  file = answer;
  var readStream = fs.createReadStream(`./input/${file}.in`, "utf8");
  mapper(readStream);
  rl.close();
});

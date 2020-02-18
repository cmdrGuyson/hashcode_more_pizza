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
  switch (answer) {
    case "a":
      file = "a_example";
      break;
    case "b":
      file = "b_small";
      break;
    case "c":
      file = "c_medium";
      break;
    case "d":
      file = "d_quite_big";
      break;
    case "e":
      file = "e_also_big";
      break;
  }
  var readStream = fs.createReadStream(`./input/${file}.in`, "utf8");
  mapper(readStream, file);
  rl.close();
});

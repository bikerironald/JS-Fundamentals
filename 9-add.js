const a = Number(process.argv[2]);
const b = Number(process.argv[3]);

function add(a, b) {
  return a + b;
}

console.log(add(a, b));
// This code takes two command line arguments, converts them to numbers, and prints their sum.
// It defines a function `add` that takes two parameters and returns their sum.
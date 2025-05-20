// Recursive function to compute factorial
function factorial(n) {
  // Convert input to an integer
  n = parseInt(n);

  // Handle NaN case
  if (isNaN(n)) {
    return 1;
  }

  // Base case
  if (n <= 1) {
    return 1;
  }

  // Recursive case
  return n * factorial(n - 1);
}

// Get the argument from the command line (Node.js environment)
const input = process.argv[2];

// Compute the factorial
const result = factorial(input);

// Print the result
console.log(result);

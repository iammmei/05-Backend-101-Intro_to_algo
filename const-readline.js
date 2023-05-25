const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("first number : ", (num1) => {
  rl.question("second number : ", (num2) => {
    var add = +num1 + +num2;
    console.log(`The sum of ${num1} and ${num2} is ${add}`);
    rl.close();
  });
});

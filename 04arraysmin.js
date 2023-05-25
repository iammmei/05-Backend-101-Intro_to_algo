const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findMin(firstNb, secondNb, thirdNb) {
  let array = [];

  array.push(firstNb, secondNb, thirdNb);
  array.sort();
  return array;
}
/* return Math.min(array); */

rl.question(" Insert the first number: ", (firstNb) => {
  rl.question("second number:", (secondNb) => {
    rl.question("third number: ", (thirdNb) => {
      console.log(`Sorted array : ${findMin(firstNb, secondNb, thirdNb)} `);
      rl.close();
    });
  });
});

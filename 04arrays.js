// I.Print an array

// let names = ["Safa", "The", "Best"];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

//II.Maximum

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findMax(firstNb, secondNb, thirdNb) {
  let array = [];

  array.push(firstNb, secondNb, thirdNb);
  array.sort();
  return array;
}

// rl.question(" Insert the first number: ", (firstNb) => {
//   rl.question("second number:", (secondNb) => {
//     rl.question("third number: ", (thirdNb) => {
//       console.log(`Sorted array : ${findMax(firstNb, secondNb, thirdNb)} `);
//       rl.close();
//     });
//   });
// });

//III.Minimum
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findMax(firstNb, secondNb, thirdNb) {
  let array = [];

  array.push(firstNb, secondNb, thirdNb);
  array.sort();
  return array;
  // console.log( "the biggest number is: " +  )
}
rl.question(" Insert the first number: ", (firstNb) => {
  rl.question("second number:", (secondNb) => {
    rl.question("third number: ", (thirdNb) => {
      console.log(`Sorted array : ${findMax(firstNb, secondNb, thirdNb)} `);
      rl.close();
    });
  });
});

// def de la fonction findMin
function findMin(tab) {
  for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
  }
  console.log("je suis sorti de la boucle");
}

findMin([2, 3, 4, 1]);

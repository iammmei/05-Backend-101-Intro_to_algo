// I.CinemaTarifs

function reducedTarifs(age) {
  const fullPrice = 10;
  const reducedPrice = 8;

  if (age <= 18) {
    console.log(`Price: €${reducedPrice}`);
  } else {
    console.log(`Price: €${fullPrice}`);
  }
}
console.log(reducedTarifs(17));
console.log(reducedTarifs(20));

//II. Maximum

function findMaximum(a, b, c) {
  let maximum = a;
  if (b > a) {
    maximum = b;
  }
  if (c > maximum) {
    maximum = c;
  }
  return maximum;
}

console.log(findMaximum(40, 20, 30));

//III.IdenticalDice

// IV.DaysNumber

function dayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    case 7:
      dayName = "Sunday";
      break;
  }

  return dayName;
}

// V.PrintShop

function PrintPrice(numCopies) {
  let totalPrice;

  if (numCopies <= 10) {
    totalPrice = numCopies * 0.12;
  } else if (numCopies <= 30) {
    const firstTenPrice = 10 * 0.12;
    const remainingCopies = numCopies - 10;
    const nextTwentyPrice = remainingCopies * 0.11;
    totalPrice = firstTenPrice + nextTwentyPrice;
  } else {
    const firstTenPrice = 10 * 0.12;
    const nextTwentyPrice = 20 * 0.11;
    const remainingCopies = numCopies - 30;
    const additionalPrice = remainingCopies * 0.1;
    totalPrice = firstTenPrice + nextTwentyPrice + additionalPrice;
  }

  return totalPrice;
}

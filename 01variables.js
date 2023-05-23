I.Calculate;

const Sum = a + b;

var a, b, sum;
a = 20;
b = 20;
sum = a + b;

var Division = a / b;

var a, b, Division;
var a = 20;
var b = 5;
var Division = a / b;

var Modulo = a % b;

var a = 15,
  b = 3,
  Modulo = a % b;

II.ConcatenateSentence;

var a = "Hi";
var b = "Beaches";
const Sentences = a + " " + b;

console.log(Sentences);

III.Vat;

var price, priceWvat;
price = a;

priceWvat = a + a * 0.21;

console.log(priceWvat);

function calculatePriceWithVAT(price) {
  var priceWvat = price + price * 0.21;
  return priceWvat;
}

var price = a;
var priceWvat = calculatePriceWithVAT(price);
console.log(priceWvat);

/*var price, priceWvat;
        {
            var priceWvat = (price / 100) * 21
        } */

IV.SurfaceOfaRadius;

var radius, SurfaceOfaRadius;
radius = a;
var pi = 3.14;

SurfaceOfaRadius = radius * radius * pi;
console.log(SurfaceOfaRadius);

/*
        VERSION BROUILLON 
        var a, b, SurfaceOfaRadius;
         radius = a ; 
         b = 3.14
         SurfaceOfaRadius = a ** 2 * 3.14; */

V.SecondsSinceMidnight;

function SecondsSinceMidnight(hours, minutes, seconds) {
  const totalSecondes = heures * 3600 + minutes * 60 + secondes;
  return totalSecondes;
}

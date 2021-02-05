// task 1

const city = "Batumi";
const country = "Georgia";
const number = 200000;
const stadium = true;

console.log(city);
console.log(country);
console.log(number);
console.log(stadium);

// task 2

const number1 = 40;
const number2 = 70;


let result = number1 * number2;
console.log(result);

// task 3

const time = 2;
const speedOfFirst = 95;
const speedOfSecond = 114;

let result1 = speedOfFirst + speedOfSecond;
let result2 = result1 * time;
console.log(result2);

// task 4

const randomNumber = Math.floor(Math.random() * 100);

if (randomNumber < 20) {
   console.log("randomNumber меньше 20");
}
else if (randomNumber > 50) {
   console.log("randomNumber больше 50");
}
else {
   console.log("randomNumber больше 20, и меньше 50");
}

// task 5 

switch (randomNumber) {
   case 20:
      console.log("randomNumber меньше 20");
      break;
   case 50:
      console.log("randomNumber больше 50");
      break;
   default:
      console.log("randomNumber больше 20, и меньше 50");
}
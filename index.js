/*EXERCISE 1: Guess the random number*/

// const target = Math.floor(Math.random() * 10);
// let guess = null;

// while (guess !== target) {
//   guess = parseFloat(prompt("Guess a number between 0 and 9"));
//   console.log(`Guess: ${guess}`);

//   if (guess == target) {
//     console.log(`Hurray!! Traget: ${target} Guess: ${guess}`);
//     break;
//   } else if (guess > target) {
//     console.log("Too high. Guess lower.");
//   } else if (guess < target) {
//     console.log("Too low. Guess higher.");
//   }
// }

/*EXERCISE 2: Create an array of random numbers*/

function generateRandomArray(length) {
  const randomArr = [];

  for (let i = 0; i < length; i++) {
    randomArr.push(Math.floor(Math.random() * 100) + 1);
  }

  return randomArr;
}
const generateNumberInArr = generateRandomArray(100);
console.log(generateNumberInArr);


/* EXERCISE 3: Calculate the sum of even numbers in the array */ 

function sumEvenNumbers(){

}

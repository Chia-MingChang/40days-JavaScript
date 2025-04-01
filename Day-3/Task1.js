/*# Task1. Odd or Even?
 - [ ] Take a number and find if the number is an odd or even number.
 - [ ] Print the number and result in the console.*/
 function OddOrEven(number) {
    if (number % 2 === 0) {
        console.log(`${number} is an even number.`);
    } else {
        console.log(`${number} is an odd number.`);
    }
}
const number = 187; //  number
OddOrEven(number);

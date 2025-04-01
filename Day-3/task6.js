/*6. Leap Year Checker
Is 2025 a Leap Year?

- [ ] Take `year` as input.
- [ ] Use the arithmetic operator and ternary operator to print if a year is a leap year or not.*/

const year = 2025;
const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) 
    ? `${year} is a leap year.` 
    : `${year} is not a leap year.`;
console.log(isLeap);



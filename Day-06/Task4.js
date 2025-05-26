//## 4. Write a Function to Find Factorial of a Number
//Create a function factorial(n) that returns the factorial of n.
//Example 5! = 5 * 4 * 3 * 2 * 1
const n = 5; // Example input
function factorial(n) {
    return n===0?1:n>0?factorial(n-1)*n:undefined;
    console.log(factorial(n)); 
}


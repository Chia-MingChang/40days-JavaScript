//## 2. Create a Function to Find the Maximum of Two Numbers
//Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.
function findmax(num1,num2){
   return num1===num2?`${num1} is the same with ${num2}`:num1>num2?num1:num2;
}
console.log('Maximum of two numbers:',findmax(10,20)); //Output: 20
console.log('Maximum of two numbers:',findmax(20,10)); //Output: 20
console.log('Maximum of two numbers:',findmax(10,10)); // Output: "10 is the same with 10"
console.log('Maximum of two numbers:',findmax(-10,-20)); //Output: -10
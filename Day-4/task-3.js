/*Task3. Build a Calculator with switch-case
Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.
*/


function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        case '/':
            if(num2 === 0) {
                console.log("Cannot divide by zero");
                return; // Add return to prevent further execution
            }
            console.log(num1 / num2);
            break;
        case '%':
            console.log(num1 % num2);
            break;
        default:
            console.log("Invalid operator");
            break;
    }
}
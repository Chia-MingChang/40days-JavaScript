function reverseNumber(num) {
    let reversed = 0; // Initialize the reversed number
    while (num > 0) { // Continue the loop while the number is greater than 0
        let digit = num % 10; // Extract the last digit
        reversed = reversed * 10 + digit; // Add the digit to the reversed number
        num = Math.floor(num / 10); // Remove the last digit from the number
    }
    return reversed; // Return the reversed number
}

// Example usage:
let input = 6789;
console.log(`Input: ${input}`);
console.log(`Output: ${reverseNumber(input)}`);
// Output: 9876
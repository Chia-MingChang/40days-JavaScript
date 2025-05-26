//## 3. Function to Check if a String is a Palindrome
//Create a function isPalindrome(str) that checks if a given string is a palindrome 
// (reads the same forward and backward). 
// You can not use any string function that we have not learned in the series so far.
function isPalindrome(str) {
    let left = 0; // Start pointer
    let right = str.length - 1; // End pointer

    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // If characters do not match, it's not a palindrome
        }
        left++;  // Move the start pointer to the right
        right--; // Move the end pointer to the left
    }
    return true; // If all characters match, it's a palindrome
    console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false
console.log(isPalindrome("level"));   // Output: true
console.log(isPalindrome(""));        // Output: true
console.log(isPalindrome("a"));       //
}
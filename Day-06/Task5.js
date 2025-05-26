//# 5. Write a function to Count Vowels in a String
//Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string

let str = "Hello World"; // Example input string
function vowelnum(str) {
    let count = 0; // Initialize a counter for vowels
    const vowels = "aeiouAEIOU"; // Define the vowels (both lowercase and uppercase)

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) { // Check if the current character is a vowel
            count++; // Increment the counter if it's a vowel
        }
    }
    return count; // Return the total count of vowels
    console.log(vowelnum(str)); // Output: 3 (for "Hello World")
}
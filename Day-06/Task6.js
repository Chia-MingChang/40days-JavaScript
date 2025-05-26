//6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
//Write a function capitalizeWords(sentence) that takes a sentence and capitalizes 
//the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase.
function capitalizeWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Join the capitalized words back into a sentence
    return capitalizedWords.join(' ');
}

/*
The code defines a variable called `capitalizedWords` which is created by iterating over each word in the array `words` using the `map` function.
 For each word, it performs the following steps:

1. It takes the first character of the word using `word.charAt(0)`.
2. It converts this first character to uppercase by calling `.toUpperCase()`.
3. It then takes the rest of the word using `word.slice(1)`.
4. Finally, it concatenates the uppercase first letter with the remaining part of the word.

In short, this snippet transforms every word in the original array by capitalizing its first letter, 
resulting in a new array where each word starts with an uppercase letter while the rest of the letters remain unchanged.
*/
//Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.
let personName = "John";
let personAge = 25;
let isStudent = true;
let favoriteProgrammingLanguage = "JavaScript";
// Task 2: Print the values to the console
console.log("Name:", personName);
console.log("Age:", personAge);
console.log("Is Student:", isStudent);
console.log("Favorite Programming Language:", favoriteProgrammingLanguage);

// Task 3: Reassign values to let and const variables
personName = "Jane"; // This will work
personAge = 30; // This will work
favoriteProgrammingLanguage = "Python"; // Uncommenting this will throw an error because it's a const

// Task 4: Create an object and an array
let person = {
    name: "John",
    age: 25,
    isStudent: true,
};
let hobbies = ["coding", "reading", "gaming"];

// Assign them to new variables
let newPerson = person;
let newHobbies = hobbies;

// Modify the object and array
newPerson.name = "Jane";
newHobbies.push("traveling");

// Observe changes
console.log("Modified Person Object:", person);
console.log("Modified Hobbies Array:", hobbies);
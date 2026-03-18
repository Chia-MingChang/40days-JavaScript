# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Create a Map of Student IDs and Names

- Add at least 5 students.
- Retrieve a name using a student ID.
- Delete one entry and print the Map.
//build Map with ID as key and name as value
let students = new Map([
    [100, 'John'],
  [101, 'Jane'],
  [102, 'Jack'],
  [103, 'Jenny'],
  [104, 'June']
]);
//Retrieve a name using a student ID
console.log(students.get(100));//John
//delete a row of data(delete id=102, Jack)
students.delete(102);
//print the whole map
console.log(students);
## 2. Create a Set of Programming Languages

- Add duplicate languages to test uniqueness.
- Iterate and print all unique entries.
// build Set and add deplicate entries
let languages = new Set([
  "JavaScript",
  "Python",
  "C#",
  "JavaScript", // deplicated
  "Python"      // deplicated
]);

// iterate and print the only entries
for (let lang of languages) {
  console.log(lang);
}

## 3. Compare Object vs Map for Key-Value Storage

- Store the same data in both.
- Compare insertion order and key types (e.g., object keys).
// Store the same data 
const obj = {};
obj["name"] = "Chia-Ming";
obj[42] = "numberKey";
obj[{a:1}] = "objectKey"; // notice：would be converted into "[object Object]"

const map = new Map();
map.set("name", "Chia-Ming");
map.set(42, "numberKey");
map.set({a:1}, "objectKey"); // keep object reference
-----
//insertion order
const obj = { b: 2, a: 1, 3: "num3", 1: "num1" };
console.log(Object.keys(obj)); 
// ["1", "3", "b", "a"] →  key of number would be first in sequence

const map = new Map();
map.set("b", 2);
map.set("a", 1);
map.set(3, "num3");
map.set(1, "num1");
console.log([...map.keys()]);
// ["b", "a", 3, 1] → keep inertion suquence

Object (keys coerced to strings)
--------------------------------
{
  "42": "numberKey",          // number converted to string
  "name": "Chia-Ming",        // string key
  "[object Object]": "objKey" // object converted to "[object Object]"
}

Iteration order:
1. Numeric keys (sorted ascending: "42")
2. String keys (in insertion order: "name")
3. Symbol keys (in insertion order)


Map (keys preserved as-is)
--------------------------
Map {
  42           => "numberKey",   // number key stays number
  "name"       => "Chia-Ming",   // string key
  {a:1}        => "objKey"       // object reference preserved
}

Iteration order:
- Strictly insertion order:
  42 → "numberKey"
  "name" → "Chia-Ming"
  {a:1} → "objKey"

Object forces keys into strings or symbols, so numbers and objects lose their original identity.

Map keeps keys in their original type (number, object, function, etc.).

Object iteration order is partly sorted (numeric keys first), while Map always respects insertion order.
## 4. Build a Contact List Using Map

- Use phone numbers as keys and names as values.
- Add, update, delete contacts.
- Search for a contact by number.
// Create a new Map for contacts
const contacts = new Map();

// Add contacts (phone number as key, name as value)
contacts.set('123-456-7890', 'Alice');
contacts.set('987-654-3210', 'Bob');
contacts.set('555-555-5555', 'Charlie');

console.log('Initial contacts:', contacts);

// Update a contact
contacts.set('987-654-3210', 'Robert');
console.log('After update:', contacts);

// Delete a contact
contacts.delete('555-555-5555');
console.log('After delete:', contacts);

// Search for a contact by number
const numberToSearch = '123-456-7890';
if (contacts.has(numberToSearch)) {
  console.log(`Found: ${contacts.get(numberToSearch)}`);
} else {
  console.log('Contact not found');
}

## 5. Remove Duplicates from Array Using Set

```js
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
```
Convert to a Set and back to an array with only unique values.

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
// Convert to Set, then back to Array
const uniqueFruits = [...new Set(fruits)];//Convert to a Set

## 6. Track User Logins with Set

- Add user IDs when users log in.
- Remove them on logout.
- Check if a specific user is currently logged in.

let User = new Set();//create a set to track logged-in users 
function login(userid){
  User.add(userid);
  console.log(`${userid} logged in!`);
}

function logout(userid){ //Remove users on logout from the set.
  if(User.has(userid)){
    User.delete(userid);
    console.log(`${userid} logged out!`);
  } else{
    console.log(`${userid} is not logged in!`);
  }
}
// Function to check if a user is logged in
function isLoggedIn(userid){
  return User.has(userid);
} 

// Example usage:
login("user123");          // user123 logged in.
console.log(isLoggedIn("user123")); // true
logout("user123");         // user123 logged out.
console.log(isLoggedIn("user123")); // false

## 7. Create a Map of Book Titles and Authors

- Add at least 5 entries.
- Update an author.
- Count the number of books.
let book = new Map();
book.set("Harry Poter","jk rowling");
book.set("The Ring","J.R.R. Tolkien");
book.set("Snow White","Brothers Grimm" );
book.set("The Adventures of Tom Sawyer","Mark Twain");
book.set("The Prince and the Pauper","Mark Twain");
//update an author
book.set("Harry Poter","J.K. Rowling");
//Count the number of books.
console.log(`total ${book.size} books`);
console.log(book.get("Harry Poter"));
console.log([...book.keys()]);
## 8. Associate Metadata with DOM Elements Using WeakMap

- Create fake DOM elements (objects).
- Store related metadata in a WeakMap.
- Demonstrate benefits for garbage collection.
let loginButton = {name:"button", id:"login-btn"};//Create fake DOM elements (objects).
let sidebar = {name:"div", id:"sidebar-menu"};

//Store related metadata in a WeakMap
let elementMeta = new WeakMap();

//store meta data
elementMeta.set(loginButton, { clicks: 0, lastClicked: null });
elementMeta.set(sidebar, { expanded: false });
console.log(elementMeta.get(loginButton)); // { clicks: 0, lastClicked: null }

//Demonstrate benefits for garbage collection.
loginButton = null; // simulate to remove elements in DOM
/*Auto-cleanup: Setting loginButton to null allows the WeakMap to automatically mark its associated data for recycling.
Avoid Memory Leaks: Unlike a standard Map, which keeps a reference and causes leaks, a WeakMap won't block the element from being garbage collected once removed.
*/
## 9. Track Instances of a Class with WeakSet

- Define a `Session` class.
- Add each instance to a WeakSet when created.
- Discuss how it avoids memory leaks.
const activeSessions = new WeakSet();
//Define a `Session` class
class Session {
  constructor(user) {
    this.user = user;
    this.createdAt = new Date();

    // Add the current instance (this) to the WeakSet upon creation
    activeSessions.add(this);
    console.log(`Session created for ${this.user}.`);
  }

  isValid() {
    // Check if the current instance still exists in the WeakSet
    return activeSessions.has(this);
  }
}
//Test the Implementation
let userSession = new Session("Alice");

console.log(userSession.isValid()); // Output: true

/*How This Avoids Memory Leaks
In a standard Set, adding an object creates a Strong Reference. This means even if you set the external variable to null, the Garbage Collector (GC) cannot reclaim the memory because the Set still holds a reference to it.
Benefits of using WeakSet:
Weak Reference: WeakSet does not prevent objects from being garbage collected. If there are no other references to the Session instance, the GC will automatically clear it.
Automatic Cleanup: When userSession = null; is executed, the entry in activeSessions will be removed automatically during the next GC cycle, with no need for manual deletion.
Privacy: WeakSet is not enumerable (you cannot use for...of), which prevents external code from iterating through all active sessions.
Summary:
WeakSet acts like a "ghost list"—once the object is gone from your main code, it vanishes from the list without leaving a trace in memory. */
## 10. Build a Shopping Cart Using Map

- Product IDs as keys and quantity as values.
- Add, remove, and update quantities.
- Calculate total items in the cart.
let cart = new Map();

// 1.--- Add or Update Items ---
// Add 2 units of product 'p101'
cart.set('p101', 2); 

//2.Update and Remove Operations
// Add 1 unit of product 'p202'
cart.set('p202', 1);

// Add 5 units of product 'p303'
cart.set('p303', 5);

console.log('Initial Cart:', [...cart.entries()]);
//3.calculate tatal items in the Cart
// --- Calculate Total Items ---
let totalItems = 0;

// Iterate through each quantity in the Map
for (let quantity of cart.values()) {
  totalItems += quantity;
}

console.log(`Total items in cart: ${totalItems}`); 
// Expected Output: Total items in cart: 8 (3 from p101 + 5 from p303)

## 11. Anagram Checker with Set

- Write a function that checks if two strings are anagrams.
- Use Sets to compare character presence.
//1. Implementation using Set
/**
 * Checks if two strings consist of the same unique characters.
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
function areAnagrams(str1, str2) {
  // --- Check if lengths are the same (basic requirement) ---
  if (str1.length !== str2.length) {
    return false;
  }

  // --- Create Sets from both strings ---
  const set1 = new Set(str1);
  const set2 = new Set(str2);

  // --- Compare Set sizes first ---
  if (set1.size !== set2.size) {
    return false;
  }

  // --- Check if every character in set1 exists in set2 ---
  for (let char of set1) {
    if (!set2.has(char)) {
      return false;
    }
  }

  return true;
}
//Testing the Function
// --- Test cases ---
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world"));   // Output: false
console.log(areAnagrams("race", "care"));     // Output: true

## 12. First Non-Repeating Character with Map

- Count character frequencies in a string using a Map.
- Return the first character with count 1.
function repeat(str1){
    const charMap = new Map();//build a map to store the frequencies of char
    for (let char of str1){//1st count the frequencies of char
      charMap.set(char, (charMap.get(char)||0)+1); //in the begining the 1st entry lacks of value, so assign 0 to it.
    }

    for (let char of str1){
      if (charMap.get(char)===1){
        console.log(`${char} is the 1st char with count 1`);
        return char;
      }
    }
    console.log("no frequencies of char is 1");
    return null;//if no frequencies of char is 1, return null 
}

repeat("evil");
repeat("see");
## 13. Measure Performance: Object vs Map

- Insert 100,000 key-value pairs into both.
- Use `console.time()` to benchmark speed.
const count = 100000;
//test object
console.time('Object Insert');
const obj = {};
for (let i = 0; i< count; i++){
  obj['key'+i] = i;
}
console.timeEnd('Object Insert');

//test map
console.time('Map Insert');
const map = new Map();
for (let i =0 ; i< count; i++){
  map.set('key' + i, i);
}
console.timeEnd('Map Insert');
## 14. Voting App with Set to Prevent Duplicate Votes

- Track user IDs in a Set.
- Allow each ID to vote only once.
let voteRecord = new Set();
function castVote(userId){
  if(voteRecord.has(userId)){
    console.log(`vote faliure!${userId} voted`);
  }
  voteRecord.add(userId);
  console.log(`vote success! thanks ${userId}`);
  return true;
}

//test
castVote("i123");
castVote("i123");
castVote("k123");
castVote(`total:${voteRecord}`);
## 15. Employee Registry Using Object Keys in Map

- Use employee objects as keys.
- Add and retrieve job-related info.
- Show that Object keys don't work similarly in plain objects.
let employee = new Map();
const emp1 = { id: 101, name: "Alice" };
const emp2 = { id: 101, name: "Alice" }; // the same content but different in reference

const registry = new Map();

// add data
registry.set(emp1, { position: "Senior Dev", department: "IT" });

// browse data
console.log(registry.get(emp1)); //  { position: "Senior Dev", department: "IT" }
console.log(registry.get(emp2)); //  undefined (reference different)

//contrast Plain Object
const plainObj = {};

plainObj[emp1] = "IT Department";
plainObj[emp2] = "HR Department"; // it overwrites data of emp1

console.log(plainObj[emp1]); // "HR Department"
console.log(Object.keys(plainObj)); //["[object Object]"]

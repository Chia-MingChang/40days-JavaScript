# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. What will be the output and why?

```js
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");
```
Ans. The output will print "Not provided" in console because user.age is undefined.

## 2. What will happen if we try to modify a frozen object?

```js
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
```
Ans. A frozen object will maintain its previous value if we try to modify a new value of it; thus, the ouput of the upper code is "1" in Console.
 
## 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring

```js
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};
```
Ans. 
const {
  name,
  company: {
    name: companyName,
    location: { city }
  }
} = person;

console.log(name);         // "Tapas"
console.log(companyName); // "tapaScript"
console.log(city);        // "Bangalore"



## 4. Build a Student Management System

- Store student details in an object (name, age, grades).
- Implement a method to calculate the average grade.
Ans.
const student = {
  name:Sam,
  age:18,
  grades:[0,70,80,100],
//Method calculating average grade
  ShowAverageGrade(){
	const total = this.grades.reduce((sum, grade) => sum + grade, 0)
	return (total / this.grades.length).toFixed(2);
	}
";
console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);
console.log(`Average Grade: ${student.getAverageGrade()}`); // "86.25"

## 5. Book Store Inventory System

- Store books in an object.
- Add functionality to check availability and restock books.
Ans.
const bookStore = {
  inventory : {
  "Harry Potter 1st": { quantity:5},
  "Harry Potter 2nd": { quantity:5},
  "Harry Potter 3rd": { quantity:5},
},
// Check availability
  isAvailable(bookName) {
    const book = this.inventory[bookName];
    return book ? book.quantity > 0 : false;
  },

  // Restock books
  restock(bookName, amount) {
    if (this.inventory[bookName]) {
      this.inventory[bookName].quantity += amount;
    } else {
      this.inventory[bookName] = { quantity: amount };
    }
  }
};

// 🧪 Example usage:
console.log(bookStore.isAvailable("1984")); // false
bookStore.restock("1984", 10);
console.log(bookStore.isAvailable("1984")); // true
console.log(bookStore.inventory["1984"]);   // { quantity: 10 }

## 6. What is the difference between Object.keys() and Object.entries()? Explain with examples
Object.keys() and Object.entries() are methods in JavaScript used to iterate over the properties of an object. They differ in how they provide access to object properties:

Object.keys() returns an array of a given object's own enumerable property names, while Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

Table of Content

Object.keys()
Object.entries()
Object.keys()
Object.keys() iterates over an object's own enumerable properties, returning an array containing the keys of those properties.

Example: To demonstrate the implementation of the Object.Keys() method in JavaScript.




const obj = {
    name: 'John',
    age: 30,
    city: 'New York'
};
​
const keys = Object.keys(obj);
console.log(keys);

Output
[ 'name', 'age', 'city' ]
Object.entries()
Object.entries() iterates over an object's own enumerable string-keyed property [key, value] pairs, returning an array of arrays.

Example: To demonstrate the implementation of the Object.entries() method in JavaScript.




const obj = {
    name: 'John',
    age: 30,
    city: 'New York'
};
​
const entries = Object.entries(obj);
console.log(entries);

Output
[ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]

Feature				Object.keys()				Object.entries()
Return Value		Array of object's keys		Array of [key, value] pairs
Iteration Output	Returns keys as strings		Returns [key, value] pairs as arrays
Use Case		Useful for iterating over keys	Useful for iterating over [key, value] pairs
Example Output	["name", "age", "city"]		[["name", "John"], ["age", 30], ["city", "New York"]]


## 7. How do you check if an object has a certain property?

2022 UPDATE
Object.hasOwn()
Object.hasOwn() is recommended over Object.hasOwnProperty() because it works for objects created using Object.create(null) and with objects that have overridden the inherited hasOwnProperty() method. While it is possible to workaround these problems by calling Object.prototype.hasOwnProperty() on an external object, Object.hasOwn() is more intuitive.

Example
const object1 = {
  prop: 'exists'
};

console.log(Object.hasOwn(object1, 'prop'));
// expected output: true
## 8. What will be the output and why?

```js
const person = { name: "John" };//
const newPerson = person;//newPerson = person creates a reference to the same object in memory, not a copy.
newPerson.name = "Doe";//{ name: "Doe" } When changing newPerson.name = "Doe", it's modifying the original object that both person and newPerson point to.
console.log(person.name);So when you log person.name, it reflects the updated value: "Doe".
```
output: Doe
## 9. What’s the best way to deeply copy a nested object? Expalin with examples
Deep Copy:
A Deep Copy is a copy that creates a new object with a new memory location to store the object and all of its properties. You can see it in the image. It means that if you make changes in the cloned object, it will not affect the original object. Whenever we are cloning arrays and objects in JavaScript to avoid data loss.
1. Using structuredClone() (Modern & Recommended)
javascript
const original = {
  name: "John",
  address: {
    city: "Taipei",
    zip: 407
  }
};

const copy = structuredClone(original);
copy.address.city = "Taichung";

console.log(original.address.city); // "Taipei"
✅ Deeply clones nested objects, arrays, dates, and more.
❌ Not supported in older browsers.

2. Using JSON.parse(JSON.stringify(obj)) (Classic but Limited)
javascript
const original = {
  name: "John",
  address: {
    city: "Taipei",
    zip: 407
  }
};

const copy = JSON.parse(JSON.stringify(original));
copy.address.city = "Taichung";

console.log(original.address.city); // "Taipei"
✅ Works in most environments.
❌ Loses functions, undefined, Date, Map, Set, and circular references.

3. Using a Recursive Function (Custom Control)
javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const cloned = {};
  for (const key in obj) {
    cloned[key] = deepClone(obj[key]);
  }
  return cloned;
}

const original = {
  name: "John",
  address: {
    city: "Taipei",
    zip: 407
  }
};

const copy = deepClone(original);
copy.address.city = "Taichung";

console.log(original.address.city); // "Taipei"
✅ Handles nested structures and gives full control.
❌ Requires more code and doesn't handle special types unless extended.

🧩 4. Using Libraries (e.g., Lodash)
javascript
import cloneDeep from 'lodash/cloneDeep';

const original = {
  name: "John",
  address: {
    city: "Taipei",
    zip: 407
  }
};

const copy = cloneDeep(original);
copy.address.city = "Taichung";

console.log(original.address.city); // "Taipei"
✅ Robust and handles edge cases.
❌ Requires external dependency.
## 10. Loop and print values using Object destructuiring

```js
const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];
```
const users = [
  { name: 'Alex', address: '15th Park Avenue', age: 43 },
  { name: 'Bob', address: 'Canada', age: 53 },
  { name: 'Carl', address: 'Bangalore', age: 26 }
];

for (const { name, address, age } of users) {
  console.log(`Name: ${name}, Address: ${address}, Age: ${age}`);
}
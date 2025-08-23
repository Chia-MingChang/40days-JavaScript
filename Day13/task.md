# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Create a table of two columns, `situation` and `value`. Now add the rows for every situations and the value of `this` in that situation. Please cover the following situations

- At the Global
- Inside an Object Method
- Inside the Satandalone non-Arrow Function
- Inside an Arrow Function(standalone)
- Inside an Arrow Function(as object method)
- Inside an object created with the Constructor Function

Please add examples for each of the scenarios.
Ans.
+----------------------------------------------------------+-------------------------------------------------------------+
| Situation                                                | Value of `this`                                             |
+----------------------------------------------------------+-------------------------------------------------------------+
| At the Global (non-strict mode)                          | window (in browsers) or global (in Node.js)                 |
+----------------------------------------------------------+-------------------------------------------------------------+
| At the Global (strict mode)                              | undefined                                                   |
+----------------------------------------------------------+-------------------------------------------------------------+
| Inside an Object Method                                  | The object owning the method                             |
+----------------------------------------------------------+-------------------------------------------------------------+
| Inside a Standalone non-Arrow Function (non-strict mode) | window or global                                            |
+----------------------------------------------------------+-------------------------------------------------------------+
| Inside a Standalone non-Arrow Function (strict mode)     | undefined                                                   |
+----------------------------------------------------------+-------------------------------------------------------------+
| Inside an Arrow Function (standalone)                    | Lexically inherited from the enclosing scope                |
+----------------------------------------------------------+-------------------------------------------------------------+
| Inside an Arrow Function (as object method)              | Lexically inherited from the outer scope, not the object    |
+----------------------------------------------------------+-------------------------------------------------------------+
| Inside an object created with Constructor Function       | The newly created object instance                           |
+----------------------------------------------------------+-------------------------------------------------------------+
eg.
// Global
console.log(this); // window (non-strict), undefined (strict)

// Object Method
const obj = {
  name: "Chia-Ming",
  greet() {
    console.log(this.name); // "Chia-Ming"
  }
};

// Standalone Function
function show() {
  console.log(this); // window or undefined
}

// Arrow Function (standalone)
const arrow = () => {
  console.log(this); // inherited from outer scope
};

// Arrow Function as Object Method
const obj2 = {
  name: "Taiwan",
  greet: () => {
    console.log(this.name); // likely undefined, not obj2
  }
};

// Constructor Function
function Person(name) {
  this.name = name;
}
const p = new Person("Chia-Ming");
console.log(p.name); // "Chia-Ming"


## 2. What is the problem here? Fix it to log the correct name and explain the fix

```js
const user = {
  name: "tapaScript",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet();
```
Ans. he use of this inside an arrow function. Arrow functions do not bind their own this; instead,
 they inherit it from the lexical scope in which they're defined. In this case, 
 this does not refer to the user object, but rather than the outer scope (likely window in browsers 
 or undefined in strict mode).
 ✅Fix version
 
 const user = {
  name: "tapaScript",
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet(); // Output: Hello, tapaScript!
Summary Table
+------------------+-----------------------------+------------------------------------------+
|  Function Type   |     `this` Binding Behavior | Result in `user.greet()`                |
+------------------+-----------------------------+------------------------------------------+
| Arrow Function   | Lexical (inherits from      | `this.name` is `undefined` — does not    |
|                  | outer scope)                | refer to the `user` object               |
+------------------+-----------------------------+------------------------------------------+
| Regular Function | Dynamic (bound to the       | `this.name` is `"tapaScript"` — correctly|
|                  | calling object)             | refers to the `user` object              |
+------------------+-----------------------------+------------------------------------------+

## 3. Can you explain what is the problem here and fix the issue to log the correct name?

```js
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;// obj detachs the method currently
greetFn();//the method cannot be invoked 
```
Ans.
When assigning obj.greet to greetFn, it is detaching the method from its object. 
So when greetFn() is called, it's no longer invoked as a method of obj, 
and this inside greet no longer refers to obj. Instead, in non-strict mode, 
this defaults to the global object (window in browsers), and in strict mode, it's undefined.

As a result, this.name becomes undefined, and the output is:Hello, undefined!
✅ Fixed Version
It can be fixed this by explicitly binding this to obj using .bind():

js
const obj = {
  name: "Tom",

  // Regular method: 'this' refers to 'obj' when called as obj.greet()
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

// Fix: bind 'this' to 'obj' so it works even when detached
const greetFn = obj.greet.bind(obj); //bind

// Now 'this' inside greetFn refers to 'obj'
greetFn(); // Output: Hello, Tom!


.bind() method creates a new function with this permanently set to the provided object (obj in this case). 
So even when greetFn is called independently, it still knows to use obj.name.
----
Alternative Fixes
1. Use an Arrow Function Wrapper (if you can't use .bind)
js
const greetFn = () => obj.greet();
greetFn(); // Output: Hello, Tom!
2. Call Directly Without Detaching
js
obj.greet(); // Output: Hello, Tom!
3. Use .call() or .apply() for one-time invocation
js
obj.greet.call(obj);   // Output: Hello, Tom!
obj.greet.apply(obj);  // Output: Hello, Tom!

## 4. What is the problem with the following code? Why isn't it logging the name correctly?

```js
const user = {
  name: "Alex",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user.greet();
```
function inner() does not equip any propertty named name, so no property  is invoked.
inner() is a regular function, not a method of the user object.

When you call inner() inside greet(), it executes in the global context, not bound to user.

So this.name refers to undefined (in strict mode) or window.name (in non-strict mode), which is likely empty.
the Result
Hello, undefined!

1. Use an Arrow Function (inherits this from greet)
js
const user = {
  name: "Alex",
  greet: function () {
    const inner = () => {
      console.log(`Hello, ${this.name}!`);
    };
    inner();
  },
};
2. Bind this Explicitly
js
const user = {
  name: "Alex",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner.call(this); // or inner.bind(this)();
  },
};
3. Capture this in a Variable
js
const user = {
  name: "Alex",
  greet: function () {
    const self = this;
    function inner() {
      console.log(`Hello, ${self.name}!`);
    }
    inner();
  },
};
🧠 Summary Table
程式碼
+------------------------+-----------------------------+------------------------+
| Approach               | `this` Context              | Output                 |
+------------------------+-----------------------------+------------------------+
| Regular function call  | Global / undefined          | Hello, undefined!      |
| Arrow function         | Inherits from `greet`       | Hello, Alex!           |
| `call` / `bind`        | Explicitly set to `user`    | Hello, Alex!           |
| Save `this` as `self`  | Closure workaround          | Hello, Alex!           |
+------------------------+-----------------------------+------------------------+
If you’re curious how this plays out in class methods, event handlers, or async callbacks, I can walk you through those too.


## 5. Create a `Sports` constructor function that takes `name` and `number of players` as arguments and assigns them using `this` keyword. Then, create two sports instances and log their details
Ans. //Constructor function
fuction Sports(name,numberOfPlayers){
	this.name= name;
	this.numberOfPlayers = numberOfPlayers;
}
//Creating 2 instances
const tennis = new Sports("Tennis", 2);
const baseball = new Sports("Baseball", 15)
//Logging their details
console.log("Sport:", tennis.name, "tennis.numberOfPlayers);
console.log("Sport:", baseball.name, "baseball.numberOfPlayers);
## 6. Can you attach the car1's `describe()` method to car2 object? Give all possible solutions that you can think of

```js
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};
```
Ans.
✅ 1. Direct Assignment

car2.describe = car1.describe;
car2.describe(); // This car is a BMW X1.
✅ 2. Using Object.assign()

Object.assign(car2, { describe: car1.describe });
car2.describe(); // This car is a BMW X1.
✅ 3. Using Object.defineProperty()

Object.defineProperty(car2, 'describe', {
  value: car1.describe,
  writable: true,
  configurable: true,
});
car2.describe(); // This car is a BMW X1.
✅ 4. Using Prototype (if you want shared behavior)

Object.setPrototypeOf(car2, car1);
car2.describe(); // This car is a BMW X1.
⚠️ This changes the prototype chain, so use with care if car2 already has a prototype you rely on.

❌ What’s incorrect in your current code?
You’ve redefined describe() inside car2, so it’s not using car1's method. If the question is about reusing car1.describe, then that part should be removed from car2.

## 7. What will be the output of the following code and why?

```js
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();
```
Ans.B
Options are:

- A: "Charlie" and "Charlie"
- B: "Charlie" and undefined
- C: "Charlie" and "" (empty string)
- D: undefined and "Charlie"
sayHello is a regular function, so this refers to the object that calls it — in this case, person.

sayHelloArrow is an arrow function, which does not have its own this.
 Instead, it inherits this from its lexical scope — which, in this case, 
 is likely the global object (window in browsers, or undefined in strict mode).
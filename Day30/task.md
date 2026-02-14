# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Create a Book Class

- Create a Book class with properties: title, author, pages.
- Add a method describe() that logs:
    "Title: [title], Author: [author], Pages: [pages]"
- Create at least two book objects and call the describe() method.
class Book{
  constructor(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  describe() { console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
        }
}
const h = new Book("Harry Potter");
const r = new Book("THe Ring");
## 2. Use Getters and Setters with a Temperature Class

- Create a Temperature class with a private field _celsius.
- Add a getter to return Fahrenheit value.
- Add a setter to set Celsius temperature.
- Test setting temperature and logging Fahrenheit.

```js
this._celsius * 1.8 + 32;
```
class Temperature{
  #_celsius = 0;
  //Getter return Fahrenheit value.
  get fahrenheit(){
    return this.#_celsius * 9/5 + 32;
  }
  //set Celsius temperature
  set celsius(value){
    this.#_celsius = value;
  }
}
//test
const temp = new Temperature();
console.log(temp.fahrenheit);
temp.celsius = 25;
console.log(temp.fahrenheit);
## 3. Build a User Class with Public & Private Fields

- Fields: name, `#password`
- Add a method checkPassword(pw) that checks if it matches #password.
- Show how private fields can’t be accessed directly outside the class.
class User{
  name = "Huang";
  #password;
  setPassword(pw) { 
    this.#password = pw; 
    }

  checkPassword(pw){
    return pw === this.#password
  }
}
const u = new User();
console.log(u.name);
console.log(u.#password);// SyntaxError
u.setPassword("abc123");
console.log(u.checkPassword("abc123")); // true 
console.log(u.checkPassword("wrong")); // false
## 4. Inheritance — Vehicle and Car

- Vehicle class has fields: make, model, and method start()
- Car extends Vehicle, adds fuelType
- Override the start() method in Car to print: "Starting [fuelType] car: [make] [model]"
class Vehicle{
  constructor(make, model){
  this.make = make;
  this.model = model;
  }
  
  start(){
    console.log(`Starting vehicle: ${this.make} ${this.model}`);
  }
}

class Car extends Vehicle{
  constructor(make,model, fuelType){
    super(make,model);
    this.fuelType=fuelType;
  }
  start(){
    console.log(`Starting ${this.fuelType} car:${this.make} ${this.model}`);
          } 
}
const v = new Vehicle("Generic", "ModelX");
v.start();
const y = new Car("Toyota", "Yaris", "gasoline");
y.start();
const b = new Car("Benz", "A180", "gasoline");
b.start();
## 5. Use a Static Method

- Create a class MathUtils with static methods:
    add(a, b), subtract(a, b), randomInt(min, max)
- Call the methods without creating an object.
class MathUtils{
  static add(a, b){
    return a+b
  };
  static subtract(a, b){
    return a-b
  };
  static randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
}
console.log(MathUtils.add(1,2));
console.log(MathUtils.subtract(2,1));
console.log(MathUtils.aradomInt(1,2));
## 6. Smart Light Bulb Class with Access Control

- Create a SmartLightBulb class:
  - Public method: turnOn(), turnOff()
  - Private method: #connectToWiFi()
  - turnOn() first calls #connectToWiFi() and then logs: "Light is ON"
  - Static method: info() — logs "SmartLightBulb v1.0 supports remote control and scheduling."
- Try accessing the private method directly and observe the error.
class SmartLightBulb{
  turnOn(){
    this.#connectToWiFi();
    console.log("Light is ON");
  }
  turnOff(){
    console.log("Light is OFF");
  }
  #connectToWiFi(){
    console.log("Connecting to WiFi...");
  }
  static info(){
    console.log("SmartLightBulb v1.0 supports remote control and scheduling.");
  }
}
//call public methods
const bulb = new SmartLightBulb();
bulb.turnOn();
bulb.turnOff();
//call static method
SmartLightBulb.info();
bulb.#connectToWiFi();
## 7. Animal Class and Subclasses

- Base Class: Animal(name, sound)
  - Method: makeSound() logs: "The [name] says [sound]"
- Subclass 1: Dog(name) — inherits from Animal
  - Overrides makeSound() → "The Dog [name] barks!"
- Subclass 2: Cat(name)
  — overrides makeSound() → "The Cat [name] meows!"
- Call super() inside each subclass constructor
- Add a shared method sleep() in Animal and test with both Dog and Cat instances.
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
  sleep() {
    console.log(`The ${this.name} is sleeping...`);
  }
}

// Subclass 1: Dog
class Dog extends Animal {
  constructor(name) {
    super(name, "bark");
  }
}

// Subclass 2: Cat
class Cat extends Animal {
  constructor(name) {
    super(name, "meow");
  }
  makeSound() {
    console.log(`The Cat ${this.name} meows!`);
  }
}

// test
const dog = new Dog("Buddy");
dog.makeSound();
dog.sleep();

const cat = new Cat("Kitty");
cat.makeSound();
cat.sleep();

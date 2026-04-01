# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

How to Approach These Assignments

- Read the Code: Understand what it’s trying to do.
- Run the Code: See what’s printed in the console (and what’s not!).
- Debug: Use console.log(), DevTools, breakpoints, or visual stepping.
- Fix: Carefully apply knowledge of scope, async, closures, or object handling.
- Refactor: Bonus points for writing cleaner, modern code.

## 1. Closure Confusion

```js
function makeMultipliers() {
  const result = [];
  for (let i = 1; i <= 3; i++) {//ANS.change var with let as let generate its own Block Scope in each iteration
    result.push(function (num) {
      return num * i;
    });
  }
  return result;
}

const [double, triple, quadruple] = makeMultipliers();

console.log(double(2));  // Expected: 2 * 1 = 2
console.log(triple(2));  // Expected: 2 * 2 = 4
console.log(quadruple(2)); // Expected: 2 * 3 = 6
```

## 2. Async Bug with setTimeout in Loop

```js
for (let i = 0; i <= 3; i++) {
  setTimeout(function () {
    console.log("Count:", i);
  }, 1000);
}
```
for (var i = 0; i <= 3; i++) {//life closure
  (function (currentI) {
    setTimeout(function () {
      console.log("Count:", currentI);
    }, 1000);
  })(i);
}
----------
for (var i = 0; i <= 3; i++) {
  setTimeout(function (currentI) {
    console.log("Count:", currentI);
  }, 1000, i); // send i
}
- Goal: This actually works fine because of let. But refactor it to use var instead, and now fix the broken version with var.

## 3. Object Mutation Trap

```js
const config = {
  appName: "CoolApp",
  version: "1.0",
};

function updateConfig(newConfig) {
  config = { ...config, ...newConfig };//config is const, so it cannnot be reassigned; it sould be assigned properries with Object.assign
}

updateConfig({ version: "2.0" });
```

- Error: Assignment to constant variable.
- Goal: Fix the error without changing const to let, and apply a clean way to update nested configs.
//using Object.assign
const config = {
  appName: "CoolApp",
  version: "1.0",
};

function updateConfig(newConfig) {
  Object.assign(config, newConfig);//change the content of the object //Object.assign(target, source)
}

updateCobfig({version:"2.0"});
console.log(config);//{ appName: "CoolApp", version: "2.0" }
## 4. Promise Chain Gone Wrong

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

async function start() {
  const data = fetchData()
    .then(res => {
      console.log("Then block:", res);
      throw new Error("Something went wrong!");
    });

  console.log("Data:", await data);
}

start();
```

- Issue: Error isn’t caught properly. Unhandled rejection occurs.
- Goal: Catch the error properly using try/catch with await pattern.
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

async function start() {
  try{
  const data = await fetchData();
      console.log("Then block:", data);
      throw new Error("Something went wrong!");
    }catch(err){
     console.error("Caught error:", err.message);
    }
}

start();

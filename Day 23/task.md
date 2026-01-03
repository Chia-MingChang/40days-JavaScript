# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Create Your First Promise

- Create a Promise that resolves with the string "Hello, Promises!" after 1 second.
- Log the result using .then().

const myPromise = new Promise.resolve(("Hello, Promises!") =>{
  setTimeout(()=>{
    resolve("Hello,Promise!");
  },1000);
});

myPromise.then((result)=>{
  console.log(result;)
});

## 2.  Reject a Promise

- Create a Promise that immediately rejects with the message "Something went wrong!".
- Handle the error using .catch().

new Promise((resolve,reject)=>{
  reject(new Error("Something went wrong!"));
}).catch(alert);

## 3. Simulate Coin Toss

Return a Promise that randomly resolves to "Heads" or "Tails" after 1 second.

function coinFlip() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = Math.random() < 0.5 ? "Heads" : "Tails";//Math.random(): generate float number between 0 and 1 randomly
      resolve(result);//resolve: A function invoked to return the value once the asynchronous operation has finished.
    }, 1000); // 1 second delay
  });
}

// Example usage:
coinFlip().then(outcome => console.log(outcome));

## 4. Promise with Condition

- Create a function checkAge(age) that returns a Promise.
- Resolve if age >= 18, reject otherwise.
function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Adult!");
    } else {
      reject("Not Adult");
    }
  });
}

// call the condition
checkAge(20)
  .then((message) => console.log(message))   // run it as resolved
  .catch((error) => console.error(error));   // run it as rejected
## 5. Chain Promises Sequentially

- Create three Promises that log:
  - "Step 1 done"
  - "Step 2 done"
  - "Step 3 done"
- Chain them using .then().
const step1 = () => {
  return new Promise((resolve) => {
    resolve("Step 1 done");
  });
};

const step2 = () => {
  return new Promise((resolve) => {
    resolve("Step 2 done");
  });
};

const step3 = () => {
  return new Promise((resolve) => {
    resolve("Step 3 done");
  });
};

// Chaining（鏈接）these Promises
step1()
  .then((message) => {
    console.log(message);
    return step2();
  })
  .then((message) => {
    console.log(message);
    return step3();
  })
  .then((message) => {
    console.log(message);
  });
## 6. Value Transformation in Chain

- Create a Promise that resolves with 5.
- Chain .then() handlers to double it, then square it.
- Final output should be 100.
const promise = Promise.resolve(5);

promise
.then(value=>{
  // Double the value: 5 * 2 = 10
  return value*2;
  })
.then(value=>{
    // Square the value: 10 * 10 = 100
  return value*value;
})
.then(finalValue=>{
  // Log the final output
  console.log(finalValue);
});

## 7. Chain with Random Rejection

//- First .then() resolves to "Start".
Promise.resolve("Start")
  .then(val=>{
    console.log(val);
    return val;
  })
//- Second .then() randomly throws an error or returns "Continue".
  .then(data=>{
  if(Math.random()>0.5){
    throw new Error("Error!");
  }
  return "Continue";
  })
  .then(result=>{
//if Second success, run
  console.log("then:",result);
})
//- Handle rejection gracefully.a
  .catch(error=>{
    console.warn("catch errors and handle gracefully：", error.message);

  return "corrected default status";
})
  .finally(() => {
    //run whatever
    console.log("all async operations are completed");
  });
## 8. Multiple then() calls on same Promise

//- Create a single resolved Promise.

- Attach two different .then() handlers to it.
- Explain that both run independently.
const myPromise = Promise.resolve("init");
myPromise.then(val=>{
  console.log("A get:", val);
  return "value of A is changed";
});
myPromise.then(val => {
  console.log("B get:", val); 
  return "value of B is changed";
  });
//Explain that both run independently.
myPromise.then(val => {
  throw new Error("processor C error");
});

myPromise.then(val => {
  // even C throw errors， D still runs
  console.log("D gets", val); 
});

## 9.  Return New Promises in .then()

- Chain multiple .then() where each returns a new Promise with a delay and logs a step like:
  - “First”
  - “Second”
  - “Third”
const delayStep = (message, ms = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      // Pass the result to the next .then() in the chain
      resolve(`${message} completed`);
    }, ms);
  });
};

// --- Start Promise Chaining ---
console.log("Process started...");

delayStep("First")
  .then((result) => {
    // Returning a new Promise here makes the next .then() wait for it
    return delayStep("Second");
  })
  .then((result) => {
    // Return another new Promise to continue the chain
    return delayStep("Third");
  })
  .then((result) => {
    // This executes only after the "Third" step resolves successfully
    console.log("All steps finished.");
  })
  .catch((error) => {
    // Handle rejection gracefully: catch any error that occurred in the chain
    console.error("An error occurred during execution:", error);
  })
  .finally(() => {
    // Clean up or final notification regardless of success or failure
    console.log("Cleanup: Chaining process terminated.");
  });
## 10. Implement fakeDBQuery()

- Create a function that simulates a DB query with a random delay and returns data (like a user object).
- Chain multiple fake queries.
const queryDatabase = (userId) => {
  return new Promise((resolve, reject) => {
    // Simulate random DB latency between 500ms and 2000ms
    const delay = Math.floor(Math.random() * 1500) + 500;

    setTimeout(() => {
      // Simulate a failure for a specific condition (e.g., ID 99 doesn't exist)
      if (userId === 99) {
        return reject(new Error(`User with ID ${userId} not found.`));
      }

      // Successful query: return a mock user object
      const userData = { id: userId, name: `User_${userId}`, lastQueryDelay: `${delay}ms` };
      console.log(`DB Query Success: Fetched User ${userId} (${delay}ms)`);
      resolve(userData);
    }, delay);
  });
};

// --- Execution: Chaining Multiple Queries ---
console.log("Database session starting...");

queryDatabase(1)
  .then((user1) => {
    // Process first user and query for the next
    console.log("Processing:", user1.name);
    return queryDatabase(2);
  })
  .then((user2) => {
    // Process second user and query for the third
    console.log("Processing:", user2.name);
    return queryDatabase(3);
  })
  .then((user3) => {
    console.log("Final User Processed:", user3.name);
    console.log("All sequential queries completed successfully.");
  })
  .catch((error) => {
    // Graceful error handling for the entire chain
    console.warn("Graceful Catch: A database operation failed:", error.message);
  })
  .finally(() => {
    // Always close the session regardless of success/failure
    console.log("Database session closed.");
  });

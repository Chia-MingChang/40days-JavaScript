# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Create a function wait(ms) that returns a promise which resolves after ms milliseconds. Use async/await to log messages before and after the delay
function wait(ms){        //claim function wait returning Promise resolving after ms milliseconds
  return new Promise(resolve=>{
    setTimeout(()=>resolve("Done waiting!"),ms);
  });
}
// claim async function await wait(ms)
async function run(){
  console.log("Before delay");
  let result = await wait(2000);
  console.log(result);
  console.log("After delay");
}
run();

## 2. Using async/await, log "One", then after 1 second log "Two", then "Three" after another 2 seconds. No setTimeout outside of promises
function delay(ms){
  return new Promise(resolve=>{
    setTimeout(resolve, ms);
  });
}

async function run(){
  console.log("One");
  await delay(1000);
  console.log("Two");
  await delay(2000);
  console.log("Three");
}

run();
## 3. Use fetch() with async/await to load a local JSON file (data.json) and display its contents in the console
//build an async function
async function loadData(){
  try{ //use fectch to load local JSON file
    const response = await fetch("data.json");

    // Check whether the response is successful 
    if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); 
  }
  //Parse the JSON
  const data = await response.json();

  // Display the contents in the console console.log("Loaded JSON data:", data); } catch (error) { // Handle any errors console.error("Error loading JSON:", error); } 
  }

laodData();
## 4. Use the public API `https://jsonplaceholder.typicode.com/users/1` to fetch and display the user’s name, email, and address on the page
async function loadUser(){
  try{//Fetch user data from public API
    const response = await fetch{"[htt](https://jsonplaceholder.typicode.com/users/1");
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const user = await response.json();
    // Display data on the page
    document.getElementById("name").textContent = `Name: ${user.name}`;
        document.getElementById("email").textContent = `Email: ${user.email}`;
        document.getElementById("address").textContent =
          `Address: ${user.address.street}, ${user.address.city}`;
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
  }


## 5. Modify the previous task to handle errors (e.g., wrong URL) and display a user-friendly error message in the DOM
async function loadUser() {
  try {
    // Fetch user data from public API
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const user = await response.json();

    // Display data on the page
    document.getElementById("name").textContent = `Name: ${user.name}`;
    document.getElementById("email").textContent = `Email: ${user.email}`;
    document.getElementById("address").textContent =
      `Address: ${user.address.street}, ${user.address.city}`;
  } catch (error) {
    console.error("Error fetching user:", error);

    // Show a user-friendly error message in the DOM
    document.getElementById("name").textContent = "Unable to load user data.";
    document.getElementById("email").textContent = "";
    document.getElementById("address").textContent = "Please try again later.";
  }
}

loadUser();


## 6. Refactor then/catch to async/await

```js
fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```
async function loadData(){ 
  try{
    const res = await fetch('/api/data');
    if(!res.ok){
      throw new Error(`HTTP error! status: ${res.status}`)
              }
    const data = await res.json();//Replace the second .then with await on res.json()
    console.log(data);
    } catch(err){
    console.error(err);
      }
}
loadData();

## Project Task

Let's Build a “Movie Explorer” App

Build an app that lets users search movies using the OMDB API:
`http://www.omdbapi.com/?apikey=yourkey&s=movieName`

Hints:

- Input box for search term
- Display movie title, poster, and year
- Show “No results found” if search fails
- Use async/await, DOM manipulation, and try/catch

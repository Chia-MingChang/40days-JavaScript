# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Use `fetch()` to retrieve a list of users from `https://jsonplaceholder.typicode.com/users` and log the names to the console
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>{
        data.forEach(user=>{ //use forEach to check all components in the array
            console.log(response);
        });
    })
    .catch(erroe=> console.error('發生錯誤:', error));
## 2. Fetch all posts by userId=1 from `https://jsonplaceholder.typicode.com/posts?userId=1` and display the titles in the DOM
const postList = documant.getElementById('post-list');
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then(response=>response.json())
    .then(posts=>{
        posts.forEach(post => {
        //1. build new component:li
        const li = document.creatElement('li');
        //2.set content of li as article's title
        li.textContent = post.title;
        //add li into ul
        postList.appendChild(li);
    });
})
.catch(error=>console.error('catch failed',error));
## 3. Send a `POST` request to `https://jsonplaceholder.typicode.com/posts` with a new post (title, body, userId). Show the response in console
async function createPost(){
    const url  = 'https://jsonplaceholder.typicode.com/posts';


const newPost = {
    title:'My new article',
    body:'Rhis is the discription of content',
    userId:1
};

try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const result = await response.json();
    
    // 成功後，伺服器會回傳你剛剛發送的內容，並附帶一個新的 id (通常是 101)
    console.log('Server response：', result);
    
  } catch (error) {
    console.error('reponse failure：', error);
  }
}

createPost();
## 4. Update the post with `ID = 1` by sending a `PUT` request with a new title and body. Use the same endpoint
async function updatePost() {
  // Added the protocol and specific endpoint for ID 1
  const url = 'jsonplaceholder.typicode.com';
  
  const updatedData = {
    id: 1,
    title: 'Hello 2026! This is the updated title',
    body: 'The content of this post has been successfully modified in 2026.',
    userId: 1
  };

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(updatedData)
    });

    if (!response.ok) throw new Error('Update failed');

    const result = await response.json();
    
    // Log the result to the console to verify the update
    console.log('Update successful, server response:', result);

  } catch (error) {
    console.error('An error occurred:', error);
  }
}

updatePost();
## 5. Send a `PATCH` request to update just the title of post `ID = 1`
async function patchPost() {
  const url = 'jsonplaceholder.typicode.com';
  
  const partialData = {
    title: 'New Title via PATCH (2026)'
  };

  try {
    const response = await fetch(url, {
      method: 'PATCH', 
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(partialData)
    });

    if (!response.ok) throw new Error('Patch request failed');

    const result = await response.json();
    
    //  title changes, but body keep original content
    console.log('Patch Successful:', result);

  } catch (error) {
    console.error('Error:', error);
  }
}

patchPost();

## 6. Send a `DELETE` request to remove post with `ID = 1`. Log the status of the response
async function deletePost() {
  // 1. Correct URL with protocol and ID
  const url = 'jsonplaceholder.typicode.com';

  try {
    const response = await fetch(url, {
      method: 'DELETE', // 2. Conventionally uppercase
      // 3. Headers and Body are usually not required for DELETE
    });

    if (!response.ok) throw new Error('Delete request failed');

    // 4. Log the status code (e.g., 200 or 204 means success)
    console.log('Delete Successful! Status:', response.status);
    
    // JSONPlaceholder returns an empty object {} on success
    const result = await response.json();
    console.log('Server Response:', result);

  } catch (error) {
    console.error('Error:', error);
  }
}

deletePost();


## 7. Send a POST request to `https://jsonplaceholder.typicode.com/posts` with `Content-Type: application/json` in headers. Log the response
async function createPost() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  
  // The data we want to send
  const newPost = {
    title: 'Hello from 2026',
    body: 'Learning Fetch API is essential for modern web development.',
    userId: 1
  };

  try {
    const response = await fetch(url, {
      method: 'POST', // Specify the method
      headers: {
        'Content-Type': 'application/json' // Set the requirement from your prompt
      },
      body: JSON.stringify(newPost) // Convert JavaScript object to JSON string
    });

    const result = await response.json();
    console.log('Response from server:', result);
  } catch (error) {
    console.error('Error sending post:', error);
  }
}

createPost();

## 8. Create a custom function `request(url, options)` that wraps fetch. Use it to `GET` users and `POST` a new post
// 1. Define the wrapper function
async function request(url, options={}){
  try{
    const reponse= await fetch(url, options);
    if(!response.ok){
      throw new Error(`HTTP error! statusL${reponse.status}`);
    }
    return await reponse.json();
  } catch (error){
    console.error('Fetch error:',error);
    throw error;
    }
  }
  const url = 'https://jsonplaceholder.typicode.com/posts';

//  2.Practical application example
async function main() {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';

  // Use GET to fetch the user list
  try {
    const users = await request(`${BASE_URL}/users`);
    console.log('Users fetched:', users);

    // Use POST to create a new post
    const newPost = await request(`${BASE_URL}/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title: 'New Post Title',
        body: 'This is the content of the post.',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    console.log('Post created:', newPost);
  } catch (err) {
    console.error('Operation failed:', err);
  }
}

main();

## 9. Make a fetch call to a broken URL and use `.catch()` or `try...catch` to show a user-friendly error message
async function safeFetch() {
  const brokenUrl = "https://api.example.com/not-found"; // Example broken URL

  try {
    const response = await fetch(brokenUrl);

    // Step 1: Check for HTTP errors (404, 500, etc.)
    // Fetch does NOT throw errors for these, so we check manually.
    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    const data = await response.json();
    console.log("Success:", data);

  } catch (error) {
    // Step 2: Show user-friendly message
    // Distinguish between network failure and server errors if needed.
    const userMessage = error.message.includes("fetch") 
      ? "Unable to connect to the internet. Please check your connection."
      : "Something went wrong on our end. Please try again later.";
    
    displayUserError(userMessage); 
    console.error("Technical details:", error);
  }
}

function displayUserError(msg) {
  // Update your UI here
  const errorBox = document.getElementById("error-display");
  errorBox.textContent = msg;
  errorBox.style.display = "block";
}


## 10. Use `AbortController` to cancel a long-running fetch request (you can delay the response using a mock server or setTimeout)
const controller = new AbortController();
const { signal } = controller;

// 1. Initiate the fetch with the controller's signal
fetch('jsonplaceholder.typicode.com', { signal })
  .then(response => response.json())
  .then(data => console.log('Data received:', data))
  .catch(err => {
    if (err.name === 'AbortError') {
      console.log('Fetch successfully cancelled! ');
    } else {
      console.error('Fetch failed:', err);
    }
  });

// 2. Cancel the request (e.g., after 100ms if it's taking too long)
setTimeout(() => {
  controller.abort();
}, 100);

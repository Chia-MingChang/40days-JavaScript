// main.js - bring modules together and exercise them

import { createPost, getPosts } from './post.js';
import { createUser, getUsers } from './user.js';

// create some users
const alice = createUser('Alice', 'alice@example.com');
const bob = createUser('Bob', 'bob@example.com');

// create posts for users
createPost('Hello World', 'This is my first post!', alice.id);
createPost('Another Day', 'Just writing some thoughts...', bob.id);

console.log('Users:', getUsers());
console.log('Posts:', getPosts());

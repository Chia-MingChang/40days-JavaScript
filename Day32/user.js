// user.js - handles user information

const users = [];

export function createUser(name, email) {
  const user = { id: users.length + 1, name, email, joinedAt: new Date() };
  users.push(user);
  return user;
}

export function getUsers() {
  return users;
}

export function getUserById(id) {
  return users.find(u => u.id === id) || null;
}

// post.js - handles blog posts

const posts = [];

export function createPost(title, content, authorId) {
  const post = { id: posts.length + 1, title, content, authorId, createdAt: new Date() };
  posts.push(post);
  return post;
}

export function getPosts() {
  return posts;
}

export function getPostById(id) {
  return posts.find(p => p.id === id) || null;
}

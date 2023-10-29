const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/posts', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'posts.html'));
});

app.post('/posts', (req, res) => {
  res.send('Created a new post');
});

app.put('/posts/:id', (req, res) => {
  const postId = req.params.id;
  res.send(`Updated post with ID: ${postId}`);
});

app.patch('/posts/:id', (req, res) => {
  const postId = req.params.id;
  res.send(`Partially updated post with ID: ${postId}`);
});

app.delete('/posts/:id', (req, res) => {
  const postId = req.params.id;
  res.send(`Deleted post with ID: ${postId}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

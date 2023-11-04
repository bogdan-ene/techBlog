const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/articles', (req, res) => {
  res.render('articles');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/posts', (req, res) => {
  res.render('posts');
});

app.get('/5g-article', (req, res) => {
  res.render('impact-of-5g');
});

app.post('/5g-article', (req, res) => {
  res.send('Posted a new comment on the 5G article');
});

app.put('/5g-article/:id', (req, res) => {
  const commentId = req.params.id;
  res.send(`Updated comment with ID ${commentId} on the 5G article`);
});

app.patch('/5g-article/:id', (req, res) => {
  const commentId = req.params.id;
  res.send(`Partially updated comment with ID ${commentId} on the 5G article`);
});

app.delete('/5g-article/:id', (req, res) => {
  const commentId = req.params.id;
  res.send(`Deleted comment with ID ${commentId} on the 5G article`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

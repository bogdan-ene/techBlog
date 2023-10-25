const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs')

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/', (req, res) => {
    res.send('This is the post request');
});

app.put('/', (req, res) => {
    res.send('This is the put http request');
});

app.delete('/', (req, res) => {
    res.send('This is the delete http request');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
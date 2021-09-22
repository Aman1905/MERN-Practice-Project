const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World from server");
});

app.get('/about', (req, res) => {
    res.send("Hello About World from server");
});

app.get('/contact', (req, res) => {
    res.send("Hello Contact World from server");
});

app.get('/signup', (req, res) => {
    res.send("Hello Registeration World from server");
});

app.get('/signin', (req, res) => {
    res.send("Hello Login World from server");
});

// console.log("Hello Aman");

app.listen(3000, ()=> {
    console.log("Server is running at port 3000")
})

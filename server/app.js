const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'})

// database connection
require('./db/conn')
const User = require('./models/userSchema');

const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(require('./router/auth'))

const middleware = (req, res, next) => {
    console.log("Hello from Middleware");
    next();
}

app.get('/', (req, res) => {
    res.send("Hello World from Server");
});

app.get('/about', middleware, (req, res) => {
    res.send("Hello About World from Server");
});

app.get('/contact', (req, res) => {
    res.send("Hello Contact World from Server");
});

app.get('/signup', (req, res) => {
    res.send("Hello REgisteration World from Server");
});

app.get('/signin', (req, res) => {
    res.send("Hello Login World from Server");
});

app.listen(PORT, ()=> {
    console.log(`Server at ${PORT}`);
})
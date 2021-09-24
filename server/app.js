const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

dotenv.config({path:'./config.env'})

// MongoDB Connection
require('./db/conn')
// const User = require('./model/userSchema')

const PORT = process.env.PORT

// Middleware
const middleware = (req, res, next) => {
    console.log("This is Middleware");
    next();
}
// middleware();

app.get('/', (req, res) => {
    res.send("Hello World from server");
});

app.get('/about', middleware, (req, res) => {
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

app.listen(PORT, ()=> {
    console.log(`Server is running at port ${PORT}`)
})

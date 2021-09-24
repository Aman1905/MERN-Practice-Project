const mongoose = require('mongoose');
const express = require('express');
const app = express();

// database connection
const DB = 'mongodb+srv://aman:tNCoNSY4Ywv82iGS@cluster0.xuwgn.mongodb.net/mernStackPractice?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: true
}).then(() => {
    console.log('connection successful');
}).catch((err) => console.log('no connection'));

// Middleware
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

app.listen(3000, ()=> {
    console.log("Server at 3000");
})
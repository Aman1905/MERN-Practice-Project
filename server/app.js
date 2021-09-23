const express = require('express');
const mongoose = require('mongoose');
const app = express();

// MongoDB Connection
const dataBase = 'mongodb+srv://aman1905:PHeWBQvMJ7ipSQbT@practicecluster.n00h9.mongodb.net/mernPracticeDb?retryWrites=true&w=majority';

mongoose.connect(
    dataBase, 
    {
        useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true,
        // usecreateIndex: true,
    }
  );

//   useFindAndModify: false and useCreateIndex: true are commentted becasue an error was throwing i.e. MongoParseError: option usecreateindex and usefindandmodify is not supported 

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

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

app.listen(3000, ()=> {
    console.log("Server is running at port 3000")
})

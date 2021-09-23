const mongoose = require('mongoose');

const dataBase = process.env.DATABASE;

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
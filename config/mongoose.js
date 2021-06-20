const mongoose = require('mongoose');

const url = 'mongodb+srv://aman:anand@cluster0.os57u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const url = 'mongodb://localhost/codeial_development';
mongoose.connect(url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log("Successfully connected to Database :: MongoDB");
});

module.exports = db;
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = 8000;

// Reading through POST request
app.use(express.urlencoded());

// Cookie parser
app.use(cookieParser());

// MongoDB
const db = require('./config/mongoose');
// Config to use layouts
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(express.static('./assets'));

// use express router
app.use('/', require('./routes'));

// Setting view engine ejs
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if(err){
        // console.log(`Error: ${err}`);
        console.error(err);
    }
    console.log(`Server is running on port: ${port}`);
});
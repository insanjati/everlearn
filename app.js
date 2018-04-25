const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

// var logger = function(req, res, next){
//     console.log('logging....');
//     next();
// }
// app.use(logger);

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.send(people);
});

app.listen(3000, function(){
    console.log('Server listening to port 3000');
});
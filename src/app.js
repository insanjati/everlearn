const express = require('express');
const morgan = require('morgan');
// const bodyParser = require('body-parser');
// const path = require('path');
const mongoose = require('mongoose');
const app = express();

const regRoutes = require('./routes/register');
const loginRoutes = require('./routes/login');
const studentRoutes = require('./routes/student');
const mentorRoutes = require('./routes/mentor');
const coursesRouter = require('./routes/courses');
const forgetPasswordRouter = require('./routes/forget-password');

app.use(morgan('combined'));
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// body-parser already included when you install express library
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/everlearn')  
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch((err) => console.error(err));

// define routes
// app.set('routes', path.join(__dirname, 'routes'));
app.use('/courses', coursesRouter);
app.use('/register', regRoutes);
app.use('/login', loginRoutes);
app.use('/student', studentRoutes);
app.use('/mentor', mentorRoutes);
app.use('/forget-password', forgetPasswordRouter);

const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log('Server listening to port 3000');
});

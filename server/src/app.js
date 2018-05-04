const express = require('express');
const morgan = require('morgan');
// const bodyParser = require('body-parser');
// const path = require('path');
const mongoose = require('mongoose');
const app = express();

const coursesRouter = require('./routes/courses');
const regRoutes = require('./routes/register');
const loginRoutes = require('./routes/login');
// const adminRoutes = require('./routes/admin');
const adminRoutes = require('./routes/admin');
const studentRoutes = require('./routes/student');
const mentorRoutes = require('./routes/mentor');
const forgetPasswordRouter = require('./routes/forget-password');

// connect to MongoDB
mongoose.connect('mongodb://localhost/everlearn')  
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch((err) => console.error(err));
mongoose.Promise = global.Promise;

app.use(morgan('combined'));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// body-parser already included when you install express library
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use('/courses', coursesRouter);
app.use('/register', regRoutes);
app.use('/login', loginRoutes);
app.use('/admin', adminRoutes);
app.use('/student', studentRoutes);
app.use('/mentor', mentorRoutes);
app.use('/forget-password', forgetPasswordRouter);

const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log('Server listening to port 3000');
});

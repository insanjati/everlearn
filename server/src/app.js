const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');
const config = require('./config/default.json');
// const path = require('path');

const coursesRouter = require('./routes/courses');
const regRoutes = require('./routes/register');
const loginRoutes = require('./routes/login');
// const forgetPasswordRouter = require('./routes/forget-password');
const adminRoutes = require('./routes/admin');
const mentorRoutes = require('./routes/mentor');
const studentRoutes = require('./routes/student');

const app = express();
app.use(morgan('combined'));
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/courses', coursesRouter);
app.use('/register', regRoutes);
app.use('/login', loginRoutes);
// app.use('/forget-password', forgetPasswordRouter);
app.use('/admin', adminRoutes);
app.use('/mentor', mentorRoutes);
app.use('/student', studentRoutes);

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, function(){
//     console.log(`Server listening to port ${PORT}`);
// });

sequelize.sync()
  .then(() => {
    app.listen(config.port);
    console.log(`Server started on port ${config.port}`);
  })
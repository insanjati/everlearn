const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authController = require('../controllers/authController');

// ALL WORKED, RE-CHECK THE NECESSARY OF IMPORTED LIBRARY ABOVE
router.post('/student', authController.login_student);
router.post('/mentor', authController.login_mentor);

module.exports = router;

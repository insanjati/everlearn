const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");

const authController = require('../controllers/authController');

// ALL WORKED, RE-CHECK THE NECESSARY OF IMPORTED LIBRARY ABOVE
router.post('/student', authController.reg_student);
router.post('/mentor', authController.reg_mentor);

module.exports = router;

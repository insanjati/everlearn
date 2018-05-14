const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.post('/mentor', authController.logInMentor);
router.post('/student', authController.logInStudent);

module.exports = router;
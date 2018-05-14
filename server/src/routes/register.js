const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.post('/mentor', authController.regMentor);
router.post('/student', authController.regStudent);

module.exports = router;
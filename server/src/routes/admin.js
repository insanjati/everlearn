const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');
const authController = require('../controllers/authController');

router.post('/', authController.logInAdmin);
router.get('/mentors', adminController.getMentors);
router.get('/students', adminController.getStudents);
// router.get('/:courseId/classroom', courseController.getClassRoom);

module.exports = router;
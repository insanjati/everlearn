const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

router.get('/students', adminController.get_studentsAll);
router.get('/students/:studentId', adminController.get_studentsById);
router.delete('/students/:studentId', adminController.delete_student);

router.get('/mentors', adminController.get_mentorsAll);
router.get('/mentors/:mentorId', adminController.get_mentorById);
router.delete('/mentors/:mentorId', adminController.delete_mentor);

module.exports = router;
const express = require('express');
const router = express.Router();

const mentorController = require('../controllers/mentorController');

router.get('/:mentorId/profile', mentorController.getProfile);
router.put('/:mentorId/profile', mentorController.putProfile);

router.get('/:mentorId/course', mentorController.getAllCourses);
router.post('/:mentorId/course', mentorController.createCourse);
router.get('/:mentorId/course/:courseId', mentorController.getCourseById);
router.put('/:mentorId/course/:courseId', mentorController.putCourse);
router.delete('/:mentorId/course/:courseId', mentorController.deleteCourse);

module.exports = router;
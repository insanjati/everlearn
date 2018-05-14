const express = require('express');
const router = express.Router();

const courseController = require('../controllers/courseController');

router.get('/', courseController.getAllCourses);
router.get('/:courseId', courseController.getCourseById);

module.exports = router;
const express = require('express');
const router = express.Router();

const passport = require('passport');
const passportConf = require('../helpers/passport');
const authMentor = passport.authenticate('mentor', { session: false, failureRedirect: '/login/mentor' });
const decodePayload = require('../helpers/decodePayload')

const mentorController = require('../controllers/mentorController');

router.get('/:mentorId/profile', authMentor, decodePayload, mentorController.getProfile);
router.put('/:mentorId/profile', authMentor, decodePayload, mentorController.putProfile);

router.get('/:mentorId/courses', authMentor, decodePayload, mentorController.getAllCourses);
router.post('/:mentorId/courses', authMentor, decodePayload, mentorController.createCourse);
router.get('/:mentorId/course/:courseId', authMentor, decodePayload, mentorController.getCourseById);
router.put('/:mentorId/course/:courseId', authMentor, decodePayload, mentorController.putCourse);
router.delete('/:mentorId/course/:courseId', authMentor, decodePayload, mentorController.deleteCourse);

module.exports = router;
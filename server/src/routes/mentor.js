const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Mentor = require('../models/Mentor')
const Course = require('../models/Course')

const multer = require('multer');
// const upload = multer({ dest: 'uploads/' })

const mentorController = require('../controllers/mentorController');

// const authController = require('../controllers/authController');
// router.get('/register', authController.reg_mentor);
// router.get('/login', authController.login_student);

// Dipecah jadi file sendiri, this multer?
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
};
const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.get('/:mentorId/profile', mentorController.get_profile); // WORKED
router.put('/:mentorId/profile', mentorController.put_profile); // WORKED, ternyata masalah di header Postman

router.get('/:mentorId/courses', mentorController.get_coursesAll); // WORKED BUT NEED TO REFACTOR
router.get('/:mentorId/courses/:courseId', mentorController.get_courseById); // WORKED
router.put('/:mentorId/courses/:courseId', mentorController.put_course); // WORKED
router.delete('/:mentorId/courses/:courseId', mentorController.delete_course); // WORKED

// NOT WORKED
// , upload.single('courseImage')
router.post('/:mentorId/courses/add', upload.single('courseImage'), mentorController.post_course);

module.exports = router;

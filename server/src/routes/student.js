// const mongoose = require("mongoose");
const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');

// const authController = require('../controllers/authController');
// router.get('/register', authController.reg_student);
// router.get('/login', authController.login_student);

router.get('/:studentId/profile', studentController.get_profile);
router.put('/:studentId/profile', studentController.put_profile);

router.get('/:studentId/purchase', studentController.get_purchase);
router.post('/:studentId/purchase', studentController.post_purchase); // is it okay untuk bisa purchase item yang sama berkali2 ?

router.get('/:studentId/bookmark', studentController.get_bookmark);
router.post('/:studentId/bookmark', studentController.post_bookmark);
router.delete('/:studentId/bookmark/:bookmarkId', studentController.delete_bookmark);

module.exports = router;
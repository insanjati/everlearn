const express = require('express');
const router = express.Router();

const passport = require('passport');
const passportConf = require('../helpers/passport');
const authStudent = passport.authenticate('jwt-2', { session: false });
// const authStudent = require('../helpers/authStudent');

const studentController = require('../controllers/studentController');

router.get('/:studentId/profile', studentController.getProfile);
router.put('/:studentId/profile', studentController.putProfile);

router.get('/:studentId/purchase', studentController.getPurchases);
router.post('/:studentId/purchase', studentController.postPurchases); // is it okay untuk bisa purchase item yang sama berkali2 ?

// router.get('/:studentId/bookmark', studentController.get_bookmark);
// router.post('/:studentId/bookmark', studentController.post_bookmark);
// router.delete('/:studentId/bookmark/:bookmarkId', authStudent, studentController.delete_bookmark);

module.exports = router;
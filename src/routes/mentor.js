const express = require('express');
const router = express.Router();
const Mentor = require('../models/Mentor')
const Course = require('../models/Course')
const multer = require('multer');

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

router.get('/profile/:profileId', function(req, res, next) {
    const id = req.params.profileId;
    Mentor.findOne({ _id: id})
        .then(result => {
            if (!result) {
                return res.status(404).json({ 
                  message: "No valid profile found"
                });
            }
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
        });
});

router.put('/profile/:profileId', function(req, res, next) {
    const id = req.params.profileId;
    const content = req.body;
    Mentor.update({ _id: id}, content)
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Profile successfully updated',
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/mentor/profile/' + id
                }
            })
        })
});

// RESOLVED
router.get('/courses', function(req, res, next) {
    Course.find(function(err, course){
        if(err) return next(err);
        res.status(200).json(course);
    })
});

router.get('/courses/:courseId', function(req, res, next) {
    const id = req.params.courseId;
    Course.findOne({ _id: id})
        .then(result => {
            if (!result) {
                return res.status(404).json({ 
                  message: "No valid course found"
                });
            }
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
        });
});

router.put('/courses/:courseId', function(req, res, next) {
    const id = req.params.courseId;
    const content = req.body;
    Course.update({ _id: id}, content)
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Course successfully updated',
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/mentor/courses/' + id
                }
            })
        })
});

router.delete('/courses/:courseId', function(req, res, next) {
    const id = req.params.courseId;
    Course.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Course successfully deleted',
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.post('/courses/add', upload.single('productImage'), function(req, res, next) {
    // const course = new Course(req.body);
    // Course.create(course, function(err, post){
    //     if(err) return next(err);
    //     res.status(201).json({
    //         message: "course created",
    //         post
    //     })
    // })
    Course.create(req.body)
        .then(result => {
            res.status(201).json({
                message: "Course successfully created",
                result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
});

module.exports = router;

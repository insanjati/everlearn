const express = require('express');
const router = express.Router();
const Student = require('../models/Student')
const Purchase = require('../models/Purchase')
const Bookmark = require('../models/Bookmark')
const Course = require('../models/Course')

router.get('/profile/:profileId', function(req, res, next) {
    const id = req.params.profileId;
    Student.findOne({ _id: id})
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
    Student.update({ _id: id}, content)
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
        .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
        });
});


// TODO: belum bisa baca id student, baru GET all purchase
router.get('/purchase', function(req, res, next) {
    Purchase.find()
        .then(result => {
            // if (!result) {
            //     return res.status(404).json({ 
            //       message: "No valid profile found"
            //     });
            // }
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
        });
});

// TODO: placement di route mana? student atau course?
// belum membaca id student dan id course secara otomatis
// How to validasi dari 2 collection? Find dari 2 collection.
router.post('/purchase', function(req, res, next) {
    Course.findById(req.body.course)
    .then(course => {
        if (!course) {
            return res.status(404).json({
                message: "Course not found"
            });
        }
        const purchase = new Purchase({
            student: req.body.student,
            course: req.body.course            
        });
        return purchase.save();
    })
    .then(purchase => {
        console.log(purchase);
        res.status(201).json({
            message: "Purchase succeded",
            purchase,
            request: {
                type: "GET",
                url: "http://localhost:3000/student/purchase"
            }
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
});

// TODO: belum bisa baca id student, baru GET all bookmark
router.get('/bookmark', function(req, res, next) {
    Bookmark.find()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
        });
});

// belum membaca id student dan id course secara otomatis
// belum verifikasi availability user id dan bookmark id
router.post('/bookmark', function(req, res, next) {
    Bookmark.create(req.body)
        .then(result => {
            res.status(201).json({
                message: "Course successfully bookmarked",
                result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
});

router.delete('/bookmark/:bookmarkId', function(req, res, next) {
    const id = req.params.bookmarkId;
    Bookmark.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Bookmark successfully deleted',
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/student/bookmark'
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Student = require('../models/Student')

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
});

router.get('/enroll', function(req, res, next) {
    res.status(200).json({
        message: 'GET history of courses'
    })
});

router.get('/bookmark', function(req, res, next) {
    res.status(200).json({
        message: 'GET bookmarked courses'
    })
});

router.delete('/bookmark/:bookmarkId', function(req, res, next) {
    res.status(200).json({
        message: 'DELETE bookmark',
        bookmarkId: req.params.bookmarkId
    })
});

module.exports = router;
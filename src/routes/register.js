const express = require('express');
const router = express.Router();
const Student = require('../models/Student')
const Mentor = require('../models/Mentor')

router.post('/student', function(req, res) {
    // console.log(req.body);
    // res.send(req.body.fullname);
    Student.create(req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
    console.info('New student registered');
});

router.post('/mentor', function(req, res) {
    Mentor.create(req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
    console.info('New mentor registered');
});

module.exports = router;

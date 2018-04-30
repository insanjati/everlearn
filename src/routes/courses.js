const express = require('express');
const router = express.Router();
const Course = require('../models/Course')

router.get('/', function(req, res, next) {
    Course.find(function(err, course){
        if(err) return next(err);
        res.status(200).json(course);
    })
});

module.exports = router;
